---
title: "Xiaomi LLKZMK11LM control via MQTT"
description: "Integrate your Xiaomi LLKZMK11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/LLKZMK11LM.md)*

# Xiaomi LLKZMK11LM

| Model | LLKZMK11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara wireless relay controller |
| Supports | on/off, power measurement |
| Picture | ![Xiaomi LLKZMK11LM](./assets/devices/LLKZMK11LM.jpg) |

## Notes


### Interlock
This option allows to inter connect the relays which will make sure that only one relay is on at a time. To do this publish to `zigbee2mqtt/[FRIENDLY_NAME]/set` payload `{"interlock": true}` or `{"interlock": false}`. By default this option is `false`.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
