---
title: "iCasa ICZB-KPD14S control via MQTT"
description: "Integrate your iCasa ICZB-KPD14S via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ICZB-KPD14S.md)*

# iCasa ICZB-KPD14S

| Model | ICZB-KPD14S  |
| Vendor  | iCasa  |
| Description | Zigbee 3.0 Keypad Pulse 4S |
| Supports | click, action, brightness, scenes |
| Picture | ![iCasa ICZB-KPD14S](./assets/devices/ICZB-KPD14S.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
