---
title: "Xiaomi WXCJKG11LM control via MQTT"
description: "Integrate your Xiaomi WXCJKG11LM via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/WXCJKG11LM.md)*

# Xiaomi WXCJKG11LM

| Model | WXCJKG11LM  |
| Vendor  | Xiaomi  |
| Description | Aqara Opple switch 1 band |
| Supports | action |
| Picture | ![Xiaomi WXCJKG11LM](./assets/devices/WXCJKG11LM.jpg) |

## Notes


### Binding
By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.

First you probably want to unbind it from the coordinator first, then you can bind it to any other device or group. (see https://www.zigbee2mqtt.io/information/binding.html )

As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.

When bound to a lamp, the behavior is as follows:
- left click: turn off
- right click: turn on
- left double click: light dim down (by steps of 33%)
- right double click: light dim up (by steps of 33%)
- long left click: warm white
- long right click: cold white


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
