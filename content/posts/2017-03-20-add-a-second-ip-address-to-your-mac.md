---
title: Add a second IP address to your mac
author: Veerle Deschepper
type: post
date: 2017-03-20T12:03:58+00:00
url: /add-a-second-ip-address-to-your-mac/
categories:
  - Blog
  - Tutorial
tags:
  - macOS
  - Networking

---
Sometimes you need multiple IP addresses on one computer to access devices on a different subnet or simply because you bought a new device with a set static IP. Instead of changing your entire network, you can add a second IP to your computer which will allow you to access this new device.

The subnet of my homenetwork is 192.168.2.x instead of the more &#8216;normal&#8217; 192.168.1.x. Using this subnet has no disadvantages other than the init setup of a new device. It has the major advantage of being able to plug in a new device (think router,&#8230; ) with fixed IP 192.168.1.1 _without _it disrupting my current network setup. To be able to access this device I have to add a new IP to my computer like this:

  1. Go to _system preferences._
  2. Click on _network._
  3. The list on the left side shows all network interfaces defined on your machine, sorted in order off preference. Click on the [+] button in the bottom left corner.
  4. Choose the adapter you want to add an IP address to. Give it a name.
  5. Click _create._
  6. Now this new adaptor is created and added to the list on the left.
  7. Choose _manually_ to add a static IP to this adaptor. Choose any valid IP that isn&#8217;t  already used yet, e.g. 192.168.1.42. Subnet can be the default of 255.255.255.0. DNS/Gateway isn&#8217;t that important in this scenario since all internet and normal traffic is handled by our main adapter configuration.
  8. Now you can access this new device and set it up accordingly

The last thing I configure on a new device is it&#8217;s IP settings. This gives me the power of having full internet access on my computer to look up things or download new firmware. Doing this allows for easy configuration and stress free deployment of a new router.

I learned this the hard way. In a time when your network adaptor mac address were locked by your ISP modem, before the widespread affordable 2G/3G/.. and before iPads/smartphones. When placing a new router meant loosing your internet  and hoping .. it would come back.