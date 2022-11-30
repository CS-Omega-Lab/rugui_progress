import json
import time
from threading import Thread

import pythonping as pythonping
import requests
from flask import Flask, request, abort, jsonify


class ExternalDataManager:
    def __init__(self):
        self.url = "https://tracking.navigine.com/tracking/v1/tracked-objects?actv=600&api_key=CF3B959B-7F44-45F0-98C3-096FA8A534FA&wgs84=true"
        self.position = [
            0,
            0,
            0,
            0
        ]
        self.data = [
            20,
            25,
            100,
        ]
        self.raw_response = ""
        self.client_ip = "localhost"
        self.running = False
        self.rx_thread = Thread(target=self.rx_update, args=(), daemon=True)
        self.mx_thread = Thread(target=self.mx_update, args=(), daemon=True)

    def start_rx(self):
        self.rx_thread.start()
        self.mx_thread.start()
        return self

    def get_position(self):
        return self.position

    def get_running_state(self):
        return self.running

    def push_motor_power(self, data):
        self.data = [data, self.data[1], self.data[2]]

    def push_theta(self, theta):
        self.position = [self.position[0], self.position[1], self.position[2], theta]

    def rx_update(self):
        while True:
            time.sleep(0.2)

            req = requests.get(self.url)
            if req.status_code == 200:
                self.raw_response = req.text
            parsed_response = json.loads(self.raw_response)
            kx = parsed_response['data'][0]['attributes']['kx'] * 5000
            if kx > 3000:
                kx = 3000
            if kx < 0:
                kx = 0
            ky = (parsed_response['data'][0]['attributes']['ky'] - 0.45) * 3637
            if ky > 2000:
                ky = 2000
            if ky < 0:
                ky = 0
            self.position = [
                kx,
                ky,
                parsed_response['data'][0]['attributes']['accuracy'],
                self.position[3]
            ]

            response_list = pythonping.ping(self.client_ip, size=10, count=2)
            ping = response_list.rtt_avg_ms
            if ping > 100:
                ping = 100
            self.data = [self.data[0], (100 - int(ping)), self.data[2]]

    def mx_update(self):
        app = Flask(__name__)

        @app.route('/api/v1.0/check', methods=['GET'])
        def check():
            return jsonify({'status': 'OK'}), 200

        @app.route('/api/v1.0/init_session', methods=['POST'])
        def init_session():
            if not request.json:
                return jsonify({'status': 'BAD REQUEST'}), 400
            self.client_ip = request.json['ip']
            return jsonify({'status': 'OK'}), 201

        @app.route('/api/v1.0/get_data', methods=['GET'])
        def get_position():
            return jsonify({
                'status': 'OK',
                'x_pos': self.position[0],
                'y_pos': self.position[1],
                'theta': self.position[3],
                'accuracy': self.position[2],
                'signal': self.data[1],
                'power': self.data[0],
                'charge': self.data[2],
            }), 201

        @app.route('/api/v1.0/switch_state', methods=['GET'])
        def switch_state():
            self.running = not self.running
            return jsonify({'status': 'OK'}), 201

        app.run(host='0.0.0.0', debug=False)
