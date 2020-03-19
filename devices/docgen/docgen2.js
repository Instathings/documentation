
// const uuidv4 = require('uuid/v4');
//const AWS = require('aws-sdk');
const devices = require('zigbee-herdsman-converters').devices;

// Clean devices directory
// for (const file of fs.readdirSync(path.join(base, 'devices'))) {
//     fs.unlinkSync(path.join(base, 'devices', file));
// }
const device = devices[0];
// console.log(devices[0]);
console.log('model', device.model);
console.log('vendor', device.vendor);
console.log('description', device.description);

// devices.forEach((device) => {
//     const file = path.join(base, 'devices', `${utils.normalizeModel(device.model)}.md`);
//     fs.writeFileSync(file, devicePage.generate(device));
// });
