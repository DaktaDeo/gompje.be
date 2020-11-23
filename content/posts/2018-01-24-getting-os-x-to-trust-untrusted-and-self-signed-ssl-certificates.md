---
title: Getting OS X to trust untrusted and self-signed SSL Certificates
author: Veerle Deschepper
type: post
date: 2018-01-24T21:11:53+00:00
url: /getting-os-x-to-trust-untrusted-and-self-signed-ssl-certificates/
categories:
  - Best Practices
  - Blog
  - Life as a web-developer
tags:
  - Certificates
  - macOS
  - SSL
  - web-development

---
  1. Visit the untrusted site in Safari
  2. Click on the &#8220;unsecure&#8221; button in de addressbar to view the certificate
  3. Verify it&#8217;s contents is correct
  4. Close the popup window by clicking somewhere on the screen
  5. Click and drag the unsecure button to your desktop or any folder. This will download the actual certificate on your computer.
  6. Open the file in Keychain Access. Should be the default action by dubble clicking it.
  7. The import wizard pops up, choose 
      1. login keychain: only for the current user
      2. **system keychain**: for everyone who uses this machine
  8. Go into the Certificates section in the Keychain Access app.
  9. Locate the certificate you just added.
 10. Double click on it, enter the trust section.
 11. Select“Always Trust” under “When using this certificate”

Thats it! This site will now be fully trusted, in any browser on this computer