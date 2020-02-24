---
title: "Xiaomi GZCGQ01LM control via MQTT"
description: "Integrate your Xiaomi GZCGQ01LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/GZCGQ01LM.md)*

# Xiaomi GZCGQ01LM

| Model | GZCGQ01LM  |
| Vendor  | Xiaomi  |
| Description | MiJia light intensity sensor |
| Supports | illuminance |
| Picture | ![Xiaomi GZCGQ01LM](./assets/devices/GZCGQ01LM.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `illuminance_calibration`: Allows to manually calibrate illuminance values,
e.g. `95` would take 95% to the illuminance reported by the device; default `100`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
