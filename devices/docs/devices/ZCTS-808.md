---
title: "Trust ZCTS-808 control via MQTT"
description: "Integrate your Trust ZCTS-808 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZCTS-808.md)*

# Trust ZCTS-808

| Model | ZCTS-808  |
| Vendor  | Trust  |
| Description | Wireless contact sensor |
| Supports | contact |
| Picture | ![Trust ZCTS-808](./assets/devices/ZCTS-808.jpg) |

## Notes


### Pairing
When pairing the sensor with Zigbee2MQTT,
keep opening and closing the sensor (pull/insert the sensor parts next to eachother) for 10 seconds,
otherwise device will fall asleep before it gets fully configured and will not send state changes.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
