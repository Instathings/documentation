---
id: working-on-premise
title: Working on-premise 🍃
sidebar_label: Working on-premise
---
If you don't want to send your data over the Internet, Instathings supports on-premise functionality: data will be saved into a MongoDb server available on your local network while you'll keep managing your devices from the Editor.

Data will be then accessible via REST or websocket API exposed by your Gateway.

In this tutorial we will show you how to enable on-premise functionality. Let's start!

## Requirements
Before following instructions in this section, you need to:

- <a href="/docs/guides/gateway-setup.html" target="_blank" class="external-link">configure your Gateway</a> to get the connection with Instathings so that is connected to the Instathings cloud (this will be used only for managing the Gateway in this case)
- have a configured MongoDb database (version >=4.2) that is reachable from the Gateway
- configure a MongoDb collection which you can save your data on.

For more information about how to install MongoDb on the Gateway please refer to the <a href="https://docs.mongodb.com/manual/installation/" target="_blank" class="external-link">MongoDb documentation</a>

## Enable on-premise functionality
Once you Gateway is connected enter via SSH and move into the `config` folder that's inside the provided zip.

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
Add to the `.env` file the following lines:

```bash
MONGO_URL=mongodb://validmongourl:27017
MONGO_DATABASE_NAME=mongodb
MONGO_INGESTED_COLLECTION=testCollection
PORT=1234
CLOUD_ENABLED=false
ON_PREMISE_ENABLED=true
```

The Gateway needs the following environment variables to work with an on-premise setup:

* `MONGO_URL`: the url of your Mongo Database
* `MONGO_DATABASE_NAME`: the name of your Mongo Database
* `MONGO_INGESTED_COLLECTION`: the name of your Mongo collection you want to use to save the data
* `PORT`: the port on which the Gateway server will be listening to
* `CLOUD_ENABLED`: boolean variable that indicates whether the data is sent to the Cloud or not. If it is not specified it is set to `true` 
* `ON_PREMISE_ENABLED`: boolean variable that indicates whether the data is saved on the Gateway or not. If it is not specified it is set to `false` 

By choosing proper values for `CLOUD_ENABLED` and `ON_PREMISE_ENABLED` you can save data both on your local Mongo collection and on the Instathings Cloud, or you can choose just one of the two options.

If this is the first time your Gateway starts you can just launch the `install.sh` script and the Gateway won't send any device data online.

If your Gateway is already up and running, after the edit of the `.env` file you will need to stop and remove the `gate` container like this:

```
docker stop gate
docker rm gate
```

And relaunch the `install.sh` script. This way Docker will map the correct port from the container to the host and you'll be able to use the HTTP and websocket server correctly.

## HTTP server

By setting `ON_PREMISE_ENABLED` to `true` an Express Web Server starts and you can send HTTP requests to its public API. 

For more information about the available endpoints refer to our <a href="https://developers.instathings.io/#on-premise-rest-api" target="_blank" class="external-link">API documentation</a>

## Websocket server
As the `ON_PREMISE_ENABLED` option is set to `true`, a Websocket Server also starts. 

You can connect to your gateway's IP address and register listeners on the generated events.

For more details about the websocket connection and the available events please refer to our  <a href="https://developers.instathings.io/#on-premise-websocket-api" target="_blank" class="external-link">API documentation</a>
