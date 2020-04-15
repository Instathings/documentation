const fs = require('fs');
const path = require('path');
const devices = require('zigbee-herdsman-converters').devices;
const utils = require('./utils');

const base = path.join(__dirname, '..', 'docs');

const supportDevices = require('./supported-devices');

fs.writeFileSync(path.join(base, '..', '..', 'docs', 'supported_devices.md'), supportDevices);
