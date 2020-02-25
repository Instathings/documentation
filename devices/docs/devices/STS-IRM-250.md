---
title: "SmartThings STS-IRM-250 control via MQTT"
description: "Integrate your SmartThings STS-IRM-250 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/STS-IRM-250.md)*

# SmartThings STS-IRM-250

| Model | STS-IRM-250  |
| Vendor  | SmartThings  |
| Description | Motion sensor (2016 model) |
| Supports | occupancy and temperature |
| Picture | ![SmartThings STS-IRM-250](./assets/devices/STS-IRM-250.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
