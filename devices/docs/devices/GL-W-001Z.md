---
title: "Gledopto GL-W-001Z control via MQTT"
description: "Integrate your Gledopto GL-W-001Z via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/GL-W-001Z.md)*

# Gledopto GL-W-001Z

| Model | GL-W-001Z  |
| Vendor  | Gledopto  |
| Description | Zigbee ON/OFF Wall Switch |
| Supports | on/off |
| Picture | ![Gledopto GL-W-001Z](./assets/devices/GL-W-001Z.jpg) |

## Notes


### Pairing
1. Switch on your device.
2. Now switch off and on within 2 seconds.
3. Repeat off/on four times.
4. Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
