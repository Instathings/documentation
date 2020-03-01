---
id: pairing-device
title: Pairing a device 🍒
sidebar_label: Pairing a device 
---

In this tutorial we will show how to connect a device and control it with Instathings.

The steps explained in this page are suitable for any of the supported devices, but you have to keep in mind that the pairing method change depending on the kind of device you are using. For more information about how to pair your sensor, check the <a href="//docs/all-devices.html" class="external-link" target="_blank">supported devices</a> page

Before starting make sure you have followed the previous tutorials to:
- <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">connect your gateway</a>
- <a href="docs/guides/zigbee.html" target="_blank" class="external-link">configure your Zigbee dongle</a>. 

Of course you will also need to connect the Zigbee USB dongle to the gateway device.

In the following steps we used a Philips Hue bulb as example, let's start!

## Create the subdevice
Go to the `Devices` page and create a new subdevice. 

Give it a name and choose its type, in this case we used the model `Philips - Hue white and color ambiance - 9290012573A`

<a href="/docs/assets/control-bulb/createSubdevice.png" target="_blank">
    <img src="/docs/assets/control-bulb/createSubdevice.png" width="1000"/>
</a>

## Pair the subdevice
Once you create a subdevice you'll see its detail page. 

Now you have to pair your device to you gateway by clicking on the airplane button on the right side of the page. 

If you are not using a Philips Hue, but you want to pair another kind of device, check the <a href="//docs/all-devices.html" target="_blank" class="external-link">supported devices</a> page to know how to do the pairing.

**Be aware!** Before start pairing your Philips Hue bulb turn it on and bring it close to the USB dongle less than 10 cm (~ 3 inch). This will allow the bulb to join the Zigbee network managed by the coordinator. 

After a moment you shold see the bulb blinking 3 times, this means that the device has been succesfully paired! This will also confirmed in the Editor.

<a href="/docs/assets/control-bulb/pairedSuccess.png" target="_blank">
    <img src="/docs/assets/control-bulb/pairedSuccess.png" width="1000"/>
</a>
