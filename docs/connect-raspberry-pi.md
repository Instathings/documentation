---
id: connect-raspberry
title: Connect a Raspberry Pi to Instathings
---
Here follows the procedure for using a normal Raspberry Pi as a Gateway of our Instathings system.

Please check Prerequisite for having an idea of what is requested. 

Assuming the Raspberry Pi already installed and updated properly. 
In this case go directly to point 2), on the contrary please refer to point 1).

Prerequisite:
1. Operating System (ver. … or higher) updated and configured properly
2. Docker
3. A Certificate

---
1) Install the Operating System on your Raspberry Pi 3+ or higher (preferred 4), accordingly to your needs. We suggest the smaller version without the Graphical User Interface (Raspbian Buster Lite).


Please refer to official site for taking the last version [Raspbian](https://www.raspberrypi.org/downloads/raspbian/)

And more in general refer to [Installation](https://www.raspberrypi.org/documentation/installation/)

---
2) Install Docker following these simple steps, as described in [here](https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl)


Install Docker
```
curl -sSL https://get.docker.com | sh
```


Add permission to Pi User to run Docker Commands

```
sudo usermod -aG docker pi
```


Test Docker installation

```
docker run hello-world 
```

Install proper dependencies 
```
sudo apt-get install libffi-dev libssl-dev

sudo apt-get install -y python python-pip

sudo apt-get remove python-configparser
```


---
3) The Certificate will generated along the procedure for onboarding the Gateway. So proceed with following steps.


### How to onboard your gateway on Instathings

Click on `Projects` and then the button `New project` on the right side.

![Plan](assets/connecting-raspberrypi/NewProject.png)

Give it a Name.

And select `Live` (on `Environment`), because we want to work with real-existing devices.

Now we can proceed with the creation of the gateway in our Project.

![Plan](assets/connecting-raspberrypi/NewGateway.png)

Give it a name
And select the type of device for your gateway (e.g.: `Raspberry - Raspberry - Pi 4 Model B`).
Click on `Create device`.


![Plan](assets/connecting-raspberrypi/DeviceInfoSelected.png)

As you can see once created the light is yellow: it means that the device isn't connected.

### Let's generate the certificate



Click on `Generate and download certificate` and the download will automatically begin.
Search for the zip file in your download folder.

![Plan](assets/connecting-raspberrypi/SaveCredentials.png)

Then you will have to move it to your gateway in the way you prefer: using Drag&drop if you have previously installed Samba on your Raspberry.

Or with this command with the Terminal.

![Plan](assets/connecting-raspberrypi/ScpCommand.png)

If you want to use the command, be sure to customize it with your information.
We are using scp. If you need any help with it
please contact us through the chat in the left-bottom corner of the webpage.
```
scp -r -i ~/Desktop/id_rsa  device- mendel@wishful-jet.local:~
```
Let's continue with the procedure.
![Plan](assets/connecting-raspberrypi/ScpCommandCompleted.png)


Once executed teh command you'll have a situation like this.
![Plan](assets/connecting-raspberrypi/Extracted.png)

Now we move inside the device.

Install it with the following command:

![Plan](assets/connecting-raspberrypi/Install.png)

```
ls

cd device-WSn6exxx-credentials

ls

./install.sh

```

Let's go back to our webpage.

And refresh it  with this button.
![Plan](assets/connecting-raspberrypi/RefreshArrow.png)

And the light should turn to green.
Meaning that the gateway is correctly connected to Instathings.



