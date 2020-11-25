---
title: 'Life as a Web-Developer :: We’ve been here before'
author: Veerle Deschepper
type: post
date: 2017-03-31T19:43:51+00:00
url: /life-as-a-web-developer-weve-been-here-before/
categories:
  - Blog
  - Life as a web-developer
tags:
  - funny
  - Laravel
  - Life
  - PHP
  - Story
  - web-development

---
Over time your bound to repeat things you&#8217;ve already done before. Maybe not \*exactly\* the same &#8211; but simular enough to get inspired by your past self. Sounds familiar? I&#8217;m sure it will! Well this is a story about how things turn could evolve.

## Haven&#8217;t we done this before?

As a good worker, you dutifully start your task by reading/asking what should you be doing first. A few lines in things are starting to sound kinda familiar &#8211; very familiar. Memories are starting to come back. And idd &#8211; you have done this before! It wasn&#8217;t completely identical &#8211; but close enough to give your a big boost. You dive in your archived projects and find the needed resources&#8230;

### how things normally turn out

  1. Looking through the files you quickly find what you need
  2. copy it
  3. start changing

### how things turn out .. when your a web-dev/developer

Looking through the files you quickly find what your after. It&#8217;s an older project though&#8230;made by several people&#8230;some who don&#8217;t work here anymore&#8230; ok no worries.. I don&#8217;t really need it running to grab what I need? **(! 1)** Ok lets see, we&#8217;ll need the table structures as well. **(! 2) **Oh this project uses migrations, forgot about that! nice! .. a lot of migrations.. Oh no.. **(! 3) **

**(!! 4) **We will need to have this project running (if possible) on a webserver and create the database before we can even consider to think  copying things from it. Experience lets you see how things run without actually running the app &#8211; but cannot help with the database and migrations. You asses if it will be worth it. It will. How difficult can it be? Shouldn&#8217;t take lang, isn&#8217;t it? Here we go we:

  1. Create a new database &#8211; just on your localhost b/c setting up a new vagrant machine shouldn&#8217;t be needed right?
  2. Create a new user for said database
  3. Import the basic schema. (we would be done here if no migrations are used)
  4. You don&#8217;t trust the schema &#8211; since there so many migrations. You feel you have no choice then to run them.
  5. It&#8217;s a freshly checked out Laravel project -> need building of assets and downloading packages. You run composer update.
  6. Error #1 &#8211; seems like this project uses a not installed php extension.
  7. Look up package that uses it.
  8. Decide installing that extension on your local machine will be faster and useful in the future
  9. Error #2 &#8211; homebrew cannot find package
 10. Google
 11. Ok. we the package is renamed. Trying with new name.
 12. Error #3 -Error: Your Xcode (7.0) is too outdated. Please update to Xcode 8.2 (or delete it).
 13. #?@Curse! and let your hand forcefully land on your table. I ONLY WANT  TO SEE THE TABLES!! ARGHHHHHH!!!
 14. Ok. Let&#8217;s disable that package.
 15. Why can&#8217;t I still comment out things in json?
 16. Lets download xcode in the main time as well.
 17. Open App Store
 18. Check Updates: nothing
 19. Oh wait it is still checking. Still checking. And checking. Screw this! Search &#8220;xcode&#8221;
 20. Looks like it was a new release. cool. downloading 4,53 GB.
 21. Store says it will probably take 15 minutes.
 22. sigh
 23. Back to the app
 24. Error #4 &#8211; Silly human! you&#8217;r attempt to remember this package without my knowledge isn&#8217;t accepted!
 25. Google how to exclude a package from composer.json / add comments. I don&#8217;t want to delete it completely.
 26. Fuzzy feeling that your not alone with this problem: at least 4 different discussions about this thing are going on. But off course they all end with the same: you can&#8217;t. This is 2017 and we still have no real way to add comments to JSON. I know this is something that is very rarely needed but in the case of config files &#8211; like composer.json &#8211; it&#8217;s just a pain. Although it is also true that if I had this dependency already installed &#8211; or could install it with brew in seconds, this wouldn&#8217;t raise an issue .. now.
 27. Add workaround to comment problem: write a json property &#8220;comment&#8221; and remove all &#8221; : ; from the copied package.
 28. Hope you&#8217;ll remember to add the package later (including the punctuation&#8221;.
 29. Remember you use Git &#8211; so this should even have been an issue in the first place..
 30. Hit composer update.
 31. Wait
 32. Error #5 &#8211; The requested PHP extension is missing&#8230;. wait?! what? how?
 33. Curse
 34. Decide it will probably be easier to try to install the extension. Check progress xcode instal = 4min.
 35. Silently praise yourself and be thankful for starting the install of the update when you did
 36. Wait.
 37. Cool! xcode is installed.
 38. Run composer update
 39. Ow&#8230;cancel that, we need that F# extension first
 40. Run brew
 41. Error #6: You have not agreed to the Xcode license. Please resolve this by running: sudo xcodebuild -license accept
 42. WTF. ok. at least there is a command for it.
 43. Run license accept comment
 44. Run brew
 45. Warning: something something about your home dir..
 46. Looks like brew is updating itself though.. fingers crossed.
 47. Error #7: Could not install b/c of conflict.
 48. Realise you&#8217;re trying to install the php55 version on a php56 machine. Doh!
 49. Change a 5 to a 6.
 50. Run brew
 51. Ok the extension is installed.
 52. Opening the php config file to add/enable it. Try to remember how. Take an educated guess.
 53. Restart servers.
 54. Try to find it in the php info log. feeling tired. so much text. screw this! Composer update will check for me!
 55. Composer update.
 56. Victory! Composer is installing :)) You&#8217;ve never felt this happy! Yeey!
 57. Wait
 58. Realise it&#8217;s late and your really getting tired.
 59. Feeling dread seep in that you will not be building anything anymore.
 60. Feeling a sense of loss &#8211; you really had an idea to start creating and moving forward. Even though you only had a few hours left; it would have been enough to get things started.
 61. This project has a lot of packages. I hope no server/internet is going to fail me now.
 62. Relief &#8211; every package is downloaded. Things are looking up!
 63. Ignore deprecation warnings and recommendations.
 64. THE moment where all been waiting for! Yes yes! The migration! Exited you run the command to tell your Artisan butler to check the database files and update the schemas with all the migration files you saw! Yeesss this is happening.
 65. You hit  < enter > a bit harder than should.
 66. _Nothing to migrate._
 67. ..
 68. WTF.
 69. ..
 70. omg
 71. ..
 72. cry for lost time.
 73. silently realise that the datestamp in GIT of the sql file correspondents with the last changed stamp on the migration folder.
 74. feeling embarrassed
 75. feeling thankful for the lesson. This will not happen again.
 76. realise you learned a lot today.
 77. go to sleep

## This is why:

  1. I don&#8217;t really like migrations. Sure there easy to build and make database changes trackable and version-able. But they add a level off complexity, especially in cases like this.
  2. You should always \*\*always\*\* add a timestamp to your SQL dumps and/or a version number.
  3. You should always \*\*always\*\* add that latest sql structure dump before closing the project.
  4. Avoid using packages that require specific, rare, special php extensions enabled.
  5. Avoid packages that hard check for 4. without a way to say &#8220;Yeah I know I will fix this later when I need it, just do the others at this time. ok?&#8221;
  6. Developing is an emotional rollercoaster and I&#8217;m sorry if I snapt at you &#8211; I didn&#8217;t mean it!

&nbsp;

This is not fiction. This is reality.  
No &#8211; it is not always like this. But somedays it is.  
That&#8217;s part of the job.

Every webdevver has stories like these otherwise he/she isn&#8217;t really a webdevver.

&nbsp;