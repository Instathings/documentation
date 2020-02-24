---
title: "Hive HALIGHTDIMWWE27 control via MQTT"
description: "Integrate your Hive HALIGHTDIMWWE27 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HALIGHTDIMWWE27.md)*

# Hive HALIGHTDIMWWE27

| Model | HALIGHTDIMWWE27  |
| Vendor  | Hive  |
| Description | Active smart bulb white LED (E27) |
| Supports | on/off, brightness |
| Picture | ![Hive HALIGHTDIMWWE27](./assets/devices/HALIGHTDIMWWE27.jpg) |

## Notes


### Pairing
Follow instructions from
[How do I reset my Hive Active Light?](https://www.hivehome.com/ca/support/Help_installing_Hive/HIH_Hive_Active_Light/How-do-I-reset-my-Hive-Active-Light). After resetting the bulb will automatically connect.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
