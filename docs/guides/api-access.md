---
id: api-access
title: API access 🚀
sidebar_label: API Access
---

In this section we will explain how to start using our API. <br> For more information about them, check the <a href="https://developers.instathings.io/" target="_blank" class="external-link">API reference</a> documentation. 

## Enable API access
The access to the APIs needs to be enabled in order to obtain the credentials to authenticate your requests so we can keep your data safe from burglars!

Enabling API access is a no brainer:
- go to `API` page 
- click `Enable API access` button. 

This will give you the `Client ID` and `Client Secret`, if you lose them you can check in the `Settings` page whenever you want, but remember to keep them safe and don't give them to anyone!
In fact anyone who knows your `Client ID` and `Client Secret` can make API requests on your behalf.  

<a href="/docs/assets/control-bulb/API.png" target="_blank">
    <img src="/docs/assets/control-bulb/API.png" width="1000"/>
</a>

### Control a device using API
Let's now make an example to use the API access to control a light bulb. For  <br> Before going on with this section you need to have a gateway correctly connected and a paired device. If you don't, just follow these tutorials:
- <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">gateway setup</a>
- <a href="/docs/guides/working-zigbee.html" target="_blank" class="external-link">install zigbee protocol</a> 
- <a href="/docs/guides/pairing-device.html" target="_blank" class="external-link">pairing a device</a> 

Once the API access has been enabled, copy the following informations to use them in the next step. They are all available in the `Settings` page:
 - `Base url for API access`
 - `Client ID`
 - `Client Secret`  

 Now you are ready to control the bulb! 

### Change bulb state 

 Go to the <a href="https://control.demo.instathings.io" target="_blank" class="external-link">Light Bulb Demo Application</a> and fill the form with the information you collected at the previous step.

 Click `Access application` and choose your bulb device

 Now you can turn it on and off, change the color and modify the brightness! Enjoy! 💡

