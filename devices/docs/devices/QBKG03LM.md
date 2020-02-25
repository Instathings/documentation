---
title: "Xiaomi QBKG03LM control via MQTT"
description: "Integrate your Xiaomi QBKG03LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/QBKG03LM.md)*

# Xiaomi QBKG03LM

| Model | QBKG03LM  |
| Vendor  | Xiaomi  |
| Description | Aqara double key wired wall switch without neutral wire. Doesn't work as a router and doesn't support power meter |
| Supports | release/hold, on/off, temperature |
| Picture | ![Xiaomi QBKG03LM](./assets/devices/QBKG03LM.jpg) |

## Notes


### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `temperature_precision`: Controls the precision of `temperature` values,
e.g. `0`, `1` or `2`; default `2`.
* `temperature_calibration`: Allows to manually calibrate temperature values,
e.g. `1` would add 1 degree to the temperature reported by the device; default `0`.


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
