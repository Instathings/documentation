---
title: "Xiaomi ZNLDP12LM control via MQTT"
description: "Integrate your Xiaomi ZNLDP12LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNLDP12LM.md)*

# Xiaomi ZNLDP12LM

| Model | ZNLDP12LM  |
| Vendor  | Xiaomi  |
| Description | Aqara smart LED bulb |
| Supports | on/off, brightness, color temperature |
| Picture | ![Xiaomi ZNLDP12LM](./assets/devices/ZNLDP12LM.jpg) |

## Notes


### Pairing
Switch the lamp on five times until the bulb blinks several times.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
