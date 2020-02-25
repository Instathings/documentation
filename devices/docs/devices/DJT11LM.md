---
title: "Xiaomi DJT11LM control via MQTT"
description: "Integrate your Xiaomi DJT11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DJT11LM.md)*

# Xiaomi DJT11LM

| Model | DJT11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara vibration sensor |
| Supports | drop, tilt and touch |
| Picture | ![Xiaomi DJT11LM](./assets/devices/DJT11LM.jpg) |

## Notes


### Pairing
Press the reset button for about 5 seconds. The LED lights up 3 times.
Then press the button again every 2 seconds (maximum 20 times).

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*

### Meaning of `strength` value
The `strength` value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITVITIY` is one of the following
values: `low`, `medium`,  `high`.



## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
