---
title: "HEIMAN HS2WD-E control via MQTT"
description: "Integrate your HEIMAN HS2WD-E via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS2WD-E.md)*

# HEIMAN HS2WD-E

| Model | HS2WD-E  |
| Vendor  | HEIMAN  |
| Description | Smart siren |
| Supports | warning |
| Picture | ![HEIMAN HS2WD-E](./assets/devices/HS2WD-E.jpg) |

## Notes


### Triggering the alarm
The alarm can be trigged by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set` message
`{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}`.

Where:
- `duration`: the number of seconds the alarm will be on (max is 1800 seconds)
- `mode`: `stop` or `emergency`
- `strobe`: `true` or `false` will let the strobe flash once during the alarm
        

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
