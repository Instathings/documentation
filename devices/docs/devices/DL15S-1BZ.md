---
title: "Leviton DL15S-1BZ control via MQTT"
description: "Integrate your Leviton DL15S-1BZ via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DL15S-1BZ.md)*

# Leviton DL15S-1BZ

| Model | DL15S-1BZ  |
| Vendor  | Leviton  |
| Description | Lumina RF 15A switch, 120/277V |
| Supports | on/off |
| Picture | ![Leviton DL15S-1BZ](./assets/devices/DL15S-1BZ.jpg) |

## Notes


### Pairing
To pair this device, hold the ON for few seconds until the red light is blinking. After that, simple tap once on the ON again to start the pairing process.

Note: This device doesn't support Zigbee channels 25 & 26.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
