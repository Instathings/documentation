---
id: flashing-dongle
title: Configure the CC2531 Zigbee dongle
sidebar_label: Flash CC2531 dongle
---
In order to use a Zigbee device you need to configure the network with a so called *coordinator* device which inizialize the connection and keeps it up. For this purpose we use a USB dongle CC2531, designed by Texas Instrument. <br> However before start using it, the dongle needs to be flashed with a software which allows it to act as a network coordinator. 

In this tutorial we will show how to correctly configure the USB dongle get it ready for Instathings. It will take just 5 minutes, let's start!

## Flash the firmware to the USB dongle

### Requirements
This tutorial is for Mac OS systems and you need the following devices:
* CC2531 USB Dongle
* CC Debugger (it is generally provided with all the cables to connect it to the dongle)

### Install Homebrew

Fist of all you need to install Homebrew on you Mac. From the command line type the following commads:

```
# install brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# install dependecies
brew install autoconf automake libusb boost pkgconfig libtool

# clone cc-tool
git clone https://github.com/dashesy/cc-tool.git
cd cc-tool
./bootstrap
./configure
make
```

### Download the firmware

Download the firmware from the [following link](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20190608.zip). This software will be flashed in the dongle. 

### Connect the dongle 
Now you need to connect the dongle to the CC Debugger and then connect the dongle to your pc. The cables connection is shown in the following picture.

Generally the status led on the debugger should be green, if not turn off and on the debbuger. 

<img src="assets/flashing-dongle/CCDebugger.JPG" width="400"/>
 
### Flash the firmware
Now, from your command line, execute the following command:

`sudo ./cc-tool -e -w CC2531ZNP-Prod.hex`

## Check the connection
Now let's move from our pc to the device that will use with our Instathings system. For these tutorial we used a Raspberry Pi 4. <br > Connect your USB dongle to your device and type these command to check if it is correctly detected.

`sudo nano cc2531.sh`

Copy the following script and then save it (to save type `Ctrl+X, Y, Enter`)

```
#!/bin/bash
for sysdevpath in $(find /sys/bus/usb/devices/usb*/ -name dev); do
    (
        syspath="${sysdevpath%/dev}"
        devname="$(udevadm info -q name -p $syspath)"
        [[ "$devname" == "bus/"* ]]
        eval "$(udevadm info -q property --export -p $syspath)"
        [[ -z "$ID_SERIAL" ]]
        echo "/dev/$devname - $ID_SERIAL"
    )
done
```
Now give it the permission and exectute it

```bash
sudo chmod 777 cc2531.sh 

./cc2531.sh
```
If everything worked fine, you should see something like this:

```bash
/dev/bus/usb/001/001 - Linux_4.19.75-v7l+_xhci-hcd_xHCI_Host_Controller_0000:01:00.0
/dev/ttyACM0 - Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018E199DF
/dev/bus/usb/001/004 - Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018E199DF
/dev/bus/usb/001/002 - 2109_USB2.0_Hub
/dev/bus/usb/002/001 - Linux_4.19.75-v7l+_xhci-hcd_xHCI_Host_Controller_0000:01:00.0
/dev/bus/usb/003/001 - Linux_4.19.75-v7l+_dwc_otg_hcd_DWC_OTG_Controller_fe980000.usb
```
As you can see our dongle is correctly detected on `/dev/ttyACM0` and we can now start using our Zigbee network! 

Let's go on with the next steps!
