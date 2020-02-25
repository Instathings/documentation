---
title: "Xiaomi ZNCLDJ11LM control via MQTT"
description: "Integrate your Xiaomi ZNCLDJ11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ZNCLDJ11LM.md)*

# Xiaomi ZNCLDJ11LM

| Model | ZNCLDJ11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara curtain motor |
| Supports | open, close, stop, position |
| Picture | ![Xiaomi ZNCLDJ11LM](./assets/devices/ZNCLDJ11LM.jpg) |

## Notes


### Configuration of device attributes
By publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set` various device attributes can be configured:
```json
{
    "options":{
        "reverse_direction": xxx,
        "hand_open": xxx,
        "reset_move": xxx
    }
}
```

- **reverse_direction**: (`true`/`false`, default: `false`). Device can be configured to act in an opposite direction.
- **hand_open**: (`true`/`false`, default: `true`). By default motor starts rotating when you pull the curtain by hand. You can disable this behaviour.
- **reset_move**: (`true`/`false`, default: `false`). Reset the motor. When a path was cleared from obstacles.

You can send a subset of options, all options that won't be specified will be revered to default.

After changing `reverse_direction` you will need to fully open and fully close the curtain so the motor will redetect edges. `reverse_direction` will get new state only after this recalibration.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
