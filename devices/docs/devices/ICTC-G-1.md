---
title: "IKEA ICTC-G-1 control via MQTT"
description: "Integrate your IKEA ICTC-G-1 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ICTC-G-1.md)*

# IKEA ICTC-G-1

| Model | ICTC-G-1  |
| Vendor  | IKEA  |
| Description | TRADFRI wireless dimmer |
| Supports | brightness [0-255] (quick rotate for instant 0/255), action |
| Picture | ![IKEA ICTC-G-1](./assets/devices/ICTC-G-1.jpg) |

## Notes


### Recommendation
This device sends multiple messages in short time period with the same payload. It's worth setting `debounce` option with `debounce_ignore: - action` to throttle them without loosing unique action payloads.

E.g. (devices.yaml)

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.5
    debounce_ignore:
    - action
```
{% endraw %}

To find optimal "smoothness" play with debounce time or if you need all unique rotation steps consider adding `brightness` to `debounce_ignore` option

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.1
    debounce_ignore:
    - action
    - brightness
```
{% endraw %}


### Pairing
To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button
4 times (so the red lights starts blinking).
After the blinks you might be willing to rotate the dimmer
like you are trying to control your lights. It will prevent the device
from going to sleep and ensure successful pairing. In case the dimmer was
recognized but no actions seems to be detected, try to restart the zigbee2mqtt.
See [IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing](https://github.com/Koenkk/zigbee2mqtt/issues/620).


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
