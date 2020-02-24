---
title: "TERNCY TERNCY-PP01 control via MQTT"
description: "Integrate your TERNCY TERNCY-PP01 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TERNCY-PP01.md)*

# TERNCY TERNCY-PP01

| Model | TERNCY-PP01  |
| Vendor  | TERNCY  |
| Description | Awareness switch |
| Supports | temperature, occupancy, illuminance, click, double click, triple click |
| Picture | ![TERNCY TERNCY-PP01](./assets/devices/TERNCY-PP01.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `illuminance_calibration`: Allows to manually calibrate illuminance values,
e.g. `95` would take 95% to the illuminance reported by the device; default `100`.


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
