---
title: How to move the Google Drive Filestream (FS) cache folder on macOS
author: Veerle Deschepper
type: post
date: 2018-06-06T15:51:46+00:00
url: /how-to-move-the-google-drive-filestream-fs-cache-folder-on-macos/
featured_image: /wp-content/uploads/2018/06/Screen-Shot-2018-06-06-at-16.54.24.png
categories:
  - Blog
  - Featured
tags:
  - Google Drive FS
  - macOS
  - terminal

---
Google Filestream is great! It is however a lot _less_ awesome when you have a lot of data, want to keep a hardcopy offline and a too small main SSD.

### The Why

My system drive was pressed to its limits, virtual machines, client data, photos, it adds up. This is a desktop pc, a custom build mac. Plenty of room to install a new disk. Easy right? .. hmm MacOS isn&#8217;t that elegant with multiple disks. It can obviously be done but I&#8217;ve learned in the past that moving the wrong folders can cause a lot of headache (looking at you iTunes!) Although fixed system disks should be safer than networked or usb ones.  Either way after careful deliberation I decided moving my vm&#8217;s and this Google Drive cache folder would have the most impact without causing a lot of user impact. Easily the biggest chunk of data as well, in fewest folders &#8211; meaning a custom backup job in Carbon Copy Cloner would be easy maintained/made, if TimeMachine wouldn&#8217;t pick them up. (still have to test that)

### The Problem

Google Drive isn&#8217;t a folder anymore. Filestream its a cleverly mapped network drive, with the option to locally cache data. This works great! But there is no option to move that cache folder; in fact it&#8217;s even hidden deep down the user application folder. Worse: the app has literally no settings menu.

### The &#8216;Google says&#8217; Solution

[Google says you can change the cache folders location][1] by manipulating the plist file and setting a flag. Or in the [registery on windows][2]. You cannot edit plist files easily, this has to be done with special terminal commands. You have to do things like this:

```shell
$ sudo defaults write /Library/Preferences/com.google.drivefs.settings DefaultMountPoint '/Google Drive'
``` 

Then you need to at least restart Google Drive or better yet, the complete computer&#8230; to see it doesn&#8217;t work.

One problem I found is that the variables that are listed in Googles documentation are different than those listed in the plist file. Another was that when I tried to change the basepath var, to move the complete Google app folder, it just gets overwritten when Google Drive starts again. Maybe I should have rebooted everything but at that time I could not.

Anyway this is way to difficult to remember in 6 months and even more so to maintain. Its to hidden. If it breaks it will be obscure and not obvious; what if the var name changes and my main drive slips full again overnight? bringing the computer to a crawl? No thank you.

### My Solution

<div class="rounded-md bg-opacity-25 bg-purple-600 py-4 px-6 mb-3 flex justify-center items-center">A symbolic link. That&#8217;s it. I just copied the cache folder to my other ssd, renamed the original one and created a symbolic link to the new one.</div> Like this:

<content-image wide src="/img/screenshot-link-google-drive.png" alt="screenshot finder"></content-image>

Yes I left to old folder on the drive, just for now. This way I can easily check if the old folder is getting used or not, and if this failed I wouldn&#8217;t have to transfer a lot of data again.  Symlinks are basically just direct pointers from one point to another, it should just work. That said there is software like Apache were you have to specifically enable it, and iTunes well just refused to work after I tried it that one time.

I used PathFinder to make the link, in finder you can find the option to create one under services.  And just in case that last one is some remnant of customisation of mine to this menu in the past, [you can find a more info online][3]. Just remember that these links are hardwired, meaning that if you move your folder again or change discs you might have to re-link &#8212; aka my new drive has arrived so now I&#8217;m copying things again from this testdrive I had laying around. You will however either get a massive error or the app will just not work; or it could just do whatever. But that doesn&#8217;t matter much, given you don&#8217;t do this type of action very often and it&#8217;s very visible. At least you are in control and not Google updates. <small>Unless they change the way caching works that is.</small>

 [1]: https://support.google.com/a/answer/7644837?hl=en
 [2]: https://productforums.google.com/forum/#!topic/apps/LJmatPtG0iE
 [3]: https://osxdaily.com/2015/08/06/make-symbolic-links-command-line-mac-os-x/
