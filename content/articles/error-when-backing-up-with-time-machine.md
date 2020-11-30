---
title: Error when backing up with Time Machine
author: Veerle Deschepper
type: post
date: 2017-03-19T17:06:15+00:00
url: /error-when-backing-up-with-time-machine/
categories:
  - Blog
tags:
  - macOS
  - terminal
  - Time Machine

---
The day before yesterday, after weeks or even months working perfectly, my Time Machine backup suddenly failed. At first it said that my backups where corrupt and I had to start over. A little gruntled about the failing and the loss of all that history I let Time Machine clean my Time Capsule and start over. A little mad at myself for not periodically backing up my backups and vowing to do so in the future.

So be it!

Lets [Speed up Time Machine backup][1] and do that initial big dump.

## Init. Again. <error>. Go To 0.

I have roughly 800gb of data. All little files, virtual machines and a couple of big archives. After 20gb Time Machine crashed. Erase, repeat. Again error. &#8220;temporary problem, try again later&#8221;. Hmm very helpful..

To be save I &#8216;quickly&#8217; made a drive backup, no issues. Several hours have past and I try again with Time Machine. Error after 750kb. Even to a brand new Time Capsule it would just stop after 10mb or sometimes 50gb copied. Safe boot, repairing permissions,.. al resulted in the same vague error. No detailed description of what is going wrong. I looked in the logs with:

<pre class="EnlighterJSRAW" data-enlighter-theme="git" data-enlighter-linenumbers="false">clear; printf '\e[3J' && log show --predicate 'subsystem == "com.apple.TimeMachine"' --info --last 7d | grep -F 'eMac' | grep -Fv 'etat' | awk -F']' '{print substr($0,1,19), $NF}'
</pre>

and there it was:

<pre class="EnlighterJSRAW" data-enlighter-theme="git" data-enlighter-linenumbers="false">Error: (-48) SrcErr:NO Copying /Users/veerle/Documents/$RECYCLE.BIN to /Volumes/Time Machine Backups/Backups.backupdb/MacKorben/2017-03-19-100444.inProgress/502CF005-A9A5-4FFB-99B4-73A2DE508CBD/Macintosh HD/Users/veerle/Documents
2017-03-19 10:09:34  Stopping backup.</pre>

That one file that caused the whole thing to crash and eating my time. If only Apple would provide an easy way to find these errors instead of giving the same &#8216;friendly&#8217; message over and over. 🙄  
I deleted this hidden system file, restarted the backup &#8211; and..

<img class="aligncenter size-full wp-image-124" src="https://i2.wp.com/blog.gompje.be/wp-content/uploads/2017/03/Spongebob-Later-e1506626423738.jpg?resize=640%2C280&#038;ssl=1" alt="" width="640" height="280" srcset="https://i0.wp.com/gompje.be/wp-content/uploads/2017/03/Spongebob-Later-e1506626423738.jpg?w=640&ssl=1 640w, https://i0.wp.com/gompje.be/wp-content/uploads/2017/03/Spongebob-Later-e1506626423738.jpg?resize=300%2C131&ssl=1 300w, https://i0.wp.com/gompje.be/wp-content/uploads/2017/03/Spongebob-Later-e1506626423738.jpg?resize=150%2C66&ssl=1 150w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" /> 

..it&#8217;s almost done. 🎉

Finally!

 [1]: https://blog.gompje.be/2017/03/19/speed-up-time-machine-backup/