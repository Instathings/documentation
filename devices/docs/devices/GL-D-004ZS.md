---
title: "Gledopto GL-D-004ZS control via MQTT"
description: "Integrate your Gledopto GL-D-004ZS via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/GL-D-004ZS.md)*

# Gledopto GL-D-004ZS

| Model | GL-D-004ZS  |
| Vendor  | Gledopto  |
| Description | LED RGB + CCT downlight plus version 9W |
| Supports | on/off, brightness, color temperature, color |
| Picture | ![Gledopto GL-D-004ZS](./assets/devices/GL-D-004ZS.jpg) |

## Notes


### Pairing
1. Switch on your device.
2. Now switch off and on within 2 seconds.
3. Repeat off/on four times.
4. Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
