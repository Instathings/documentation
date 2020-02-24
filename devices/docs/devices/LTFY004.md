---
title: "Sylvania LTFY004 control via MQTT"
description: "Integrate your Sylvania LTFY004 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/LTFY004.md)*

# Sylvania LTFY004

| Model | LTFY004  |
| Vendor  | Sylvania  |
| Description | LIGHTIFY LED gardenspot mini RGB |
| Supports | on/off, brightness, color xy |
| Picture | ![Sylvania LTFY004](./assets/devices/LTFY004.jpg) |

## Notes


### Set default power on/off transition
Various Osram/Sylvania LED support setting a default transition when turning a light on and off.
```js
{
    "osram_set_transition": 0.1,            //time in seconds (integer or float)
}
```

### Remember current light state
Various Osram/Sylvania LED support remembering their current state in case of power loss, or if a light
is manually switched off then on. Lights will remember their respective attributes
(i.e. brightness, color, saturation, etc.).
NOTE: This must be executed everytime you make changes to a light's attributes for it to then 'remember' it.
```js
{
    "osram_remember_state": true,            // true, false (boolean)
}
```


### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*


* `transition`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).
Note that this value is overridden if a `transition` value is present in the MQTT command payload.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
