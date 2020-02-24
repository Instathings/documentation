---
title: "HEIMAN HS1SA-M control via MQTT"
description: "Integrate your HEIMAN HS1SA-M via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS1SA-M.md)*

# HEIMAN HS1SA-M

| Model | HS1SA-M  |
| Vendor  | HEIMAN  |
| Description | Smoke detector |
| Supports | smoke |
| Picture | ![HEIMAN HS1SA-M](./assets/devices/HS1SA-M.jpg) |

## Notes


### Important
There are 3 versions of this device: Standalone, Zigbee and Z-wave. These are visualy identical. Make sure to get the correct version that will work with zigbee2mqtt:

Supported:
- **HS1SA-M : Zigbee**

Unsupported:
- HS1SA : Standalone
- HS1SA-Z : Z-wave

The product code should end in *-M* for the Zigbee version. The label inside the battery compartment should also show the Zigbee logo.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
