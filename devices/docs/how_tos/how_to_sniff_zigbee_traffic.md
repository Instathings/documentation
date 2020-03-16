---
---
# How to sniff Zigbee traffic
Sniffing Zigbee traffic can be handy sometimes. E.g. when you want to analyze the commands used by a device.

### With CC2531
#### Prerequisites
* Computer
  * Ubuntu machine (tested with 18.10)
  * Windows machine (tested with Windows 10)
* CC2531 stick

#### 1. Flashing the CC2531 stick
The CC2531 needs to be flashed with a sniffer firmware. Flash the firmware using the instructions from [Flashing the CC2531](../getting_started/flashing_the_cc2531.md).

##### Linux
The firmware is included with [PACKET-SNIFFER](http://www.ti.com/tool/PACKET-SNIFFER) (not **PACKET-SNIFFER-2!**). Download PACKET-SNIFFER. As the sniffer firmware is only available in the windows installer we need to extact the hex file. This would require 7zip (p7zip-full or p7zip-plugins package depending on distro)
```bash
unzip swrc045z.zip -d PACKET-SNIFFER
7z e PACKET-SNIFFER/Setup_SmartRF_Packet_Sniffer_2.18.0.exe bin/general/firmware/sniffer_fw_cc2531.hex
sudo <path-to>/cc-tool -e -w <path-to>/sniffer_fw_cc2531.hex
```

##### Windows (and possibly Ubuntu)
For Windows this firmware is included with [ZBOSS](http://zboss.dsr-wireless.com/downloads/index/zboss). Register an account and download *ZBOSS Sniffer for Windows 64-bit*. Included in the ZIP file is the firmware in subfolder `hw\CC2531 USB dongle\zboss_sniffer.hex`. Please note that ZBOSS is also available for Ubuntu.

#### 2. Installing required tools

##### Ubuntu
```bash
cd /opt
sudo apt-get install -y libusb-1.0-0-dev wireshark
curl -L https://github.com/homewsn/whsniff/archive/v1.1.tar.gz | tar zx
cd whsniff-1.1
make
sudo make install
```

##### Windows
Download and install the latest version of [Wireshark](https://www.wireshark.org/download.html). ZBOSS itself is portable and won't need to be installed.

#### 3. Sniffing traffic
On Ubuntu start wireshark with `sudo whsniff -c ZIGBEE_CHANNEL_NUMBER | wireshark -k -i -`. For Windows run the ZBOSS executable in `gui\zboss_sniffer.exe`, enter the path to your Wireshark executable and click on the `Start` button. For ZBOSS make sure the correct Zigbee channel is set, by default it will sniff on channel `0x0C (12)` but the default Zigbee2mqtt channel is 11 (`0x0B (11)`).

Wireshark will start and log the Zigbee messages. As these messages are encrypted we need to add 2 encryption keys. The first one is the Trust Center link key, which is the same for (almost) every Zigbee network. The second one is the network encryption key (Transport Key).

Add the Trust Center link key by going to to Edit -> Preferences -> Protocols -> ZigBee. Set Security Level to *AES-128 Encryption, 32-bit Integrity Protection* and click on *Edit*. Click on *+* and add `5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39` with Byte Order Normal.

*NOTE: The Hue bridge uses a [different Trust Center link key](https://peeveeone.com/?p=166)*

![Wireshark Trust Center link key](../images/wireshark_tclink_key.png)

Next we need to figure out the network encryption key (Transport Key). There are two ways to do this:

1) By default, if you haven't changed `network_key` in your `configuration.yaml` this will be `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`. If you changed your `network_key`, then convert each number into its 2-digit hexadecimal value, and combine them all with `:` between. E.g. `[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]` -> `01:03:05:07:09:0B:0D:0F:00:02:04:06:08:0A:0C:0D`

2) If you don't want to manually translate the numbers, the network encryption key is also exposed when a device joins the network. Pair a new device to the network (or re-pair an existing one) and grab the message where the Info is *Device Announcement....*. Open the message and expand *ZigBee Network Layer Data* -> *ZigBee Security Header*.

![Wireshark network key](../images/wireshark_network_key.png)

Copy the key value, as shown above and go to Edit -> Preferences -> Protocols -> ZigBee -> Edit and add the key with Byte Order Normal.

Now Wireshark is able to decrypt the messages. When e.g. turning on a light you will see a message similar to:

![Wireshark packet](../images/wireshark_packet.png)

##### Troubleshooting
If you get "couldn't run /usr/bin/dumpcap in child process: permission denied" when runnign whsniff. Check if /usr/bin/dumpcap is executable for everyone. Or `chmod 755 /usr/bin/dumpcap`.

## With HUSBZB-1 stick
If you happen to have a spare HUSBZB-1 stick, you can also use this to sniff traffic.

### Prerequisites
* Computer
  * Ubuntu machine (tested with 18.10)
  * Windows machine (tested with Windows 10)
* HUSBZB-1 stick
* Wireshark (for instructions on how to install, see the [other docs](./how_to_sniff_zigbee_traffic.md)
* Java

### 1. Install drivers
#### Ubuntu
On linux systems, the HUSBZB-1 stick should work out of the box with no modifications.

#### Windows
Found on https://www.amazon.com/gp/customer-reviews/RSPH6UCG0N3WK/
1. Download Silicon Labs CP210x drivers (Amazon won't let me link this, but it should be easy to Google)
2. Extract drivers to a folder (I'll use C:\CP210x_Windows_Drivers as an example)
3. Open Windows Device Manager (Win+X, M)
4. Right-click on "Other Devices > HubZ ZigBee Com Port" (NOT Z-Wave) and select "Update driver"
5. Select "Browse my computer for driver software"
6. Select "Let me pick from a list of available drivers on my computer"
7. Leave "Show All Devices" selected and click "Next"
8. Click "Have Disk"
9. Enter the folder name where you extracted the downloaded drivers: C:\CP210x_Windows_Drivers
10. Select "Silicon Labs CP210x USB to UART Bridge" and click "Next"
11. Windows will prompt that it cannot confirm the device ID, click "Yes" to proceed.
12. Write down the com port of the ZigBee device, something like COM5 or COM6.
  1. You can find this by going to "Ports (COM & LPT)" in the device manager

### 2. Installing required tools
Both Windows and Ubuntu use the same program for sniffing, found https://github.com/zsmartsystems/com.zsmartsystems.zigbee.sniffer. Scroll down to the bottom to download a precompiled jar file.

#### Ubuntu
No extra software besides `ZigbeeSniffer.jar` and Wireshark is needed

#### Windows
Download and install https://nmap.org/npcap/ and make sure you select to install the "Npcap Loopback Adapter" when installing. It shouldn't matter whether or not you use Winpcap compatibility mode.

### 3. Sniffing traffic
In a terminal or command line, run `java -jar ZigbeeSniffer.jar -baud 57600 -flow hardware -port {PORT}`.
On Windows, `PORT` should be replaced by `COM5` or whatever you wrote down in step 1.
On linux, `PORT` will be something like `/dev/ttyUSB3` or wherever you plugged in your HUSBZB-1 device.

Once you have the application running, you should see it connect to and start sniffing traffic on the network.

After that, open up Wireshark and start capturing on the loopback adapater.

Then, apply a filter `udp.port=17754` in order to filter down to only Zigbee traffic.

Lastly, follow the steps of the CC2531 instructions above to set up your encryption keys the same.
