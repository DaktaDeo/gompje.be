---
title: You’ve made a custom post-type in your plugin, but how to show the new fields in your thesis 2.x powered website?
author: Veerle Deschepper
type: post
date: 2017-03-29T21:46:09+00:00
url: /youve-made-a-custom-post-type-in-your-plugin-but-how-to-show-the-new-fields-in-your-thesis-2-x-powered-website/
categories:
  - Blog
  - Tutorial
tags:
  - Thesis 2.x
  - web-development
  - Wordpress

---
While I have been developing all kind of websites and web apps these last 17 years, I am not that familiar with Thesis and WordPress. While making a custom post-type plugin (books) for this site and it didn&#8217;t work. Everything was as it should be but nothing was shown on the front-end except the usual post stuff. Thesis was showing that this was the custom &#8220;book&#8221; page.

After rechecking my custom templates where correctly defined inside the theme I started Googling for the answer. And Google failed me (now you have the reason for this post!). I searched the Thesis user forums to no avail. I started questioning my life choices and cursing profoundly. How can this be so difficult? I started reading the Thesis documentation. Clicking page after page in the hope to find the link I was missing. It was going to be something stupid. Something small. I started to think that not a lot of people make custom post-types and also used Thesis.

In the end it was something stupid. Something simpel. Something stupid, embarrassing simple.  
Something written in the white spaces of the Thesis docs.

## Solution

### What?

Thesis uses skins** **for the layout and uses **boxes ****to define what is shown on each page**. When you create a new post-type which has new post-meta-fields you have to create a new box for it. This new box has to be added to the template page, in the skin-editor, that Thesis has made for your new shiny posttype.

### How?

Creating a new box is explained in the manual, but it lacks a few things.

#### Step 0: Create the file

Thesis expects your box file to be at a certain place. This is all good and dandy when you can upload the file on a server with the box manager UI &#8211; which doesn&#8217;t really work on my local machine (FTP and stuff) and it shouldn&#8217;t really given that I am developing on this machine and as such the files would change constantly. It is possible to move/copy files to another location when installing a plugin &#8211; allowing you to include the box file with yours and move it when the user enables it.

##### TL:DR;

  1. Create a folder &#8220;boxes&#8221; inside the &#8220;thesis&#8221; folder in the &#8220;wp-content&#8221; root directory.
  2. As a best practice, create a folder with your plugin name
  3. Create a &#8220;box.php&#8221; file → research needed if this file actually has to be named this.

#### Step 1: What do I have to put into this file?

Your box definition! 😉 Just kidding. This is actually written somewhat clearly in the manual, but they skip a few essentials.

At the top of this file you need to include some comments. Without them &#8211; or faulty ones &#8211; Thesis didn&#8217;t see my box or didn&#8217;t activate it nor did it display nicely in the box manager. Thesis needs these comments to process and see your box:

<pre>/*
Name: Book box
Author: Veerle Deschepper
Version: 0.1
Description: Just displays the custom fields of a book
Class: ddbooks_book_details
*/</pre>

After that you define the class: (ddbooks is the name of my plugin)

<pre>class ddbooks_book_details extends thesis_box {</pre>

The contents of the class is outlined in the manual. Basically you define a few properties of your box with some variables:

<pre>public $type = 'rotator';
public $head = false;</pre>

Provide a name for it:

<pre>protected function translate() {
   $this-&gt;title = __('bookdetails', 'ddbooks');
}</pre>

Add those nice-custom HTML options that you can define inside the template editor with this function:

<pre>protected function html_options() {</pre>

And render the html in the html function:

<pre>public function html($args = array()) {</pre>

You&#8217;ll have to take a look at some of the default boxes to create yours. If you want your user to be able to define each field of your custom post type, you will have to create a (child) box for each field. Then you&#8217;ll have to create a (parent) box, simular to the default _post-box_ that depends on all your childboxes.  
This is an extremely flexible system &#8211; but can create a massive overhead. The decision to go with 1 box or several should not be taken lightly and solely depends on the level of freedom needed. I&#8217;ve created one box which contained all my little fields.  
→ research needed if there is somewhere a tool for this.

#### Step 2: Installation of your box

If you haven&#8217;t done this, you need to activate your box in the Thesis box manager.

#### Step 3: Use your box

If all is well, no typos, you should be able to see your box inside the Thesis skin manager. Choose the box in the dropdown and add it to the page. Save. Profit.

→ this is a work in progress. Somethings will definably change when I learn new things. At this time my plugin isn&#8217;t finished.