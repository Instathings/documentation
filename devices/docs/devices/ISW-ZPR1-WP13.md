---
title: "Bosch ISW-ZPR1-WP13 control via MQTT"
description: "Integrate your Bosch ISW-ZPR1-WP13 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ISW-ZPR1-WP13.md)*

# Bosch ISW-ZPR1-WP13

| Model | ISW-ZPR1-WP13  |
| Vendor  | Bosch  |
| Description | Motion sensor |
| Supports | occupancy and temperature |
| Picture | ![Bosch ISW-ZPR1-WP13](./assets/devices/ISW-ZPR1-WP13.jpg) |

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
