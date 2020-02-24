---
title: "Trust ZYCT-202 control via MQTT"
description: "Integrate your Trust ZYCT-202 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZYCT-202.md)*

# Trust ZYCT-202

| Model | ZYCT-202  |
| Vendor  | Trust  |
| Description | Remote control |
| Supports | on, off, stop, up-press, down-press |
| Picture | ![Trust ZYCT-202](./assets/devices/ZYCT-202.jpg) |

## Notes


### Pairing
Factory reset the remote by holding the 0 (off) button for +-20 seconds.
To establish a connection keep the remote within 2 meters from the hub.
Press and hold the smart group button (button with two bulbs) and wait until the lights, below the channels, flash.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
