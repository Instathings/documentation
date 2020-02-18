---
id: Getting started
title: Getting Started
sidebar_label: Getting started
---


Here follows the procedure for using a normal Raspberry Pi as a Gateway of our InstaThings system.

Please check Prerequisite for having an idea of what is requested. 

Assuming the Raspberry Pi already installed and updated properly. In this case go directly to point 2), on the contrary please refer to point 1).




Prerequisite:
1. Operating System (ver. … or higher) updated and configured properly
2. Docker
3. …

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

Install Docker Compose
```
sudo pip install docker-compose
```

---




