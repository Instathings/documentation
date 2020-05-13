const fs = require('fs');
const path = require('path');
const zigbeeDevices = require('zigbee-herdsman-converters').devices;
const modbusDevices = require('@instathings/modbus-herdsman-converters').devices;
const httpDevices = require('@instathings/http-herdsman-converters').devices;

const supportDevicesFn = require('./supported-devices');
const utils = require('./utils');

const base = path.join(__dirname, '..', 'docs');

const pages = [
  {
    id: 'zigbee-devices',
    protocol: 'Zigbee',
    devices: zigbeeDevices
  },
  {
    id: 'modbus-devices',
    protocol: 'Modbus',
    devices: modbusDevices
  },
  {
    id: 'http-devices',
    protocol: 'HTTP',
    devices: httpDevices
  }
]

pages.forEach((page) => {
  const template = supportDevicesFn(page.id, page.protocol, page.devices);
  fs.writeFileSync(path.join(base, '..', '..', 'docs', `${page.id}.md`), template);
});
