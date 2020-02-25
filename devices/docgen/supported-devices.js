/**
 * This script generates the supported devices page.
 */

const devices = require('zigbee-herdsman-converters').devices;
const utils = require('./utils');

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const vendorsCount = devices.map((d) => d.vendor).filter(onlyUnique).length;

let template = `---
id: all-devices
title: Supported devices
---

<style type="text/css">
.main-content table {
  table-layout: fixed;
  display: table !important;
}
.main-content table tr th:nth-child(1) {
  width: 15%;
}
.main-content table tr th:nth-child(2) {
  width: 60%;
}
.main-content table tr th:nth-child(3) {
  width: 25%;
}
</style>

Currently **${devices.length}** devices are supported from **${vendorsCount}** different vendors.

[DEVICES]
`;

const generateTable = (devices) => {
  let text = '';
  text += '| Model | Description | Picture |\n';
  text += '| ------------- | ------------- | -------------------------- |\n';
  devices = new Map(devices.map((d) => [d.model, d]));
  devices.forEach((d) => {
    const image = utils.getImage(d.model);
    // eslint-disable-next-line
    // text += `| [${d.model}](/devices/${utils.normalizeModel(d.model)}.md) | ${d.vendor} ${d.description} (${d.supports}) | ![${image}](${image}) |\n`;
    text += `| ${d.model} | ${d.vendor} ${d.description} (${d.supports}) | ![${image}](${image}) |\n`;
  });

  return text;
};

// Generated devices text
let devicesText = '';
const vendors = Array.from(new Set(devices.map((d) => d.vendor)));
vendors.sort();
vendors.forEach((vendor) => {
  devicesText += `## ${vendor}\n\n`;
  devicesText += generateTable(devices.filter((d) => d.vendor === vendor));
  devicesText += '\n';
});

// Insert into template
template = template.replace('[DEVICES]', devicesText);

module.exports = template;
