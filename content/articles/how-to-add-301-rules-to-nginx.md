---
title: How to add permanent redirects to NGINX 
author: Veerle Deschepper
date: 2020-12-07T23:43:16+01:00
tags:
  - tutorial 
  - NGINX 
  - Docker
  - SEO
  - web-development
  - NuxtJs
  - Static
---
## Problem 
This site has been rebuild, moved and moved again. From static Html to Wordpress, to I don't remember what -- and back again.
While this is just a personal site; it is important to keep all the links intact. Damnit, those took effort!

**SEO. Google indexing, ranking, external links...** are vitally important for your site. It took time and effor to build them.

## Solution
<div class="text-indigo-400">
First plan was to write a fancy Nuxt Module that will generate the rewrite rules, add them to a file, and Docker would put it in the correct place.
But. Time.<br/>And waaaaay too complicated & ambitious &rarr; after moving this would be useless.  🤦‍♀️
</div>


Assuming you have moved all the content from your Wordpress to NuxtJs using the Hugo Export plugin.

### Step 1. Generate the new site locally

This will generate AND output all the new routes
```console
✔ Generated route "/journal/alan-watts-the-story-of-the-chinese-farmer"                                                                                                                                19:52:39
✔ Generated route "/journal/life-as-a-web-developer-weve-been-here-before"                                                                                                                             19:52:39
✔ Generated route "/nantucket/nantucket-2"
```

You can be as lazy as I am and past the output to a spreadsheet. Using Numbers the output was nicely put in different cols. 😎

### Step 2. Use the tool you want to create the NGINX syntax
You can do this with Numbers, Excel, Coderunner, ... really any tool you're familiar with. 

In the past that was Excel for me, now it's Tinkerwell. Using all the power of Laravel is just FAST! 🎉

BTW 'search & replace' is your best friend - use regexps or just replace `\n` with `,\n`. 
On hintsight I'm pretty sure this can be completly done with regexp.. but why? 😏

Copy the column with the url, and put those in an array. 
```php
$new=[
    "/journal/life-as-a-web-developer-i-bet-it-is",
    "/journal/alan-watts-the-story-of-the-chinese-farmer",
    "/journal/life-as-a-web-developer-weve-been-here-before",
    ...
    ];
```
Loop and generate the new syntax.
* we had the same permalinks in wordpress as the name of our new files
* to have  a **permanent redirect**, use the code 301
* to have some formatting use `\t` for a tab; `\n` for a newline

```php
collect($new)->each(function ($newurl) {
  	// rewrite ^oldurl newurl permanent;
  	$oldurl = Str::afterLast($newurl, '/');
    echo "location = /$oldurl/ {\n\treturn 301 $newurl;\n}\n";
})
```
We are using the [NGINX best practice: the location &rarr; ruling instead of the rewrite][1].

### Step 3. Docker 
I'm using my [Pagespeed][3] repo, as a base docker image for this website.

Basically you create a txt-file with these new locations and include them in your server config. 
Just be careful **not to use a `.conf` extension**. just leave it extension-less

```nginx[default.conf]
server {
    listen 80 default_server;
    
    ...
    
    include /etc/nginx/conf.d/redirects;
}
```

```dockerfile[Dockerfile]
COPY  docker/redirects /etc/nginx/conf.d/redirects
COPY  docker/nginx.conf /etc/nginx/conf.d/default.conf
```

### Result
Test
```console
❯ curl --head http://localhost:5080/arkanoid
```
Output

```diff
+ HTTP/1.1 301 Moved Permanently
Server: nginx
Date: Mon, 07 Dec 2020 20:20:51 GMT
Content-Type: text/html
Content-Length: 162
+ Location: http://localhost/projects/arkanoid
Connection: keep-alive
...
```

🎉

[2]:https://serverfault.com/questions/768403/how-to-obtain-hostname-of-request-nginx 
[1]:https://www.nginx.com/blog/creating-nginx-rewrite-rules/
[3]:https://github.com/Gompje/docker-nginx-pagespeed/
