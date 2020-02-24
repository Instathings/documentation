---
title: "Leedarson 6ARCZABZH control via MQTT"
description: "Integrate your Leedarson 6ARCZABZH via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/6ARCZABZH.md)*

# Leedarson 6ARCZABZH

| Model | 6ARCZABZH  |
| Vendor  | Leedarson  |
| Description | 4-Key Remote Controller |
| Supports | on/off, brightness up/down and click/hold/release, cct |
| Picture | ![Leedarson 6ARCZABZH](./assets/devices/6ARCZABZH.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
