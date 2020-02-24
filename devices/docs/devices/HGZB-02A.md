---
title: "Nue / 3A HGZB-02A control via MQTT"
description: "Integrate your Nue / 3A HGZB-02A via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HGZB-02A.md)*

# Nue / 3A HGZB-02A

| Model | HGZB-02A  |
| Vendor  | Nue / 3A  |
| Description | Smart light controller |
| Supports | on/off, brightness |
| Picture | ![Nue / 3A HGZB-02A](./assets/devices/HGZB-02A.jpg) |

## Notes


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
