---
title: "Konke 2AJZ4KPFT control via MQTT"
description: "Integrate your Konke 2AJZ4KPFT via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/2AJZ4KPFT.md)*

# Konke 2AJZ4KPFT

| Model | 2AJZ4KPFT  |
| Vendor  | Konke  |
| Description | Temperature and humidity sensor |
| Supports | temperature and humidity |
| Picture | ![Konke 2AJZ4KPFT](./assets/devices/2AJZ4KPFT.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.


### Important
Konke devices only work on Zigbee channel 15, 20 and 25.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
