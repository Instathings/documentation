---
id: introduction
title: Welcome to Instathings ♥️
sidebar_label: Introduction
---

Instathings allows developers to create **smart environments** and to develop custom applications to monitor and control them. In a smart environment, you can collect data from sensors, control lighting, climate, appliances or machineries, set alarms... and much more.

## Architecture

![Plan](assets/introduction/architecture.png)

Instathings is made of two components: 
- **Instathings Edge** is installed on a linux-based local gateway (IE. a Raspberry Pi) and allows you to connect and manange the devices in your smart environment; 
- **Instathings Cloud** allows you to remotely provision gateways and devices, collect data from the field and transform any hardware in an API endopoint that you easily integrate in your custom application.  


## Compatible hardware

There are many IoT protocols and devices that can be used to create a smart environment. We support Zigbee, Modbus and KNX protocol.

Zigbee is a very versatile and popular standard that gives you the opportunity to use hundreds of low-cost wireless devices to create your smart environment.

Modbus is a serial communications protocol and has become a de facto standard communication protocol and is now a commonly available means of connecting industrial electronic devices.

KNX is an open standard for commercial and domestic building automation. 

Check the **<a href="/docs/en/protocols.html" class="external-link" target="_blank">supported protocols page</a>** to get a full list.
