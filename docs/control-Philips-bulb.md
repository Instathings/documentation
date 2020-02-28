---
id: control-bulb
title: Philips Hue + Instathings = ♥
sidebar_label: Philips Hue + Instathings
---

In this tutorial we will show how to connect a Philips Hue bulb and control it with Instathings.

The steps explained in this page are suitable for any of the supported devices, but you have to keep in mind that the pairing method change depending on the kind of device you are using. For more information about how to pair your sensor, check the <a href="//docs/all-devices.html" class="external-link" target="_blank">supported devices</a> page

Before starting make sure you have followed the previous tutorials to:
- <a href="/docs/connect-raspberry.html" target="_blank" class="external-link">connect your gateway</a>
- <a href="docs/flashing-dongle.html" target="_blank" class="external-link">configure your Zigbee dongle</a>. 

Of course you will also need to connect the Zigbee USB dongle to the gateway device.

## Connect a Philips Hue bulb

### Install Zigbee protocol in your gateway
First of all you need to install the Zigbee software into your gateway. 

This can be easily done in our Editor: 
- navigate in your gateway detail page
- click on the `install` button of the Zigbee protocol
- `installed` will appear as soon as the gateway completes the installation

<a href="assets/control-bulb/installProtocol.png" target="_blank">
    <img src="assets/control-bulb/installProtocol.png" width="1000"/>
</a>

### Create the subdevice
Now go back to the devices page and create a new subdevice. 

Give it a name and choose its type, in this case we used the model `Philips - Hue white and color ambiance - 9290012573A`

<a href="assets/control-bulb/createSubdevice.png" target="_blank">
    <img src="assets/control-bulb/createSubdevice.png" width="1000"/>
</a>

### Pair the subdevice
Once you create a subdevice you'll see its detail page. 

Now you have to pair your device to you gateway by clicking on the airplane button on the right side of the page. 

If you are not using a Philips Hue, but you want to pair another kind of device, check the <a href="//docs/all-devices.html" target="_blank" class="external-link">supported devices</a> page to know how to do the pairing.

**Be aware!** Before start pairing your Philips Hue bulb turn it on and bring it close to the USB dongle less than 10 cm (~ 3 inch). This will allow the bulb to join the Zigbee network managed by the coordinator. 

After a moment you shold see the bulb blinking 3 times, this means that the device has been succesfully paired! This will also confirmed in the Editor.

<a href="assets/control-bulb/pairedSuccess.png" target="_blank">
    <img src="assets/control-bulb/pairedSuccess.png" width="1000"/>
</a>


## Control the light bulb

### Enable API access
Before start controlling the bulb you have to enable API access to your project and obtain the credentials.

Enabling API access is a no brainer:
- go to `Settings` page 
- click `Enable API access` button. 

For more information about API access refer to our
<a href="https://developers.instathings.io/" target="_blank" class="external-link">API documentation</a>. 

Anyway you don't need to any have technical background to follow this tutorial.

<a href="assets/control-bulb/API.png" target="_blank">
    <img src="assets/control-bulb/API.png" width="1000"/>
</a>

You just need to copy the following informations to use them in the next step. They are all available in the `Settings` page:
 - `Base url for API access`
 - `Client ID`
 - `Client Secret`  

 Now you are ready to control the bulb! 

### Change bulb state 
 Go to the Light Bulb Demo Application and fill the form with the information of your project you collected at the previous step.

 Click `Access application` and choose your bulb device

 Now you can turn it on and off, change the color and modify the brightness! Enjoy! 💡

