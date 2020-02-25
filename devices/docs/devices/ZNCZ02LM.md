---
title: "Xiaomi ZNCZ02LM control via MQTT"
description: "Integrate your Xiaomi ZNCZ02LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNCZ02LM.md)*

# Xiaomi ZNCZ02LM

| Model | ZNCZ02LM  |
| Vendor  | Xiaomi  |
| Description | Mi power plug ZigBee |
| Supports | on/off, power measurement |
| Picture | ![Xiaomi ZNCZ02LM](./assets/devices/ZNCZ02LM.jpg) |

## Notes


### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.


### Power outage memory
This option allows the device to restore the last on/off state when it's reconnected to power.
To set this option publish to `zigbee2mqtt/[FRIENDLY_NAME]/set` payload `{"power_outage_memory": true}` (or `false`).
Now toggle the plug once with the button on it, from now on it will restore its state when reconnecting to power.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
