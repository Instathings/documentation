---
title: "eCozy 1TST-EU control via MQTT"
description: "Integrate your eCozy 1TST-EU via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/1TST-EU.md)*

# eCozy 1TST-EU

| Model | 1TST-EU  |
| Vendor  | eCozy  |
| Description | Smart heating thermostat |
| Supports | temperature, occupancy, un-/occupied heating, schedule |
| Picture | ![eCozy 1TST-EU](./assets/devices/1TST-EU.jpg) |

## Notes


### Controlling
Get local temperature in degrees Celsius (in the range 0x954d to 0x7fff, i.e. -273.15°C to 327.67 ºC)
```json
{
    "local_temperature": ""
}
```

Get or set offset added to/subtracted from the actual displayed room temperature to NUMBER, in steps of 0.1°C
```js
{
    "local_temperature_calibration": "NUMBER"       // Possible values: –2.5 to +2.5; leave empty to read
}
```

Set temperature display mode
```js
{
    "temperature_display_mode": ""      // Possible values: 0 to set °C or 1 so set °F
}
```

Get room occupancy. Specifies whether the heated/cooled space is occupied or not. If 1, the space is occupied,
else it is unoccupied.
```json
{
    "thermostat_occupancy": ""
}
```

Get or set occupied heating setpoint to NUMBER in degrees Celsius.
```js
{
    "occupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to  MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
```

Get or set unoccupied heating setpoint to NUMBER in degrees Celsius
```js
{
    "unoccupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
```

Increase or decrease heating setpoint by NUMBER degrees in °C.
```js
{
    "setpoint_raise_lower": {
    "mode": "0x00",       // Possible values: see table below
    "amount": "NUMBER"    // Possible values: signed 8-bit integer that specifies the amount the setpoint(s) are to be increased (or decreased) by, in steps of 0.1°C
    }
}
```

Attribute Value | Description
----------------|-----------------------------------------------
0x00            | Heat (adjust Heat Setpoint)
0x01            | Cool (adjust Cool Setpoint)
0x02            | Both (adjust Heat Setpoint and Cool Setpoint)

Get or set whether the local temperature, outdoor temperature and occupancy are being sensed by internal sensors or remote networked sensors
```js
{
    "remote_sensing": "NUMBER"      // Possible values: see table below; leave empty to read
}
```

Bit Number | Description
-----------|-----------------------------------------
0          | 0 – local temperature sensed internally <br> 1 – local temperature sensed remotely
1          | 0 – outdoor temperature sensed internally <br> 1 – outdoor temperature sensed remotely
2          | 0 – occupancy sensed internally <br> 1 – occupancy sensed remotely

Get or set control sequence of operation
```js
{
    "control_sequence_of_operation": "VALUE"       // Possible values: see table below; leave empty to read
}
```

Values                                    | Possible Values of SystemMode
------------------------------------------|-------------------------------------
`cooling only`                            | Heat and Emergency are not possible
`cooling with reheat`                     | Heat and Emergency are not possible
`heating only`                            | Cool and precooling are not possible
`heating with reheat`                     | Cool and precooling are not possible
`cooling and heating 4-pipes`             | All modes are possible
`cooling and heating 4-pipes with reheat` | All modes are possible

Get or set system mode
```js
{
    "system_mode": "VALUE"       // Possible values: see table below; leave empty to read
}
```

Values              |
--------------------|
`off`               |
`auto`              |
`cool`              |
`heat`              |
`emergency heating` |
`precooling`        |
`fan only`          |
`dry`               |
`sleep`             |

Get running state
```js
{
    "running_state": ""       // leave empty when reading
}
```
Possible values:

Values |
-------|
`off`  |
`cool` |
`heat` |

Valve position / heating demand
```
{
    "pi_heating_demand": 0       // leave empty when reading
}
```
Will report the valve position or heating amount depending on device. 0=min, 255=max

Get or set weekly schedule
```js
{
    "weekly_schedule": {
    "TemperatureSetpointHold": "0x00",                // 0x00 setpoint hold off or 0x01 on
    "TemperatureSetpointHoldDuration": "0xffff",      // 0xffff to 0x05a0
    "ThermostatProgrammingOperationMode": "00xxxxxx"  //see table below
    }                                                   // leave empty to read
}
```

Attribute Value | Description
----------------|---------------------------------------------------------------------------
0               | 0 – Simple/setpoint mode. This mode means the thermostat setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. <br> 1 – Schedule programming mode. This enables or disables any programmed weekly schedule configurations. <br> Note: It does not clear or delete previous weekly schedule programming configurations.
1               | 0 - Auto/recovery mode set to OFF <br> 1 – Auto/recovery mode set to ON
2               | 0 – Economy/EnergyStar mode set to OFF <br> 1 – Economy/EnergyStar mode set to ON

Clear weekly schedule
```json
{
    "clear_weekly_schedule": ""
}
```
<!--
Coming soon:
Get weekly schedule response
tz.thermostat_weekly_schedule_rsp
Get relay status log
tz.thermostat_relay_status_log
Get relay status log response
tz.thermostat_relay_status_log_rsp
-->


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
