/**
 * This script generates the supported devices page.
 */
const utils = require('./utils');


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


module.exports = function devicesTable(id, protocol, devices) {
  const vendorCount = devices.map((d) => d.vendor).filter(onlyUnique).length;
  let template = `---
id: ${id}
title: Supported ${protocol} devices
---

<style type="text/css">
.main-content-devices table {
  table-layout: fixed;
  display: table !important;
}
.main-content-devices table tr th:nth-child(1) {
  width: 15%;
}
.main-content-devices table tr th:nth-child(2) {
  width: 60%;
}
.main-content-devices table tr th:nth-child(3) {
  width: 25%;
}

</style>

Currently **${devices.length}** ${protocol} devices are supported from **${vendorCount}** different vendors.

<div class="main-content-devices" role="main">

[DEVICES]

</div>
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
  vendors.sort((v1, v2) => {
    return v1.localeCompare(v2);
  });
  vendors.forEach((vendor) => {
    devicesText += `## ${vendor}\n\n`;
    devicesText += generateTable(devices.filter((d) => d.vendor === vendor));
    devicesText += '\n';
  });

  // Insert into template
  template = template.replace('[DEVICES]', devicesText);
  return template;
}
