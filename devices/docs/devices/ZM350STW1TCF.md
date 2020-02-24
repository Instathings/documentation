---
title: "Leedarson ZM350STW1TCF control via MQTT"
description: "Integrate your Leedarson ZM350STW1TCF via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZM350STW1TCF.md)*

# Leedarson ZM350STW1TCF

| Model | ZM350STW1TCF  |
| Vendor  | Leedarson  |
| Description | LED PAR16 50 GU10 tunable white |
| Supports | on/off, brightness, color temperature |
| Picture | ![Leedarson ZM350STW1TCF](./assets/devices/ZM350STW1TCF.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
