---
title: "Sunricher SR-ZG9001K4-DIM2 control via MQTT"
description: "Integrate your Sunricher SR-ZG9001K4-DIM2 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SR-ZG9001K4-DIM2.md)*

# Sunricher SR-ZG9001K4-DIM2

| Model | SR-ZG9001K4-DIM2  |
| Vendor  | Sunricher  |
| Description | ZigBee double key wall switch |
| Supports | on/off, brightness |
| Picture | ![Sunricher SR-ZG9001K4-DIM2](./assets/devices/SR-ZG9001K4-DIM2.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
