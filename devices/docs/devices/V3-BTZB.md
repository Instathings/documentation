---
title: "Danalock V3-BTZB control via MQTT"
description: "Integrate your Danalock V3-BTZB via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/V3-BTZB.md)*

# Danalock V3-BTZB

| Model | V3-BTZB  |
| Vendor  | Danalock  |
| Description | BT/ZB smartlock |
| Supports | lock/unlock, battery |
| Picture | ![Danalock V3-BTZB](./assets/devices/V3-BTZB.jpg) |

## Notes


### Pairing
If pairing failed, try the followings:
- Pairing it closer to the coordinator
- Connecting the CC2531 via an USB extension cable (to avoid interference)
- Replacing the batteries of the danalock.

### App
This device also come with an iOS app (Android as well but not tested). It is recommanded to do the setups via the app for better control of the lock.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
