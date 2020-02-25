---
title: "Nyce NCZ-3011-HA control via MQTT"
description: "Integrate your Nyce NCZ-3011-HA via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/NCZ-3011-HA.md)*

# Nyce NCZ-3011-HA

| Model | NCZ-3011-HA  |
| Vendor  | Nyce  |
| Description | Door/window sensor |
| Supports | motion, humidity and temperature |
| Picture | ![Nyce NCZ-3011-HA](./assets/devices/NCZ-3011-HA.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


* `humidity_precision`: Controls the precision of `humidity` values, e.g. `0`, `1` or `2`; default `2`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
