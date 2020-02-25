---
title: "Nue / 3A HGZB-DLC4-N12B control via MQTT"
description: "Integrate your Nue / 3A HGZB-DLC4-N12B via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HGZB-DLC4-N12B.md)*

# Nue / 3A HGZB-DLC4-N12B

| Model | HGZB-DLC4-N12B  |
| Vendor  | Nue / 3A  |
| Description | RGB LED downlight |
| Supports | on/off, brightness, color temperature, color xy |
| Picture | ![Nue / 3A HGZB-DLC4-N12B](./assets/devices/HGZB-DLC4-N12B.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
