---
title: "Stelpro STZB402 control via MQTT"
description: "Integrate your Stelpro STZB402 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/STZB402.md)*

# Stelpro STZB402

| Model | STZB402  |
| Vendor  | Stelpro  |
| Description | Ki, line-voltage thermostat |
| Supports | temperature |
| Picture | ![Stelpro STZB402](./assets/devices/STZB402.jpg) |

## Notes


### Setting outdoor temperature
To set _outdoor temperature_, you need to send the value to the following MQTT topic:
```
zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_outdoor_temperature
```

If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:

``` yaml
- id: auto_publish_outdoor_temp
  description: publish the outdoor temperature to Stelpro thermostat
  trigger:
    - platform: state
      entity_id: sensor.outdoor_sensor_temperature
      condition: []
  action:
    - service: mqtt.publish
      data_template:
      payload: '{{ states(trigger.entity_id) }}'
      topic: 'zigbee2mqtt/THERMOSTAT_FRIENDLY_NAME/set/thermostat_outdoor_temperature'
```

**IMPORTANT**: The outdoor temperature need to be refreshed at least each 4 hours, or the `EXT` display will be cleared on the thermostat.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
