# Testing

In this file I have tested the features, the user stories, and the site validity.

# Feature testing

Below I will demonstrate the development, function and purpose of the site's features. I wll also explain my methods for testing whether or not these all worked. Then, for each feature I will

## Intro text w/ optional extra text

As an early bit of JQuery for my project, I spotted an opporunity to give the user the option not to have to have all of the intro text on the screen. On smaller devices, it's quite a lot of information and, attention spans being what they are, it might put people off the site. As a result, the bare essentials are there with an option to click for the rest of the intro. A first time user who is really interested would probably click this, while a returning user might have already read it and so not need to, and instead move on to the links below.

User story goal achieved by this feature | How was this achieved?
--- | ---
10 Relay to visitors the purpose and nature of the charity. | The into text provides a first impression of the organisation behind the website, informing a visitor of what the site is for and the things they can do on it.

![Image of index.html intro text with click to expand option](docs/testing/userstorytesting/userstoryindex.png)

---

## Quiz

The quiz presents an opportunity for the visitor to test their knowledge, and for the site owner to foster interest in the sites they look after. By clicking the button to begin the quiz and then submitting their answers via further button clicks, the user can interact with the quiz and follow their progress via the score counter.

### Quiz data testing

To ensure the correct data was being collected throughout the development of the quiz, I added a number of console.logs to its various functions and arrays. In the screenshot below, you can see how this built up the information towards the end of the quiz. We have the questions, the correct answers and the submitted answers, in that order.

![Image of the console logs of the quiz](docs/testing/featuretesting/quiztesting.png)

### Quiz feedback testing

The final outcome of all this is the results table, shown to the player at the end of the quiz. Not only does it display the answers chosen vs. the correct ones, but the message and picture presented to the user are different depending on their score.

![Image of a 5/10 score](docs/testing/featuretesting/resultstest.png)

Here we can see the player achieved a score of 5/10, and received the message "Oh dear! Retreat!" and a picture of the Zaparozhian cossacks as a result. This is the functionality working as it should.

User story goal achieved by this feature | How was this achieved?
--- | ---
4 Test their knowledge with a quiz they can initiate on the subject that feeds back their score. | The quiz is initiated by a user interacting with it by clicking the "begin" button. The score counter, seen in the pictures, relays to the user their score.
5 Review their answers to the quiz via feedback, to see where they went wrong if applicable. | The user is presented with a list of questions at the end, their answers, and the correct answers. In this way they can review their answers and see if/where they went wrong.
9 Present visitors with a fun and working interactive quiz that feeds back their results. | The quiz is made available to visitors from the very first page of the site. Extensive testing was done on the quiz to ensure it works and is interactive. Results are fed back to the visitor upon completion of the quiz.

---
## Contact form

The contact form allows a user to interact with the site owner. They can make inquiries on various subjects and get confirmation when they've submitted their message and details that these have sent successfully. They will also receive notification if they have left required fields unfilled or entered an invalid email address, in which case the email will not send. Open successful submission, an email is sent to the site owner via emailJS.

## Contact form validation testing

Here we have an example of the contact form during development:

![Image of proto-version of the contact form](docs/testing/featuretesting/contacttest.png)

Using JavaScript, I have added validations to ensure a name and an email address are entered and if they are not entered, I have added funationality that will prevent the form from being submitted. The other fields are less essential, thus do not require validation. Both the Full name and Email address fields have placeholder text to serve as examples. To test whether the validation had worked, I clicked submit before anything was entered. If the validation of these two fields and the arresting of the default function have worked properly, we should see error messages appear above the Submit button.

![Image of successful prevention of form submission due to unfilled fields in contact form](docs/testing/featuretesting/contactfailedtest.png)

As you can see from the image above, it worked like a charm. The error messages appear as expected, and the form is unable to submit while error messages are present - in fact the prevention of the default submit feature of the submit button hinges on the fact error messages are present. So what happens when we fulfill the demands of the messages and then click submit?

![Image of successful form submission](docs/testing/featuretesting/contactsuccessfultest.png)

Result! Here we can see the Code Institute formdump success screen, which confirms submission of the form along with the precise data sent. Success!

## Contact form error message removal testing

In the above test, we made sure that the form would not send if the required fields were not filled in and that error messages would display to the user, telling them what they had done wrong. But what if the user later corrected their mistake and submitted the form with the required fields filled in this time? Or what if they correctly filled in a section they had got wrong the first time, but still had a mistake in the other required field? We needed a way of removing the messages in order to keep the feedback of errors up to date. In order to do this, I added splice methods to remove the error messages from the array when corrections had been made. To test this worked, I used a console.log. Below you can see how I made sure it worked:

![Image of the form and the console logs that proved my array item removal method worked](docs/testing/featuretesting/contactarraytest.png)

We can see three entries in the console: firstly, one for each required field not filled in, and then a third for neither having been filled in. Filling in both and clicking submit gives us a successful form submission, same as the last image in the section above. Success!

Addendum: I later added a requirement for the message field as well. Here's the evidence for it working below:

![Image of the successful building of an array including the message box](docs/testing/featuretesting/contactmessagetest.png)

## Contact form confirmation testing

Finally, I added email.js to the project to send me an email confirming the contact form was working, and communicating with me as a site owner. The user will see a message confirming their correspondence has been sent successfully, provided the required fields are filled in.

![Image of successful confirmation message](docs/testing/featuretesting/contactconfirmationtest.png)

Above, you can see what the user sees when their message has sent successfully. Note that the form does not refresh - this is because the form was refreshing before the message was sending, preventing it from functioning properly. This means the information remains on the form, but this is no bad thing as it allows a user to review what they have submitted.

![Image of email of sent via email.js from contact form](docs/testing/featuretesting/contactemail.png)

Above, you can see that we were successful as our contact form has generated an email sent via email.js.

User story goal achieved by this feature | How was this achieved?
--- | ---
3 Contact the organisation behind the website, and receive confirmation that their correspondence has been sent. | The contact form provides the facility to contact the Gloucestershire Battlefields Society. In the event of successful form submission, an alert reassures the user that their form has been sent.
8 Provide the opportunity for visitors to contact the charity via an interactive feedback form that validates user input in case of empty required fields.| The addition of a contact form allows the site owner to facilitate contact from visitors. If required fields are left unfilled when the user clicks "submit," the form submission fails and the user is presented with error messages explaining what they've missed.

---

## Interactive map

Our interactive map was added to the site using the Google Maps JavaScript API It allows a user to learn about the battlefields the site owners look after in two ways: they can either click the map markers, or select a site via the buttons. Either way, the same information appears in the info fields depending on which site was selected.

## Linked script and map button testing

As you can see in the picture, the first function in my map - in fact, in the entire website - that I tested was whether the buttons registered a click properly. This was partly to test the buttons themselves, but also to test whether I had correctly linked my JavaScript file to my index.html file. As such, I wrote the code below in battlefields.js:

```
// The below is to test whether this file in linked properly to the index.html file
// and its button elements

let button = document.getElementById("tewkesbury-button");

function buttonTest() {
    console.log("button clicked");
}

button.addEventListener('click', buttonTest);
```

As you can see from the image below of the map page during development, the test was successful.

![Image of successful button test](docs/testing/firstbuttontest.png)

Below you can see another image demonstrating the success of the map buttons, taken much further along in the page's development.

![Image of the results of a button selection](docs/testing/featuretesting/mapbuttontesting.png)

## Map marker selection testing

In the below picture, we can see the development of the page much further along. I have made the selection a different way this time - by using the map markers. Upon clicking a marker, the map pans to centre the selected site and the information appears in the box below the buttons. As we can see, this was successful.

![Image of selection made via map marker](docs/testing/featuretesting/maptesting.png)







User story goal achieved by this feature | How was this achieved?
--- | ---
1 Learn the history of a specific battlefield chosen by interacting with the map. | Selecting a map marker will pan the map to centre the chosen site, and the information will appear in the box below.
2 Change the clicked battlefield on the interactive map or from the button menu in order to see information about it feed back on the page, while removing the information from the previous selection. | Selecting a new battlefield with either the markers or the buttons will clear the previous selection entirely, and replace it with information from the new selection.
6 Responsively relay information about the battlefields the charity promotes according to user input. | The site owner is able to provide the user with the desired information as requested by a button click or a map marker click.
7 Visually display the locations of battlefields on the interactive map according to user input. | Selecting either a marker visible on the map or a button from the menu will cause the map to pan to that location, allowing the site owner to relay the location of a site to the user.

---

# Testing against user stories

Above, we reviewed each page and its features, and explored which user stories each satisfied. For certainty's sake I have done the same here in summary, but backwards. I have tested each user story against the various features of the site to ensure that each of them are met in some way, and provided evidence.

## Visitor user stories:

User Story Number | A first time user will want to: | How was this achieved? | Evidence of user story having been met
------ | ------ | ------ | ------
1 | Learn the history of a specific battlefield chosen by interacting with the map. | Clicking the map buttons or functions will feed information onto the page relevant to the selection. | [Map with battle selected via map marker](docs/testing/featuretesting/maptesting.png)
2 | Change the clicked battlefield on the interactive map or from the button menu in order to see information about it feed back on the page, while removing the information from the previous selection. | Selecting a different battlefield will remove the previous selection's info, and feed the new selection's info onto the page. | [Map with battle selected via button](docs/testing/featuretesting/mapbuttontesting.png)
3 | Contact the organisation behind the website, and receive confirmation that their correspondence has been sent. | The contact form facilitates contact between visitors and site owners, and feeds back to confirm successful receipt of correspondence. | [Confirmation of successful contact](docs/testing/featuretesting/contactconfirmationtest.png)
4 | Test their knowledge with a quiz they can initiate on the subject that feeds back their score. | The quiz is accessed via links in the nav bar and the index page image menu. The quiz itself feeds back user score throughout. | [Quiz question](docs/testing/userstorytesting/userstoryquizexample.png), [quiz answer feedback](docs/testing/userstorytesting/userstoryanswerfeedback.png)
5 | Review their answers to the quiz via feedback, to see where they went wrong if applicable. | A table of results and correct answers is presented to the user at the end of the quiz. | [Results table](docs/testing/userstorytesting/userstoryresults.png)

------
## Site owner user stories:

User Story Number | A site owner will want to: | How was this achieved? | Evidence
------ | ------ | ------ | ------
6 | Responsively relay information about the battlefields the charity promotes according to user input. | Map page reveals info depending on user selection. | [Info of a battle once a marker or button has been selected](docs/testing/featuretesting/mapinfotesting.png)
7 | Visually display the locations of battlefields on the interactive map according to user input. | Clicking one of the buttons with the battlefields' name on it or one of the map markers will pan the map to that location. | [Map with battle selected via map marker](docs/testing/featuretesting/maptesting.png), [Map with battle selected via button](docs/testing/featuretesting/mapbuttontesting.png)
8 | Provide the opportunity for visitors to contact the charity via an interactive feedback form that validates user input in case of empty required fields. | Contact form allows site owners to receive communication from visitors. It refuses to send if required fields are not filled and if the email address field is filled with something that isn't an email address. Accordingly, it presents the user with messages to explain this should they click submit with required fields unfilled. | [Contact form with error messages](docs/testing/featuretesting/contactfailedtest.png)
9 | Present visitors with a fun and working interactive quiz that feeds back their results. | The quiz presents a user with results at the end, keeps score and presents them with "correct" or "wrong" for each answer given, depending. | [Wrong answer and score](docs/testing/userstorytesting/userstoryanswerfeedback.png), [results](docs/testing/userstorytesting/userstoryresults.png)
10 | Relay to visitors the purpose and nature of the charity. | Information is presented to the user upon landing on the home page, with an option to read more upon interacting with the page. | [Home page intro with optional extra info](docs/testing/userstorytesting/userstoryindex.png)

---

## Bugs

### Race condition bug

A bug I faced when working with the Google Maps API was due to what I later learned was a "race condition." When loading the live page or the port 8000 test page, the map would show on some page loads but not others. When the map failed to load, I noted the following two errors in the console:

```
Uncaught ReferenceError: google is not defined
    at myMap (battlefields.js:40)
    at battlefields.js:53
```

```
Uncaught (in promise) hf {message: "initMap is not a function", name: "InvalidValueError", stack: "Error\n    at new hf (https://maps.googleapis.com/m…yZ-4&callback=initMap&libraries=&v=weekly:160:155"}
```

Thinking at first that this was to do with the restrictions on the API key, I first tried changing those, but this did not work. I then consulted fellow CI students on Slack, which turned up an interesting result. Below is my original HTML code for the Google Maps API:

```
<script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      async
    ></script>
```

As identified by fellow student Sean Young, the attribute of "async" at the end of the script was causing the issue. The reason for this is that async is short for asynchronous loading. This attribute tells the browser to begin loading the next line of code as soon as this one has started loading, instead of waiting for it to finish. This means the script can sometimes load satisfactorily, and sometimes not. It comes down to a race between whether the script containing the API key loads first, or the script that constructs the map loads first. If the former happens, the map loads and works just fine. If not, then the problem I've described is what you're faced with.

#### Problem solved. The solution: remove the async attribute from the HTML.

### Score incrementation bug

While trying to get the score to increment properly on the quiz, I came across an issue whereby the score counter, presented as 0/6 upon the game's initialisation, would merely change to "1" on clicking the first correct answer, "2" on the second, etc.

![Image of score counter pre-click](docs/testing/bugs/scorecounterbugone.png)

![Image of score counter post-click](docs/testing/bugs/scorecounterbugtwo.png)

Upon re-running the code after coming back from eating dinner, it worked perfectly.

![Image of score counter working as intended](docs/testing/bugs/scorecounterbugthree.png)

#### Problem solved. The solution: do nothing and come back later.

### Hover animation delay/glitch

After adding a mouseenter/mouseleave event handler to my image links in index.html, I noticed that if I moved the mouse too quickly - really not very quickly at all - the animation broke. It would cease to respond to the mouse entering or leaving the element, and if any response came at all it could take up to five seconds after leaving the element to realise the mouse had even entered it. The code looked like this:

```
$(document).ready(function() {
    $(".index-menu-image").mouseenter(function() {
        $(this).animate({opacity: "0.2"});
    $(".index-menu-image").mouseleave(function() {
        $(this).animate({opacity: "1"});
    })
});
```
As you can see, this block of code uses mouseenter and mouseleave. To try something else, I wrote the same bit of code again but this time using a hover event handler instead of mouseenter and mouseleave:

```
$(document).ready(function() {
    $(".index-menu-image").hover(function() {
        $(this).animate({opacity: "0.2"});
    },
    function() {
        $(this).animate({opacity: "1"})
    })
});
```
This allowed me to roll everything into one function, rather than two. This works much better, allowing the animation to react to much quicker movements. If it needs to catch-up, it can now do so without getting broken.

#### Problem solved. The solution: use hover instead of mouseenter/mouseleave.

## Unfixed bugs

### Expression/assignation

An ongoing issue is with this piece of code within the quiz.js file:

```
if (selectedButton.dataset = correct) {
        questionElement.innerText = "Correct!";
        incrementScore();
    } else if (selectedButton.dataset != correct) {
        questionElement.innerText = "Wrong!";
    }
```

This was flagged by JSHint (see: Testing JavaScript with JSHint) as an warning because the first line functions as both conditional expression and assignment. However, attempts to fix this using == or ===, or to put the word correct in quotations, cause the function to fail. As a result, it remains. With more time, I would seek other options to fix this but the functionality itself works, I have allowed it to stand for now.

---

## Testing pages with Lighthouse

https://developers.google.com/web/tools/lighthouse

* Lighthouse is a validator built into Google Chrome, used for testing the performance, accessibility, best practice and more of a web page. Specifically I have used it to make sure all my pages are above the 80% mark in performance.

* To use Lighthouse, you can download Google Chrome web browser and use it from there or use one of the alternative options in the link above. Personally, I used Chrome. Right click on any web page, choose the bottom "inspect" option and click it. Then, in the dev tools that open up, the top bar will have a symbol of two little arrows. Select this, and you'll see Lighthouse at the bottom. Open it up from there, and click generate report. Voila.

### Lighthouse test for index.html

![Image of Lighthouse test for index.html](docs/testing/lighthousetesting/lighthouseindex.png)

### Lighthouse test for quiz.html

![Image of Lighthouse test for quiz.html](docs/testing/lighthousetesting/lighthousequiz.png)

### Lighthouse test for map.html

![Image of Lighthouse test for map.html](docs/testing/lighthousetesting/lighthousemap.png)

The Lighthouse test for map.html flagged an error to the console, hence the slightly lower "best practices" score than I would've liked. A member of the Code Institute team (Eventyret_mentor) informed me that this is currently an unavoidable problem with Chrome to do with favicon and maps, he believes.

### Lighthouse test for contactus.html

![Image of Lighthouse test for contactus.html](docs/testing/lighthousetesting/lighthousecontact.png)

### Lighthouse test for 404.html

![Image of Lighthouse test for 404.html](docs/testing/lighthousetesting/lighthouse404.png)

---

## Testing JavaScript with JSHint.

The JavaScript files used in this project were tested using JSHint (link in README, technologies used section).

### index.js testing

![Image of JSHint results for index.js](docs/testing/jshinttesting/indexjshint.png)

No issues were detected in Index.js.

### quiz.js testing

![Image of JSHint results for quiz.js](docs/testing/jshinttesting/quizjslinter.png)

A single issue was flagged with quiz.js: that of the combined conditional expression and assignment in the chooseAnswer function. This is addressed in a comment above that particular section in the file itself. The code will not work without doing both, so has been kept as it is (see also: unfixed bugs).

### battlefields.js testing

![Image of JSHint results for battlefields.js](docs/testing/jshinttesting/maplinter.png)

One warning remains on this one, about a function declared within a loop possibly leading to confusing semantics. With the names things have been given, confusion should be avoided, and this is a known approach to using Google Maps API. The same goes for the undefined variables - due to the use of the API here necessetates this.

### contactus.js testing

![Image of JSHint results for contactus.js](docs/testing/jshinttesting/contactlinter.png)

Three warnings and two instances of an undefinded variable remain in this file. JSHint appears to read "errorMessage.splice[i, 1]" as an expression rather thasn as a function. I have not tried to change these, as the file's functionality works fine with them there. Similarly, the undefined variable is emailjs which is used throughout with the API.

## Jigsaw
https://jigsaw.w3.org/css-validator/

Jigsaw is used to validate CSS. Below are the results of style.css in this project.

![Image of Jigsaw results](docs/testing/jigsawcss.png)

## NuHTML
https://validator.w3.org/nu/

NuHTML is used to check HTML for best practices. I have used it to validate the HTML of my site.

### Index.html results in NuHTML

![Image of index results in nuHTML](docs/testing/nuhtml/nuhtmlindex.png)

Index.html passed through without a hitch.

### map.html results in NuHTML

![Image of map results in NuHTML](docs/testing/nuhtml/nuhtmlmap.png)

For our map page, NuHTML flagged problems with the empty headings in the area that is filled with the map information upon clicking a marker or a button. As these fields are filled user interaction and this is explained in the text of the page, we can move on.

### contactus.html results in NuHTML

![Image of contact form results in NuHTML](docs/testing/nuhtml/nuhtmlcontact.png)

This time we have a warning that the type attribute isn't necessary. It may not be necessary for functionality, but I consider it helpful for explaining to a co-developer what it does and what it links to, so I see more reason to keep it than to get rid.

### quiz.html results in NuHTML

![Image of quiz results in NuHTML](docs/testing/nuhtml/nuhtmlquiz.png)

We have no problems on the quiz.html page.

### 404.html results in NuHTML

![Image of 404 results in NuHTML](docs/testing/nuhtml/nuhtml404.png)

Figured I'd run even the 404 page through because why not?