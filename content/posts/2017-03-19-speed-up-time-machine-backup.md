---
title: Speed up Time Machine backup
author: Veerle Deschepper
type: post
date: 2017-03-19T14:20:36+00:00
url: /speed-up-time-machine-backup/
categories:
  - Blog
tags:
  - macOS
  - terminal
  - Time Machine

---
By default Time Machine is running in the background, just using enough resources to run and allowing you to use your computer. This is fine most of time &#8211; but sometimes we gladly offer more resources so that init or big backup goes faster. You can do this by changing the &#8220;do-I-have-to-limit-myself&#8221; setting with the terminal like so:

<pre class="EnlighterJSRAW" data-enlighter-language="generic">sudo sysctl debug.lowpri_throttle_enabled=0
</pre>

when the backup is done you can change back to the default:

<pre class="EnlighterJSRAW" data-enlighter-language="generic">sudo sysctl debug.lowpri_throttle_enabled=1
</pre>

A reboot also resets this variable to its default &#8220;on&#8221; setting