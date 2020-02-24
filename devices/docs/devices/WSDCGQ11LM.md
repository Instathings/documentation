---
title: "Xiaomi WSDCGQ11LM control via MQTT"
description: "Integrate your Xiaomi WSDCGQ11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/WSDCGQ11LM.md)*

# Xiaomi WSDCGQ11LM

| Model | WSDCGQ11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara temperature, humidity and pressure sensor |
| Supports | temperature, humidity and pressure |
| Picture | ![Xiaomi WSDCGQ11LM](./assets/devices/WSDCGQ11LM.jpg) |

## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.


* `pressure_precision`: Controls the precision of `pressure` values, e.g. `0` or `1`; default `1`.
* `pressure_calibration`: Allows to manually calibrate pressure values,
e.g. `1` would add 1 to the pressure reported by the device; default `0`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
