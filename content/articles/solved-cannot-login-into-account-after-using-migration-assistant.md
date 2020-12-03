---
title: 'Solved: Cannot login into account after using Migration Assistant'
author: Veerle Deschepper
type: post
date: 2017-08-12T12:05:15+00:00
url: /solved-cannot-login-into-account-after-using-migration-assistant/
categories:
  - Best Practices
  - Blog
tags:
  - hackingtosh
  - install
  - macOS
  - Sierra

---
Since MacOS Sierra, migrating to a new computer is somewhat wonky at times. Especially if your like me and refuse to choose to reinstall everything; hey if it works.. its perfectly fine to use the same settings/user/stuff from 2011 right? To be honest I have made so many tweaks and installed/changed so many services throughout the years that I even if I would remember them all it would take weeks to get everything right again. Not an option!

When installing a new mac you get the option to restore the files from another source or restore from a backup. This doesn&#8217;t always work, and if it does it&#8217;s never been reliable &#8211; and you loose a lot of time when you have almost 1TB of data. To avoid this I install the machine first and then move the data/settings/app later with the migration assistant. I even move them between computers, this has proven to be the fastest and most reliable way to transfer the data.. al be it with some caveats and things you need to remember.

### 1. Always use a wired connection, the fastest one you have

Never _ever_ should you use a WiFi connection to transfer a lot of data especially system files and preferences. Not only are the speeds terrible its also pretty unreliable and prone to errors. You will use up all your WiFi bandwidth. 800gb worth of data and apps transfers in about 3h with the migration assistant over a gigabit network.

### 2. Create a separate &#8216;will always be clean&#8217; admin account

When the time comes that for whatever reason you cannot login with your main account &#8211; you will praise the day you created a second one to fix it. [You can always make when it&#8217;s already to late][1], but you should ..

### 3. .. use a different username/homedir when you plan on using the migration tool after setup

Part of MacOS&#8217;s installation is the creation of a primary admin user account. If you&#8217;re not restoring from a backup of immediately transfer an account in this fase, its best to create a completely different user than your main account during this fase.

Not only will you not forget to create another admin user later but this will avoid any file permission issues later when transferring data with the migration tool. normally this shouldn&#8217;t be an issue, but Apple still hasn&#8217;t fixed that bug &#8211; it in fact removed all the tools that allowed you to repair permissions yourself instead!

### 4. When you cannot login to your migrated account

If you did all the above and still cannot login to your account &#8211; it&#8217;s possibly a preference setting that&#8217;s the culprit. When you transfer an account the default setting is to transfer anything and everything. That means literally everything: from your preferred language, to the app settings, to the display resolutions and scroll speeds.

Most of the time this will be fine. Except when it fails &#8211; it will log you out immediately, even if your password is correct.

  * Check display settings on the source computer, I had an issue where a driver wasn&#8217;t fully loaded on the destination. It couldn&#8217;t set the display preferences I had defined and I could not login. When the driver issue was resolved, I could login again
  * I didn&#8217;t create a separate user during setup &#8211; and after using migration assistant I could not login to my account. The file permissions on the home directory and some of the subs were completely messed up b/c it tried to merge to existing accounts. This didn&#8217;t happen pre- El-Captain

 [1]: https://www.lifewire.com/create-new-admin-account-for-login-issues-2259976
