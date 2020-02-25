---
title: "Visonic MCT-340 SMA control via MQTT"
description: "Integrate your Visonic MCT-340 SMA via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MCT-340_SMA.md)*

# Visonic MCT-340 SMA

| Model | MCT-340 SMA  |
| Vendor  | Visonic  |
| Description | Magnetic door & window contact sensor |
| Supports | contact, temperature |
| Picture | ![Visonic MCT-340 SMA](./assets/devices/MCT-340-SMA.jpg) |

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