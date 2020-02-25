---
title: "Lutron LZL4BWHL01 control via MQTT"
description: "Integrate your Lutron LZL4BWHL01 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/LZL4BWHL01.md)*

# Lutron LZL4BWHL01

| Model | LZL4BWHL01  |
| Vendor  | Lutron  |
| Description | Connected bulb remote control |
| Supports | on/off, brightness |
| Picture | ![Lutron LZL4BWHL01](./assets/devices/LZL4BWHL01.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
