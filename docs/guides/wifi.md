---
id: working-wifi
title: Working with Wifi/Ethernet 🏳️‍🌈
sidebar_label: Working with Wifi/Ethernet
---
Instathings supports every device able to be connected to Internet and receive an HTTP request.

In this tutorial we will show you how to integrate your device's public API with Instathings API.

It will take about 5 minutes, let's get started!

## Requirements

Before you start you need a configured gateway and a device connected to the same network of you gateway. 
If you haven't configured a gateway yet, you can go back to the <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">previous tutorial</a> and set it up!

The device must be reachable via a valid IP address or a hostname. Methods to connect your device to your custom network depend on the device you are using. 

In this guide we will use a Shelly Plug S. 

## Pair a device

Once your gateway is connected, if it has native WiFi protocol, you can start pairing your device. 

Go to the `Hubs` page, move to the `Devices` tab, fill the `Add Device` form and choose `HTTP-DEVICE` as model.

Click on create.

<a href="/docs/assets/wifi/createSubdevice.png" target="_blank">
    <img src="/docs/assets/wifi/createSubdevice.png"/>
</a>

### Pair time!

To pair your device you have to provide some parameters about its network configuration:
* `Protocol`: you can choose the connection protocol among `http` and `https`
* `Hostname`: a valid IP address or hostname your device is reachable to
* `Port`: the port which your device is listening on

<a href="/docs/assets/wifi/pairingWifi.png" target="_blank">
    <img src="/docs/assets/wifi/pairingWifi.png"/>
</a>

Fill the form, clik `Pair` and in a few seconds you should see the green indicator on the left side of the page!

## Instathings API 

Now you can send HTTP requests to available API of your device.

In this example we will show you how to turn on and off the device via Instahtings API. For more information refer to our <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">API documentation</a>.

Before using Instathigs API, check your device API documentation to know which endpoint you have to use. 

### Change device status
In this case we refer to the Shelly API reference. To turn the plug on/off we need to call the `/relay/0` endpoint with the `turn` query parameter.

Then you have to call the Instathings endpoint `/device/v1/control/:deviceId/set` to set the status of a device as follows:

```bash
curl -XPOST \
-H 'Authorization: Bearer abc.def.ghi' \
-H "Content-type: application/json" \
-H 'instathings-path: /relay/0' \
-H 'instathings-method: GET' \
'https://yourProjectName.instathings.io/device/v1/control/:yourDeviceId/set?turn=on'
```

You need to set the headers:
* `instathings-path`: in which you have to specify the relative path of your device endpoint
* `intathings-method`: the http method needed for your device endpoint

And the query parameters (due to the particular Shelly API)
* `turn` 

### Get device status

In order to know the status of a a Shelly Plug S you need to call `/status` endpoint.

Via Instathings API you need to call with a POST the `/device/v1/control/:deviceId/set` endpoint as follows:

```bash
curl -XPOST \
-H 'Authorization: Bearer abc.def.ghi' \
-H "Content-type: application/json" \
-H 'instathings-path: /status' \
-H 'instathings-method: GET' \
'https://yourProjectName.instathings.io/device/v1/control/:yourDeviceId/status'
```
You need to set the headers:
* `instathings-path`: in which you have to specify the relative path of your device endpoint
* `intathings-method`: the http method needed for your device endpoint

In the response headers you will find a `location` header whose value is the path you have to call with a `GET` to retrieve the status of your device

```bash
curl -XGET \
-H 'Authorization: Bearer abc.def.ghi' \
-H "Content-type: application/json" \
https://yourProjectName.instathings.io/device/v1/control/:requestId/fetch
```