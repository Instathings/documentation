---
id: working-on-premise
title: Working on Premise 🍃
sidebar_label: Working on Premise
---
Instathings allows you to connect a Gateway device to the Cloud. From the editor you can manage your devices and collect data. 

Anyway if you don't want to send your data over the Internet, Instathings supports on-premise functionality: you can just save data into your Gateway while keep on managing your devices from the editor.

In this tutorial we will show you how to enable on-premise functionality.

Let's start!

## Requirements
Before following instructions in this section, you need to go back to the previous tutorial and <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">configure your Gateway</a> to get the connection with Instathings. 

In order to enable on-premise functionality you need to have a configured Mongo database as well as an existing collection which you can save your data on.

For more information about how to install MongoDb on the Gateway please refer to the <a href="https://docs.mongodb.com/manual/installation/" target="_blank" class="external-link">Mongo documentation</a>

## Enable on-premise functionality
Once you gateway is connected enter via SSH and move into the `config` folder you have previously copied.

```bash
# enter via ssh
ssh pi@raspberry.local

# move into the credentials directory
cd device-xxxxx-credentials/config
```
Now you have to edit the `.env` file that should, at first, look like this:

```bash
NODE_ENV=development
HOST=ab5jida92t4jb-ats.iot.eu-west-1.amazonaws.com
PARENT_DEVICE_ID=OSja0zzEB
PROJECT_ID=ZLS75DhL
```
You have to add to the `.env` file the following lines:

```bash
MONGO_URL=mongodb://localhost:27017
MONGO_DATABASE_NAME=mongodb
MONGO_INGESTED_COLLECTION=testCollection
PORT=1234
CLOUD_ENABLED=false
ON_PREMISE_ENABLED=true
```
* `MONGO_URL`: the url of your Mongo Database
* `MONGO_DATABASE_NAME`: the name of your Mongo Database
* `MONGO_INGESTED_COLLECTION`: the name of your Mongo collection you want to use to save the data
* `PORT`: the port on which the Gateway server will be listening to
* `CLOUD_ENABLED`: boolean variable that indicates whether the data is sent to the Cloud or not. If it is not specified it is set to `true` 
* `ON_PREMISE_ENABLED`: boolean variable that indicates whether the data is saved on the Gateway or not. If it is not specified it is set to `false` 

By choosing proper values for `CLOUD_ENABLED` and `ON_PREMISE_ENABLED` you can save data both on your local Mongo collection and on the Instathings Cloud, or you can choose just one of the two options.

In order to make these changes effective you have to restart the `gate` docker container by running this command on the command line:

```bash
docker restart gate
```

## Express Server

By setting `ON_PREMISE_ENABLED` to true an Express Web Server starts and you can send HTTP requests to its public API. 

For more information about the available endpoint refer to our <a href="https://developers.instathings.io" target="_blank" class="external-link">API documentation</a>