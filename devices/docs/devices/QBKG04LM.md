---
title: "Xiaomi QBKG04LM control via MQTT"
description: "Integrate your Xiaomi QBKG04LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/QBKG04LM.md)*

# Xiaomi QBKG04LM

| Model | QBKG04LM  |
| Vendor  | Xiaomi  |
| Description | Aqara single key wired wall switch without neutral wire. Doesn't work as a router and doesn't support power meter |
| Supports | release/hold, on/off |
| Picture | ![Xiaomi QBKG04LM](./assets/devices/QBKG04LM.jpg) |

## Notes


### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.


### Decoupled mode
Decoupled mode allows to turn wired switch into wireless button with separately controlled relay.
This might be useful to assign some custom actions to buttons and control relay remotely.
This command also allows to redefine which button controls which relay for the double switch.

Special topics should be used: `zigbee2mqtt/[FRIENDLY_NAME]/set` to modify operation mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right",
    "state": "VALUE"
  }
}
```

Values                | Description
----------------------|---------------------------------------------------------
`control_relay`       | Button directly controls relay (for single switch)
`control_left_relay`  | Button directly controls left relay (for double switch)
`control_right_relay` | Button directly controls right relay (for double switch)
`decoupled`           | Button doesn't control any relay

`zigbee2mqtt/[FRIENDLY_NAME]/get` to read current mode.

Payload:
```js
{
  "operation_mode": {
    "button": "single"|"left"|"right"
  }
}
```

Response will be sent to `zigbee2mqtt/[FRIENDLY_NAME]`:
```json
{"operation_mode_right":"control_right_relay"}
```


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
