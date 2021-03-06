# Gloucestershire Battlefields

![Image of responsive site](docs/responsiveimage.png)

## The live site of the Gloucesteshire Battlefields Society can be accessed [here.](https://james-vt.github.io/MS2_Gloucestershire_Battlefields/)

## Table of Contents

* ### [Project Overview](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#project-overview)

* ### [UX](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#ux)
    * [User Stories](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#user-stories)

* ### [Design Choices](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#design-choices)
    * ### [The Five Planes of User Experience Development](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#the-five-planes-of-user-experience-development)
    * ### [Colour Scheme](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#the-five-planes-of-user-experience-development)

* ### [Deployment](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#deployment)

* ### [Features](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#features)

* ### [Testing](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#testing)

* ### [Technologies Used](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#technologies-used)

* ### [External Libraries](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#external-libraries)

* ### [APIs](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#apis)
    * ### [Google Maps API](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#google-maps-api)
    * ### [EmailJS](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#emailjs)

* ### [Credits](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#credits)

* ### [Image credits](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#image-credits)

* ### [Tutorials](https://github.com/James-VT/MS2_Gloucestershire_Battlefields#tutorials)

This project uses a separate file for the various tests completed as part of its development:

[Access the testing file here](https://github.com/James-VT/MS2_Gloucestershire_Battlefields/blob/master/testing.md)

# Project overview

This website serves as the main page of a small, charitable organisation that looks after, researches and provides information on sites of historical military significance in Gloucestershire and neighbouring areas. The aims of the site owners are to relay information on battles and battlefields, provide information to site visitors about which sites they can visit and how to do so, and to generate revenue through donations. A visitor to the site will want to learn information about the county's military history and its significant sites, which ones they can visit and how to do so, and will potentially want to donate after a good experience.

---

# UX
The primary aim of the Gloucestershire Battlefields website is information - for the site owners, it is to relay information while for the site users, it is to obtain information. A user will want to see the range of battlefields across the county and learn about them - possibly with a view to visiting one or more of them - and will want to select which ones to learn information about. The site owners will want to provide a positive experience for the users in order to raise awareness of the sites they look after, and potentially to raise revenue via donations.

## User stories
### A visitor to the site will want to:
1. Learn the history of a specific battlefield chosen by interacting with the map.
2. Change the clicked battlefield on the interactive map or from the button menu in order to see information about it feed back on the page, while removing the information from the previous selection.
3. Contact the organisation behind the website, and receive confirmation that their correspondence has been sent.
4. Test their knowledge with a quiz they can initiate on the subject that feeds back their score.
5. Review their answers to the quiz via feedback, to see where they went wrong if applicable.

### A site owner will want to:
6. Responsively relay information about the battlefields the charity promotes according to user input.
7. Visually display the locations of battlefields on the interactive map according to user input.
8. Provide the opportunity for visitors to contact the charity via an interactive feedback form that validates user input in case of empty required fields.
9. Present visitors with a fun and working interactive quiz that feeds back their results.
10. Relay to visitors the purpose and nature of the charity.

# Design choices

Here I will explain my choices.

## The Five Planes of User Experience Development
As part of the planning for this project, I have run through the stages of User Experience Design, as proposed by Jesse James Garrett.

### The Strategy plane
Beginning with the strategy plane, considered who might use this website and why; both site visitors and site owners. The goal of the site owners is to raise awareness of battlefields and sites of historical military significance within Gloucestershire and the surrounding area, and potentially to generate some revenue via donations. Visitors come to the site because they want to learn about specific battlefields and parts of history.

### The Scope Plane
The project's scope is chiefly threefold: the primary objective is the exchange of information about Gloucestershire's battlefields between site owner and site user. The second is the raising of revenue for the charity via donations, but this is achieved off the back of the first objective. The third is the relaying of information about the charity themselves.

### The Structure Plane
My wireframes can be found below. These have been constructed with the idea that mobile design should come first, and that the main aim from the point of the view of the site owner is the relaying of information in an interactive fashion that presents the basic facts, a narrative of the events, and the location on a map.

### The Skeleton Plane
The site's information is structured in such a way as to make the map primary; it is the first thing a user will see upon loading the page, and the cascading information resulting from clicking a button or location of a battle appears underneath the map itself. The difference at smaller screen sizes may be (depending on the precise size) the changing of the layout of the buttons. 

### The Surface Plane
The colours chosen have been partnered based on suggestions from Coolors (credit below). Russian green has a nice military olive look to it, and from there I accepted or refused suggestions of pairings.

## Colour scheme
![Image of coolors selections](docs/coolorspalette.png)
* Russian Green #70997B
* Glossy Grape #B594B6
* Jet #2F2F2F
* Peach Puff #F1D6B8

I have made these choices based on the recommendations of Coolors' system after seaching for colours to match Russian Green, a colour I decided on early on. Although pink may seem a weird colour for a website on military history, the territory of the British Empire was coloured pink on maps so I decided to stick with that particular suggestion. Jet's a sleek choice that pairs well with pretty much anything, even moreso than black for not being as dark. Finally, Peach Puff seemed an appropriate colour to use for a site about the history of a county in which a great many houses are built from the local limestone, which is this colour.

As well as the colours pictured above, Venetian Red is used in two places - the tab icon and the error messages on the contact form. These uses would've red anyway, but due to the colour's association with British military history, I decided to go with that red in particular.

### Wireframes

The wireframes developed for this project can be found [here](docs/milestone2wireframes.pdf). They were built using Balsamiq (credit in Technologies section).

# Deployment
 Here I'll explain how to deploy/how I deployed the website to GitHub and how to run it locally. 

### Deploying a static project to GitHub pages:
 1. You'll need a GitHub account, if you don't already have one. Head to their site https://github.com and you'll see the sign-up links straightaway on the home page. Google Chrome is the recommended browser for GitHub.
 2. Once you're signed-up, this'll be your landing page.
 3. Click on the user icon in the top right corner of the screen. This opens a dropdown menu. Click "Your repositories."
 4. You'll then see a list of your repositories.
 5. In the list of repositories, click the repository you want - in this case, Gloucestershire Battlefields.
 6. Then, from the bar along the top (not the nav bar - lower, under the repo name) click Settings.
 7. On the Settings page, click "Pages" from the left-hand menu.
 8. In the Pages options, before you've deployed, your "Branch" under "Source" will have a default value of none. Click this, then set it to Main or Master depending on the version you're using. Mine, having been already deployed, says Master and yours will too when deployed, but ignore that discrepancy for now.
 9. Click Save.
 10. The page will refresh, and you'll see it change to say "Your site is ready to be deployed at "https://username.github.io/repository-name/"
 11. Be aware this deployed site will take a few minutes to deploy, usually about ten. Be patient and don't click while it's building as that can slow it down.
 12. Click the link to make sure it works after a suitable wait. Et voila, you've deployed the site!

### Forking the repository for your own use
This creates a copy of the repository for editing or viewing without affecting my (original) version. If you want to do it, do this:
1. You'll need a GitHub account. Go to https://github.com to make one.
2. Locate the repository (this one). At the top right of the page, beneath my pink and white avatar, you'll see the Fork button. Click it.
3. This should add a version for you to use in your own repository. Have fun with it!

### Cloning the repository
Another way of getting your own local version to work on is to clone the repository. Below are the steps.
1. You'll need a GitHub account. Go to https://github.com to make one.
2. Locate the repository (this one).
3. Click Code, the button just to the left of the green GitPod button.
4. Click HTTPS to make sure you're in it, then copy the link you see there.
6. Head into GitPod or your IDE of choice, and open up the terminal.
5. Switch your working directory to the location you want to the cloned directory created.
6. Then you want to type "git clone https://github.com/James-VT/MS2_Gloucestershire_Battlefields", the same URL as before.
7. Hit Enter. You're good to go!

---

# Features

The features of this website are documented, along with their development, in the separate testing file for this project where I explain which user stories are fulfilled by their design and ensure they work.

[Access the testing file here](https://github.com/James-VT/MS2_Gloucestershire_Battlefields/blob/master/testing.md)

---

# Testing

Testing for the features of this website, the bugs, and the validators used are all in the testing.md file mentioned above.

[Access the testing file here](https://github.com/James-VT/MS2_Gloucestershire_Battlefields/blob/master/testing.md)

---

# Future features

## Progress bar

A feature I'd like to add to this project in the future is a progress for the quiz, to show a user how far along they are. As things stand, a user already knows there are ten questions via the score counter, and is able to see how many correct answers they have chosen, but a progress bar would provide an additional level of feedback for them.

# Technologies used

* Languages:
    * [HTML5](https://en.wikipedia.org/wiki/HTML5) was used for the content and structure of the site.
    * [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) was used for the styling of the site.
    * [JavaScript](https://en.wikipedia.org/wiki/JavaScript) was used for the interactivity of the site.

* Balsamiq
    * Balsamiq was used to create the wireframes for this project. [Balsamiq](https://balsamiq.com/)

* Git
    * Git was used for version control and saving work in the repository, using the GitPod extension in Google Chrome to commit to GitHub. [Git](https://git-scm.com/)

* Google Chrome
    * This project was created in the Google Chrome browser, and as such Chrome was used as the default testing browser. [Chrome](https://www.google.com/intl/en_uk/chrome/)

* Google Fonts
    * The fonts for the site were imported from Google Fonts. [Google Fonts](https://fonts.google.com/)

* FontAwesome
    * The icons for social media links were taken from FontAwesome. [FontAwesome](https://fontawesome.com/)

* Coolors
    * The colour palette for this site was chosen using Coolors. [Coolors](https://coolors.co/)

* GeoHack
    * GeoHack is a service I've used via Wikipedia to source the coordinates for the battlefields in order to place the map markers correctly. [GeoHack](https://geohack.toolforge.org/)

* JSHint
    * JSHint is a free JavaScript testing programme, used to look for errors in the sites various JS files. [JSHint](https://jshint.com/)

* Favicon
    * Favicon was used to create the icon for this site. [favicon](https://favicon.io/favicon-generator/)

* Autoprefixer CSS online

    * Autoprefixer was used to run my CSS through and get any various vendor prefixes (so, webkit prefixes) that I needed to make my pages consistent across browsers. [Autoprefixer](https://autoprefixer.github.io/)

* Am I Responsive?
    * Am I Responsive is used to create the header image for the README but exists to prove the responsiveness of a site. [Am I Responsive?](http://ami.responsivedesign.is/#)

---

## External libraries

* JQuery
    * JQuery is used in this project via CDN to provide the option of simplifying JavaScript code. [JQuery](https://jquery.com/download/#using-jquery-with-a-cdn)
* Why JQuery?
    * The benefit of JQuery is that it allows a developer to use JavaScript functionality without the verbosity of writing pure JavaScript. I primarily used it in sections where there wasn't much to write in the first place such as the small amount of responsiveness in index.html. It is used in other places as well - notably for the buttons in the map page - partly because the simple nature of the tasks behind the scenes allowed for it, and partly for the simple reason that I wanted to spread my wings and get to grips with it.

* Bootstrap
    * Bootstrap 5 was used for some HTML component templates and CSS styling. [Bootstrap 5.](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* Why Bootstrap?
    * Bootstrap provides out-of-the-box features which make certain commonly-found features of web design quick and easy. Primarily, I used it to build my headers and footers, and the carousel on the home page. One of the main benefits of Bootstrap is that it provides a lot of easy responsiveness for different screen sizes, and allows for the positioning of elements with this in mind.

## APIs

### Google Maps API
* In this project, I used the Google Maps API to provide the interactivity on the maps.html page. In so doing, the site owners are able to relay to users the locations of the battlefields they look after.
    * To use this yourself, create an account at https://console.developers.google.com. Build the key you want from the options available (we just want the Maps JavaScript API), and set up billing information. Make sure you restrict the key to Maps JavaScript API, and set it to only accept calls from your site, and your test site if applicable (for us, it is applicable). Malicious use is possible, and you don't want to get stung with the bill.

### EmailJS
* This project uses EmailJS to handle the transfer of information a user has entered into the contact form to the site owners.
    * To use EmailJS, head to https://www.emailjs.com/ and sign up. You can create a new template, or edit your default one. Head to Integration and click browser for the method I've used. There you'll find the code snippet you need, complete with your user key ready to go. You'll also find your access token further down. You'll also want to grab your service code and the template code while you're there.

# Credits

## Wikipedia
Wikipedia was used extensively for this project. Links to specific pages from which information or text was taken are below.

### Tewkesbury battle information
The information about the Battle of Tewkesbury used for this site was taken from the battle's [wikipedia page.](https://en.wikipedia.org/wiki/Battle_of_Tewkesbury)

### Battle of Crickley Hill information
The text for the battle of Crickley Hill came partly from [historyextra.com.](https://www.historyextra.com/period/roman/what-earliest-evidence-battle-britain-first-conflict-ever/) A little more was added by me.

### Beverston Castle information
The text for Beverston Castle came partly from the castle's [wikipedia page.](https://en.wikipedia.org/wiki/Beverston_Castle)

### Battle of Stow on the Wold information
The information about the Battle of Stow on the Wold used for this site was taken from the battle's [Wikipedia page.](https://en.wikipedia.org/wiki/Battle_of_Stow-on-the-Wold)

### Battle of Deorham information
The information about the Battle of Deorham used for this site was taken from the battle's [Wikipedia page.](https://en.wikipedia.org/wiki/Battle_of_Deorham)

### Battle of Nibley Green information
The information about the Battle of Nibley Green used for this site was taken from the battle's [Wikipedia page.](https://en.wikipedia.org/wiki/Battle_of_Nibley_Green)

# Image credits
* beverstonetoday.jpg is taken from Wikimedia commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Beverston_castle.jpg) The original uploader was Anlace at English Wikipedia., CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons

* henryiii.jpg is taken from Wikimedia commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:HenryIII.jpg) Attribution: AnonymousUnknown author, Public domain, via Wikimedia Commons

* musketvolley.jpg is taken from Wikimedia commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Musket_volley_by_Sealed_Knot.JPG) Attribution: Charlesdrakew, Public domain, via Wikimedia Commons

* ghent.jpg is taken from Wikimedia commons, and is open-source. The original is a period manuscript. [Link](https://commons.wikimedia.org/wiki/File:MS_Ghent_-_Battle_of_Tewkesbury.jpg) Attribution: Tewkesbury1.jpg: Unknownderivative work: Jappalang, Public domain, via Wikimedia Commons

* sanctuary.jpg is taken from Wikimedia commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Richard_Burchett_-_Sanctuary_(1867)_contrasted.jpg) Attribtion: Guildhall Art Gallery, Public domain, via Wikimedia Commons

* reenactment.jpg is taken from Wikimedia commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Battle_of_Tewkesbury_reenactment_-_fighting_while_arrows_fly.jpg) Attribution: Antony Stanley, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons

* crickleytoday.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:View_from_Barrow_Wake_towards_Crickley_Hill_-_geograph.org.uk_-_986696.jpg) Attribution: Sarah Charlesworth??/??View from Barrow Wake towards Crickley Hill

* flintaxe.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Feuersteinaxt.jpg) Attribution: Dr. Henning Kr??mer, Geesthacht  - de:User:Hinnerk, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons

* stoneage.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Stone-age-painting.jpg) Attribution: Gugatchitchinadze, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons

* 512pxkingalfred is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:King_Alfred_the_Great_statue,_Wantage,_Oxfordshire.jpg) Attribution: Philip Jelley Philipjelley, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons

* 512pxrepincossacks.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Repin_Cossacks-v.jpg) Attribution: Ilya Repin (1844-1930), Public domain, via Wikimedia Commons

* 512pxkinghenryv.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:King_Henry_V_of_England_at_the_Battle_of_Agincourt,_1415.jpg) Attribution: Unknown authorUnknown author, Public domain, via Wikimedia Commons

* 512pxmontgomerycastle.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Montgomery_Castle_and_view_of_the_castle_tower_ruins_Montgomery,_Powys.jpg) Attribution: Rosser1954, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons

* foolshead.jpg is an image displayed at the American Museum & Gardens. [Link](https://artuk.org/discover/artworks/fools-head-world-map-271600). It is believed to have been created c.1590. Its artist is unknown.

* assets/images/indeximages/horseman.jpg is taken from Wikimedia Commons, and is open-source. [Link](https://commons.wikimedia.org/wiki/File:Portrait_of_a_Horseman_MET_DP169220.jpg)  Attribution: James Seymour, CC0, via Wikimedia Commons.

### Tutorials

[Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k&t=379s) from the channel Web Dev Simplified was extremely helpful for the creation of the site's quiz. I have edited the code heavily while building the quiz in quiz.js but I begun by taking some ideas from that tutorial and building from there. While the addition of a score counter and image are my own work - with the exception of the use of an array to populate the table - the basic code for the quiz itself must be credited to this tutorial.

[StackOverflow](https://stackoverflow.com/questions/47999155/how-to-create-html-table-rows-from-multiple-arrays-of-data-in-javascript). This thread helped massively with the population of the results table from the arrays.

[JavaScript Form Validation](https://www.youtube.com/watch?v=In0nB0ABaUk) from the channel Web Dev Simplified was a video I consulted to get started with form validation. The video is actually about validating a log-in form, but many of the principles are the same so I started with that and worked from there. As such, some lines of code or variable names may look similar.

Eamonn Smyth, a fellow student at Code Institute, wrote a tutorial for students looking to use Google Maps in their JavaScript projects. I have been unable to reach him for permission to link it here, but much credit goes to his excellent guide for getting me started on using the Google Maps API.