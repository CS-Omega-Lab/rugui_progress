import time

from service.ExternalDataManager import ExternalDataManager

edm = ExternalDataManager().start_rx()

while True:
    time.sleep(0.1)
