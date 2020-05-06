---
id: working-knx
title: Working with KNX 🔌
sidebar_label: Working with KNX
---
Instathings supports the KNX protocol. In order to get integrated with the Instathings Cloud, the KNX network need to be previously configurated in ETS environment. Once your KNX project is ready you can access to data travelling on the KNX bus!

Let's get started!

## Hardware requirements

To connect you KNX device to Instathings Cloud make sure you have:

 - KNX server (e.g. `knxd`) with reachable IP address
 - configured KNX network

## Install KNX protocol in your Gateway
Before following instructions in this section, you need to go back to the previous tutorial and <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">configure your Gateway</a> to get the connection with Instathings. If you have already done it, you can go on with the installation of the KNX software into your Gateway. <br> Just a few clicks and you will be ready!

In order to correctly install the KNX protocol you'll have to provide further information. 
In particular you'll have to provide:
* the IP address of the KNX server
* port of the KNX server

Once you get these information, follows the steps:
- navigate in your Gateway detail page
- make sure it is powered on and connected by checking the connection status (it should be green).
- click on the `install with options` button of the KNX protocol
- fill the form with the required information: `IP address` and `port`
- click on the `install` button 
- `installed` will appear as soon as the Gateway completes the installation

<a href="/docs/assets/knx/install_knx_protocol.png" target="_blank">
    <img src="/docs/assets/knx/install_knx_protocol.png" width="1000"/>
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

If you want to check the KNX supperted device, please refer to the <a href="https://www.knx.org/knx-en/for-professionals/get-started/certified-knx-products/index.php" target="_blank" class="external-link">KNX Certified Products</a> page.

<a href="/docs/assets/pairing-device/knx-pairing.png" target="_blank">
    <img src="/docs/assets/pairing-device/knx-pairing.png"/>
</a>