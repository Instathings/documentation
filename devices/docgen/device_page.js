/**
 * This script generates a device page
 */
const utils = require('./utils');
const notes = require('./device_page_notes');
const YAML = require('json2yaml');
const assert = require('assert');
const devices = require('zigbee-herdsman-converters').devices;

function generate(device) {
    // verify that all model and notModel exist;
    for (const note of notes) {
        const check = (attr) => {
            if (note[attr]) {
                if (typeof note[attr] === 'string') {
                    assert(devices.find((d) => d.model === note[attr]), note[attr]);
                } else {
                    for (const m of note[attr]) {
                        assert(devices.find((d) => d.model === m), m);
                    }
                }
            }
        };

        check('model');
        check('notModel');
    }

    const image = utils.getImage(device.model);

    return `---
title: "${device.vendor} ${device.model} control via MQTT"
description: "Integrate your ${device.vendor} ${device.model} via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/${utils.normalizeModel(device.model)}.md)*

# ${device.vendor} ${device.model}

| Model | ${device.model}  |
| Vendor  | ${device.vendor}  |
| Description | ${device.description} |
| Supports | ${device.supports} |
| Picture | ![${device.vendor} ${device.model}](${image}) |

## Notes

${getNotes(device)}

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:
`;
}

function getNotes(device) {
    const note = notes
        .filter((n) => {
            if (n.hasOwnProperty('supports') && n.supports.filter((s) => device.supports.includes(s)).length === 0) {
                return false;
            }

            if (n.hasOwnProperty('notSupports') &&
                n.notSupports.filter((s) => device.supports.includes(s)).length !== 0) {
                return false;
            }

            if (n.hasOwnProperty('notDescription') &&
                n.notDescription.filter((s) => device.description.includes(s)).length !== 0) {
                return false;
            }

            if (n.hasOwnProperty('notModel') && n.notModel.includes(device.model)) {
                return false;
            }

            if (typeof (n.model) == 'object' && n.model.includes(device.model)) {
                return true;
            }

            if (!n.hasOwnProperty('model') && !n.hasOwnProperty('vendor')) {
                return true;
            }

            return n.model === device.model || (Array.isArray(n.vendor) ? n.vendor.includes(device.vendor) : n.vendor === device.vendor);
        })
        .map((n) => n.note)
        .join('\n');
    return note === '' ? 'None' : note;
}

module.exports = {
    generate,
};
