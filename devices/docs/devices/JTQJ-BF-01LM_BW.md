---
title: "Xiaomi JTQJ-BF-01LM/BW control via MQTT"
description: "Integrate your Xiaomi JTQJ-BF-01LM/BW via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/JTQJ-BF-01LM_BW.md)*

# Xiaomi JTQJ-BF-01LM/BW

| Model | JTQJ-BF-01LM/BW  |
| Vendor  | Xiaomi  |
| Description | MiJia gas leak detector  |
| Supports | gas |
| Picture | ![Xiaomi JTQJ-BF-01LM/BW](./assets/devices/JTQJ-BF-01LM-BW.jpg) |

## Notes


### Pairing
Plug the device in and wait for around 5mins, while it performs its self-tests.
A successful self-test is indicated by couple of beeps and a steady green led.
Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.


### Sensitivity
The sensitivity can be changed by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
`{"sensitivity": "SENSITIVITY"}` where `SENSITVITIY` is one of the following
values: `low`, `medium`,  `high`.

### Self-test
A self-test can be trigged by publishing to `zigbee2mqtt/[FRIENDLY_NAME]/set`
`{"selftest": ""}`.
If the selftest is executed succesfully you will hear the device beep in 30 seconds.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
