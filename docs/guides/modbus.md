---
id: working-modbus
title: Working with Modbus 🚌
sidebar_label: Working with Modbus
---
Instathings supports the Modbus RTU protocol. Due to the nature of the Modbus protocol we currently poll the connected Modbus device every 10 seconds to retrieve its data.

It will take about 5 minutes, let's get started!

## Connect the hardware

### Hardware requirements

In this tutorial we'll connect the following hardware to the Instathings Cloud:
* a USB dongle to connect to the Modbus bus; we're using a USB dongle from DSD TECH model SH-U10 
* a Modbus temperature sensor; we're using an Arceli sensor model XY-MD02
* a <a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/" class="external-link" target="_blank">Raspberry Pi 4 Model B</a> as Gateway
* for testing purposes you can use jumper cables to connect the temperature sensor, for production purposes use a proper Modbus cable.

### Make the connections

Modbus wiring is pretty straightforward, just follow the notes on the datasheet of the device, or in this case what's written behind the device.

<a href="/docs/assets/modbus/modbus_xy_md02.jpg" target="_blank">
    <img src="/docs/assets/modbus/modbus_xy_md02.jpg" width="200"/>
</a>

Then connect the wires properly to the USB device. 

<a href="/docs/assets/modbus/dsd.jpg" target="_blank">
    <img src="/docs/assets/modbus/dsd.jpg" width="200"/>
</a>

Finally plug the USB device to the Gateway.

## Install protocol
Before following instructions in this section, you need to go back to the previous tutorial and <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">configure your Gateway</a> to get the connection with Instathings. If you have already done it, you can go on with the installation of the Modbus software into your Gateway. <br> Just a few clicks and you will be ready!

- navigate in your Gateway detail page
- make sure it is powered on and connected by checking the connection status (it should be green).
- click on the `install` button of the Modbus protocol
- `installed` will appear as soon as the Gateway completes the installation

<a href="/docs/assets/modbus/install_protocol.png" target="_blank">
    <img src="/docs/assets/modbus/install_protocol.png" width="1000"/>
</a>

## Pair a device
Once you have installed the Modbus protocol, you can now pair your device to the Instathings Cloud and start receiving data!

### Create the subdevice
Go to the `Hubs` page, select a Gateway and then move to the Devices tab.

Type a name and choose the correct model, in this case we used the model `Arceli XY-MD02`.

Press Add.

### Pair time!

For pairing a Modbus device you'll need to configure the Modbus ID of your device and then just press the `Pair` button.

Check the Modbus supported Device <a href="/docs/modbus-devices.html" target="_blank" class="external-link">here</a>

<a href="/docs/assets/pairing-device/modbus-pairing.png" target="_blank">
    <img src="/docs/assets/pairing-device/modbus-pairing.png"/>
</a>
