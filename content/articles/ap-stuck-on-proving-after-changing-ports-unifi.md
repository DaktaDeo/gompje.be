---
title: AP stuck on proving after changing ports – UniFi
author: Veerle Deschepper
type: post
date: 2017-03-21T10:48:07+00:00
url: /ap-stuck-on-proving-after-changing-ports-unifi/
categories:
  - Blog
  - Life as a web-developer
tags:
  - Networking
  - UniFi

---
The day after installation of my wifi I was eager to see which devices had logged on and their traffic; you now some fancy graphs and stats. But.. while I still had wifi &#8211; there was nothing to see in the management software! After clicking around it showed that my wifi points had reverted to their _&#8220;__approving&#8221;_ state.  
This is the _&#8220;Hey I am new! am I allowed on your network?&#8221;_ state.  
A bit weird since I still had wifi and yesterday everything worked fine, state and all.

<content-image src="/img/unifi-ap-call-back-url-to-software-after-port-change.png" alt="screenshot"></content-image>

Looking for a button to approve this AP .. nothing. I googled for a bit, finding a bunch of posts from yesteryear telling about a bug in a firmware update or some lock up in the AP after some time. These post where old &#8211; but I learned that when an already approved AP reverted back to the &#8220;_approving&#8221;_ state while still providing WiFi, the only solution was a factory reset, discovering it again and start over. While I did that I noticed an url field in the discovering software. An url \*with\* port to the UniFi controller software.. doh!

I changed the port in the _Set Inform Url Field_ to the correct one. Still works.
