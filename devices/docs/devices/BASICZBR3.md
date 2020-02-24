---
title: "SONOFF BASICZBR3 control via MQTT"
description: "Integrate your SONOFF BASICZBR3 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/BASICZBR3.md)*

# SONOFF BASICZBR3

| Model | BASICZBR3  |
| Vendor  | SONOFF  |
| Description | Zigbee smart switch |
| Supports | on/off |
| Picture | ![SONOFF BASICZBR3](./assets/devices/BASICZBR3.jpg) |

## Notes


### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2mqtt automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the (relay) button on the top for about 5 seconds until the relay cliks and the red LED flashes several times. The device will then go into pairing mode and the blue LED will begin to flash. When connected, the blue LED will turn on solid. It should then be connected to Zigbee2mqtt. Pressing the button should activate the relay on/off as normal, and the red LED will be on/off.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
