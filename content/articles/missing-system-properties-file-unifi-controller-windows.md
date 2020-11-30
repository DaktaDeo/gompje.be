---
title: Missing system.properties file – Unifi controller – windows
author: Veerle Deschepper
type: post
date: 2017-03-19T17:00:56+00:00
url: /missing-system-properties-file-unifi-controller-windows/
categories:
  - Blog
tags:
  - Networking
  - UniFi
  - win7

---
After downloading and installing the Unifi controller software, it failed to boot on my win7 server. Seems like the software uses an internal webserver, running at port 8080. On my server this port is in use with another application. A quick google gives me multiple post that this port can be changed inside the <span class="code">/data/system.properties</span> file, located in the root of your user folder. Alas I do not have such a file. Further digging reveals that the software creates this file \*\*upon first run\*\*. Great! when it runs! 🙁

On windows however there is a second application installed:_UniFi Discovery Utility._ After running this, the file is created and the default ports can be changed. To be fair this is [mentioned on the manual page][1] .. as a footnote in an example section for testing ports&#8230; Took me a while to even see it &#8211; why not mention this when you want to start the app? or better yet: create all the files when installing the software?

 [1]: https://help.ubnt.com/hc/en-us/articles/204910084-UniFi-Change-default-ports-for-controller-and-UAPs