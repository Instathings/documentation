---
id: pairing-device
title: Pairing a device 🍒
sidebar_label: Pairing a device 
---

In this tutorial we will show how to connect a device and control it with Instathings.

The steps explained in this page are suitable for any of the supported devices, but you have to keep in mind that the pairing method change depending on the kind of device you are using. For more information about how to pair your sensor, check the <a href="//docs/all-devices.html" class="external-link" target="_blank">supported devices</a> page

Before starting make sure you have followed the previous tutorials to:
- <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">connect your Gateway</a>
- if you're working with <a href="/docs/guides/working-zigbee.html" target="_blank" class="external-link">Zigbee</a>
- if you're working with <a href="/docs/guides/working-modbus.html" target="_blank" class="external-link">Modbus</a>


Based on the protocol you want to use make sure to connect the right hardware to the Gateway. <br>
You can have a multi-protocol Gateway in a matter of minutes :)

## Pair a Zigbee device

In the following steps we used a temperature sensor from Xiaomi as example, let's start!

### Create the subdevice
Go to the `Hubs` page, select a Gateway and then move to the Devices tab.

Type a name and choose the correct model, in this case we used the model `Xiaomi WSDCQ11LM`

<a href="/docs/assets/pairing-device/device-selection.png" target="_blank">
    <img src="/docs/assets/pairing-device/device-selection.png"/>
</a>

### Pair time!
Once you create a subdevice you'll get a new row that logically represents your device. Now it's time to pair the device.  

Now you have to pair your device to you Gateway by clicking on the `Pair` button on the right side of the page. 

To pair this device we have to keep a button located at the bottom of the device pressed for about 10 seconds until the LED starts to blink.

If you are not using a Xiaomi device, but you want to pair another kind of device, check the <a href="//docs/all-devices.html" target="_blank" class="external-link">supported devices</a> page to know how to do the pairing.

<a href="/docs/assets/pairing-device/pair-successful.png" target="_blank">
    <img src="/docs/assets/pairing-device/pair-successful.png" width="1000"/>
</a>

## Pair a Modbus device

### Create the subdevice
Go to the `Hubs` page, select a Gateway and then move to the Devices tab.

Type a name and choose the correct model, in this case we used the model `Arceli XY-MD02`.

Press Add.

### Pair time!

For pairing a Modbus device you'll need to configure the Modbus ID of your device and then just press the `Pair` button.

<a href="/docs/assets/pairing-device/modbus-pairing.png" target="_blank">
    <img src="/docs/assets/pairing-device/modbus-pairing.png"/>
</a>

## Pair a KNX device

### Create the subdevice
Go to the `Hubs` page, select a Gateway and then move to the Devices tab.

Type a name and choose `generic KNX device`.

Press Add.

<a href="/docs/assets/pairing-device/add-knx-device.png" target="_blank">
    <img src="/docs/assets/pairing-device/add-knx-device.png"/>
</a>
### Pair time!

Before pairing a KNX device make sure you have already set its behaviour on ETS environment. In fact you need to provide information regarding the ETS configuration. 

In particular:

* Individual Address: the configured Individual Address of your KNX device,
* Group Address: the Group Address your device send data to 
* Data Point Type: representing the kind of data your device is sending. For the supported DPTs please refer to <a href="https://bitbucket.org/ekarak/knx.js/src/master/README-datapoints.md" target="_blank" class="external-link">knx.js</a>.

Then press on the `Pair` button and your are ready!

<a href="/docs/assets/pairing-device/knx-pairing.png" target="_blank">
    <img src="/docs/assets/pairing-device/knx-pairing.png"/>
</a>
