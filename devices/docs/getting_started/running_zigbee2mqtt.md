---
---
# Running Zigbee2mqtt
These instructions explain how to run Zigbee2mqtt on bare-metal Linux.

You can also run Zigbee2mqtt in a [Docker container](../information/docker.md), as the [Hass.io Zigbee2mqtt add-on](https://github.com/danielwelch/hassio-zigbee2mqtt), in a [Python Virtual Enviroment](../information/virtual_environment.md) or even on [Windows](../information/windows.md).

For the sake of simplicity this guide assumes running on a Raspberry Pi 3 with Raspbian Stretch Lite, but will work on any Linux machine.

Before starting make sure you have an MQTT broker installed on your system.
There are many tutorials available on how to do this, [example](https://randomnerdtutorials.com/how-to-install-mosquitto-broker-on-raspberry-pi/).
Mosquitto is the recommended MQTT broker but others should also work fine.

## 1. Determine location of CC2531 USB sniffer and checking user permissions
We first need to determine the location of the CC2531 USB sniffer. Connect the CC2531 USB to your Raspberry Pi. Most of the times the location of the CC2531 is `/dev/ttyACM0`. This can be verified by:

```bash
pi@raspberry:~ $ ls -l /dev/ttyACM0
crw-rw---- 1 root dialout 166, 0 May 16 19:15 /dev/ttyACM0  # <-- CC2531 on /dev/ttyACM0
```

As an alternative, the device can also be mapped by an ID. This can be handy if you have multiple serial devices connected to your Raspberry Pi. In the example below the device location is: `/dev/serial/by-id/usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00`
```bash
pi@raspberry:/ $ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx. 1 root root 13 Oct 19 19:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -> ../../ttyACM0
```

## 2. Installing
```bash
# Setup Node.js repository
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

# NOTE: If you see the message below please follow: https://gist.github.com/Koenkk/11fe6d4845f5275a2a8791d04ea223cb.
# ## You appear to be running on ARMv6 hardware. Unfortunately this is not currently supported by the NodeSource Linux distributions. Please use the 'linux-armv6l' binary tarballs available directly from nodejs.org for Node.js 4 and later.
# IMPORTANT: In this case instead of the apt-get install mentioned below; do: sudo apt-get install -y git make g++ gcc

# Install Node.js;
sudo apt-get install -y nodejs git make g++ gcc

# Verify that the correct nodejs and npm (automatically installed with nodejs)
# version has been installed
node --version  # Should output v12.X or v10.X
npm --version  # Should output 6.X

# Clone zigbee2mqtt repository
sudo git clone https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
sudo chown -R pi:pi /opt/zigbee2mqtt

# Install dependencies (as user "pi")
cd /opt/zigbee2mqtt
npm ci
```

If everything went correctly the output of `npm ci` is similar to (the number of packages and seconds is probably different on your device):
```bash
node-pre-gyp info ok
added 383 packages in 111.613s
```

Note that the `npm ci` produces some `warning` which can be ignored.

## 3. Configuring
Before we can start Zigbee2mqtt we need to edit the `configuration.yaml` file. This file contains the configuration which will be used by Zigbee2mqtt.

Open the configuration file:
```bash
nano /opt/zigbee2mqtt/data/configuration.yaml
```

For a basic configuration, the default settings are probably good. The only thing we need to change is the MQTT server url and authentication (if applicable). This can be done by changing the section below in your `configuration.yaml`.

```yaml
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  # user: my_user
  # password: my_password
```
Save the file and exit.

## 4. Starting zigbee2mqtt
Now that we have setup everything correctly we can start zigbee2mqtt.

```bash
cd /opt/zigbee2mqtt
npm start
```

When started successfully, you will see something like:
```bash
zigbee2mqtt:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
zigbee2mqtt:info  2019-11-09T13:04:01: Starting zigbee2mqtt version 1.6.0 (commit #720e393)
zigbee2mqtt:info  2019-11-09T13:04:01: Starting zigbee-herdsman...
zigbee2mqtt:info  2019-11-09T13:04:03: zigbee-herdsman started
zigbee2mqtt:info  2019-11-09T13:04:03: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
zigbee2mqtt:info  2019-11-09T13:04:03: Currently 0 devices are joined:
zigbee2mqtt:warn  2019-11-09T13:04:03: `permit_join` set to  `true` in configuration.yaml.
zigbee2mqtt:warn  2019-11-09T13:04:03: Allowing new devices to join.
zigbee2mqtt:warn  2019-11-09T13:04:03: Set `permit_join` to `false` once you joined all devices.
zigbee2mqtt:info  2019-11-09T13:04:03: Zigbee: allowing new devices to join.
zigbee2mqtt:info  2019-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost
zigbee2mqtt:info  2019-11-09T13:04:03: Connected to MQTT server
```

Zigbee2mqtt can be stopped by pressing `CTRL + C`.

## 5. (Optional) Running as a daemon with systemctl
To run zigbee2mqtt as daemon (in background) and start it automatically on boot we will run Zigbee2mqtt with systemctl.

```bash
# Create a systemctl configuration file for zigbee2mqtt
sudo nano /etc/systemd/system/zigbee2mqtt.service
```

Add the following to this file:
```
[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Save the file and exit.

Verify that the configuration works:
```bash
# Start zigbee2mqtt
sudo systemctl start zigbee2mqtt

# Show status
systemctl status zigbee2mqtt.service
```

Output should look like:
```bash
pi@raspberry:/opt/zigbee2mqtt $ systemctl status zigbee2mqtt.service
● zigbee2mqtt.service - zigbee2mqtt
   Loaded: loaded (/etc/systemd/system/zigbee2mqtt.service; disabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-06-07 20:27:22 BST; 3s ago
 Main PID: 665 (npm)
   CGroup: /system.slice/zigbee2mqtt.service
           ├─665 npm
           ├─678 sh -c node index.js
           └─679 node index.js

Jun 07 20:27:22 raspberry systemd[1]: Started zigbee2mqtt.
Jun 07 20:27:23 raspberry npm[665]: > zigbee2mqtt@1.6.0 start /opt/zigbee2mqtt
Jun 07 20:27:23 raspberry npm[665]: > node index.js
Jun 07 20:27:24 raspberry npm[665]: zigbee2mqtt:info  2019-11-09T13:04:01: Logging to directory: '/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01'
Jun 07 20:27:25 raspberry npm[665]: zigbee2mqtt:info  2019-11-09T13:04:01: Starting zigbee2mqtt version 1.6.0 (commit #720e393)
```

Now that everything works, we want systemctl to start zigbee2mqtt automatically on boot, this can be done by executing:
```bash
sudo systemctl enable zigbee2mqtt.service
```

Done! 😃

Some tips that can be handy later:
```bash
# Stopping zigbee2mqtt
sudo systemctl stop zigbee2mqtt

# Starting zigbee2mqtt
sudo systemctl start zigbee2mqtt

# View the log of zigbee2mqtt
sudo journalctl -u zigbee2mqtt.service -f
```

## 6. (For later) Update Zigbee2mqtt to the latest version
To update Zigbee2mqtt to the latest version, execute:

```sh
# Stop zigbee2mqtt and go to directory
sudo systemctl stop zigbee2mqtt
cd /opt/zigbee2mqtt

# Backup configuration
cp -R data data-backup

# Update
git checkout HEAD -- npm-shrinkwrap.json
git pull
npm ci

# Restore configuration
cp -R data-backup/* data
rm -rf data-backup

# Start zigbee2mqtt
sudo systemctl start zigbee2mqtt
```

# What's next?
[Pairing devices](pairing_devices.md)
