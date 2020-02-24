---
title: "GMY Smart Bulb B07KG5KF5R control via MQTT"
description: "Integrate your GMY Smart Bulb B07KG5KF5R via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/B07KG5KF5R.md)*

# GMY Smart Bulb B07KG5KF5R

| Model | B07KG5KF5R  |
| Vendor  | GMY Smart Bulb  |
| Description | GMY Smart bulb, 470lm, vintage dimmable, 2700-6500k, E27 |
| Supports | on/off, brightness, color temperature |
| Picture | ![GMY Smart Bulb B07KG5KF5R](./assets/devices/B07KG5KF5R.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
