---
title: "IKEA ICPSHC24-10EU-IL-1 control via MQTT"
description: "Integrate your IKEA ICPSHC24-10EU-IL-1 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ICPSHC24-10EU-IL-1.md)*

# IKEA ICPSHC24-10EU-IL-1

| Model | ICPSHC24-10EU-IL-1  |
| Vendor  | IKEA  |
| Description | TRADFRI driver for wireless control (10 watt) |
| Supports | on/off, brightness |
| Picture | ![IKEA ICPSHC24-10EU-IL-1](./assets/devices/ICPSHC24-10EU-IL-1.jpg) |

## Notes


### Pairing
To factory reset the TRADFRI drivers use a
small pin or paperclip to push the reset button once.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
