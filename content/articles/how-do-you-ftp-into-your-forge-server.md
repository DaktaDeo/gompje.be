---
title: How do you FTP into your Forge Server?
author: Veerle Deschepper
type: post
date: 2018-02-21T21:37:12+00:00
url: /how-do-you-ftp-into-your-forge-server/
categories:
  - Blog
  - Tutorial
  - Uncategorized
tags:
  - FTP
  - Laravel Forge
  - macOS
  - SSH
  - Transmit
  - web-development

---
## As simpel as  1-2-3 with MacOs and Transmit v5.x

I&#8217;m using the default id_rsa key, but you can generate multiple keys and choose the one you want. However I do find that this key is the easiest to remember &#8211; since its sole purpose is to identify this machine to the others.

You will need to generate this key first and add it to the default identity store on the system. While the last step is not strictly needed for this short tutorial, it&#8217;s usually best to do so when you first set up the keys. This way the key can actually be used and you won&#8217;t be puzzled later &#8220;why doesn&#8217;t this connection work?!&#8221;

### 1. add the id_rsa key of your computer to your server

  1. copy the key to the clipboard in terminal 
```console
pbcopy < ~/.ssh/id_rsa.pub
```
  2. in Forge, navigate to the server
  3. in Forge, go to SSH keys
  4. in Forge, add a name for the key and past it in the provided fields
  5. after saving Forge will install the key on the server

 _optional_: under your account in Forge you can add this key to the default set of keys for future installs.

### 2. after the key is installed we can configure Transmit

  1. in Forge, locate the external IP of your server, its the address without ()
  2. in Transmit, add a new SFTP site 
      1. address: public IP (step 2.1)
      2. username: forge
      3. as password we are going to tell Transmit to use our SSH key. 
          1. click on the [🔑] button
          2. Transmit uses its own key-store, we will need to import our id_rsa key 
              1. click import
              2. navigate to ~/.ssh/
              3. select the private key file (the one without .pub in the filename)
              4. enter the passphrase when asked (best practice to always set one)
          3. Select the id_rsa record from the Transmit key-store

### 3. click connect 🎉

Transmit will give an alert when it is the first time you connect to your server &#8211; you know to make sure it&#8217;s what you intended and safe to connect.

As a Best Practice I try to avoid FTP as much as possible. My workflow consist of pushing to GIT, pull master branch and for some projects the automatic deploy feature that Forge has &#8211; combined with some scripts. But in the inevitable event something really brakes the site &#8211; it&#8217;s comforting you did this upfront for that quick fix/hack. 🤠

&nbsp;

_I used MacOS 10.12.6 and Transmit v5.0.1._
