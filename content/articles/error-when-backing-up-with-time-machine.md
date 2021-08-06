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

Lets <nuxt-link to='speed-up-time-machine-backup'>Speed up Time Machine backup</nuxt-link> and do that initial big dump.

## Init. Again. <error>. Go To 0.

I have roughly 800gb of data. All little files, virtual machines and a couple of big archives. After 20gb Time Machine crashed. Erase, repeat. Again error. &#8220;temporary problem, try again later&#8221;. Hmm very helpful..

To be save I &#8216;quickly&#8217; made a drive backup, no issues. Several hours have past and I try again with Time Machine. Error after 750kb. Even to a brand new Time Capsule it would just stop after 10mb or sometimes 50gb copied. Safe boot, repairing permissions,.. al resulted in the same vague error. No detailed description of what is going wrong. I looked in the logs with:

```log
clear; printf '\e[3J' && log show --predicate 'subsystem == "com.apple.TimeMachine"' --info --last 7d | grep -F 'eMac' | grep -Fv 'etat' | awk -F']' '{print substr($0,1,19), $NF}'
```

and there it was:

```log
Error: (-48) SrcErr:NO Copying /Users/veerle/Documents/$RECYCLE.BIN to /Volumes/Time Machine Backups/Backups.backupdb/MacKorben/2017-03-19-100444.inProgress/502CF005-A9A5-4FFB-99B4-73A2DE508CBD/Macintosh HD/Users/veerle/Documents
2017-03-19 10:09:34  Stopping backup.
```

That one file that caused the whole thing to crash and eating my time. If only Apple would provide an easy way to find these errors instead of giving the same &#8216;friendly&#8217; message over and over. 🙄  
I deleted this hidden system file, restarted the backup &#8211; and..

<content-image src="/img/spongebob-later.jpg" alt="later..."></content-image>

..it&#8217;s almost done. 🎉

Finally!

