---
title: 'macOS High Sierra installer: cannot connect to recovery server'
author: Veerle Deschepper
type: post
date: 2018-04-26T15:30:59+00:00
url: /macos-high-sierra-installer-cannot-connect-to-recovery-server/
categories:
  - Blog
tags:
  - error
  - High Sierra
  - install
  - macOS

---
Check the system date. When its not close to the present, the server will not connect<sup>*</sup>.

How?

  1. Open Terminal:  &#8220;utilities&#8221; > terminal
  2. type &#8220;date&#8221; in the bash display, it wil display the current set system date. Mine was 1/1/x (don&#8217;t remember the set year) &#8211; because the battery was serviced and got disconnected.
  3. set the date with &#8220;date 0426172718&#8221; to set the date to april (04) 26, and the time to 17 hours, 27 minutes and the year 18 for 2018
  4. close terminal
  5. run install

(*) However it&#8217;s also very likely that you forgot that the wifi is not set yet&#8230; luckily you get a very good descriptive error message /s