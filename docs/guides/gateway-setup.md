---
id: gateway-setup
title: Gateway Setup 🤖
sidebar_label: Gateway Setup 
---
In this section we will show the very first steps to build your IoT Instathings world! 

In order to manage all your sensors and devices you will need a Gateway with an Internet connection. You can choose a Raspberry Pi (which we used for this tutorial) or any device that is able to install Docker. 

If you have any question about choosing a Gateway feel free to contact us on our site! 

## Software Requirements 
Install Docker 🐳 on your Gateway executing the following commands in the command line one by one. <br> They are suitable for Linux, if you have other operating systems please refer to <a href="https://docs.docker.com/install/" target="_blank" class="external-link">Docker documentation</a>.
 

```
curl -sSL https://get.docker.com | sh

sudo usermod -aG docker pi
```

## Gateway onboarding
Your Gateway is now ready to be connected to the Instathings Cloud. <br> Log in to Instathings Editor and start by creating a new project on the `Projects` page. Give your project a name and choose the `live` environment. For more information about `Sandbox` and `Live` environments refer to the  <a href="/docs/guides/sandbox-projects.html" target="_blank" class="external-link"> sanbox project documentation </a> section.

<a href="/docs/assets/gateway-config/createProject.png" target="_blank">
    <img src="/docs/assets/gateway-config/createProject.png" width="1000"/>
</a>

Once you have created you project, you can start by creating you first Gateway. On the top of the page fill the form, choosing the kind of device you are using and a name for your device. Click on `Create` and you will be redirected to `Hubs` page. Here you can see all the information related to your device

<a href="/docs/assets/gateway-config/createGw.png" target="_blank">
    <img src="/docs/assets/gateway-config/createGw.png" width="1000"/>
</a>

### Connect your Gateway

In order to get connected to Instathings and to our Cloud you need generate and download the certificates to secure the connection between the Gateway and the Instathings Cloud. The download will automatically begin as you click on `Download`, unzip the folder and move it into the Gateway. To do this we used the command line, but you can do it the way you prefer.

In the Command line type the command `scp -r` followed by the credentials folder and the IP address of your Gateway.

```bash
scp -r device-htBdp3Z9-credentials pi@raspberrypi:~
```

Now enter in your Gateway via SSH and move into the credendials folder end exectute the install script as follows:

```bash
# enter via ssh
ssh pi@raspberry.local

# move into the credentials directory
cd device-htBdp3Z9-credentials

# install script
./install.sh
```
The script will create the Docker containers you need to interact with your sensors and devices. However you don't need to worry about it, just go back to the `Hubs` page and check the connection.

If everything worked fine, you should see the connection status turning into green.

<a href="/docs/assets/gateway-config/GwConnected.png" target="_blank">
    <img src="/docs/assets/gateway-config/GwConnected.png" width="1000"/>
</a>

The connection status can be:
* 🟠 **Yellow**: the connection has been never established
* 🟢 **Green**: the Gateway is connected
* 🔴 **Red**: the connection has been lost 

And that's it with this tutorial! You can now start adding your subdevices, gather data and control them! 

Have fun!
