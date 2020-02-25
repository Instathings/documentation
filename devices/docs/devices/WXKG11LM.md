---
title: "Xiaomi WXKG11LM control via MQTT"
description: "Integrate your Xiaomi WXKG11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/WXKG11LM.md)*

# Xiaomi WXKG11LM

| Model | WXKG11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara wireless switch |
| Supports | single, double click (and triple, quadruple, hold, release depending on model) |
| Picture | ![Xiaomi WXKG11LM](./assets/devices/WXKG11LM.jpg) |

## Notes


### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
