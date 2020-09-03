# BDO Class App

## Explanation

This app is a collection of currently available Black Desert Online classes and their weapon costs in in-game currency. Numbers are refreshed frequently with the changing game market. Site was designed to be visually stimulating and fun as well as provide the basic information on each class' weapon costs at the current time.

## Link to Live Site

https://yang-rich.github.io/BDO_CLASS_APP/

## Technologies Used

The app uses code from html, css, javascript, and AJAX to call for weapon prices using the Black Desert Online market API found at (https://omegapepega.com/na/${id}/0). The \${id} modification is there to allow for changing sites to be called as the API stores information on different websites that rely on an ID input from users.

The approach I took for this app was to first structure everything in my html and get a basic structure to help me visualize my plan. From there I used AJAX to bring in market data from the API for each of the class' weapon costs to be displayed in their modals. I then went on to try to write as much of the code to function dynamically which involved coming up with a way to tie everything on each modal to the class card that was clicked. This led to creating an on-click that pulled the ID of the object clicked, and then naming everything in my programming accordingly to tie it all together neatly. Nearly all logic in this app functions off of these IDs of the class cards. Further information that was not available to get through my API, I constructed a library myself to hold and reference for my own code, also using class card names as the keys. This included things like images, item codes for the API, as well as youtube links. This allowed me to write only 1 modal for 19 classes that would continuously strip and fill with the information relevant to the class card clicked.

Once the functionality of the app was working as intended, I began to play with styling and incorporating as many interesting effects as I could think of without overdoing it. This started with going grayscale on my class cards and adding a coloring effect to my mouse-over events just to give the site a litte more life. From there it just grew and I added various other things from resizing icons and giving animations for the modal, to tying up loose ends by making sure the site was compatible with all platforms through the use of media queries.

## Unsolved Problems

Some unsolved problems include how to create more sophisticated modal animations as seen on some example online as well as creating 2 divs layered directly on top of each other to use for a "loading screen" type experience where div1 would be showing until the modal finishes loading from the API, and then switch to div2 to reveal the data from the API call.

## What I Learned

CSS is some rough stuff but this project let me really get into it and get a better grasp on how to style things especially taking into account the two media queries I incorporated for phones and tablets. In my attempt to better understand AJAX and API calls I also came across other ways to write API calling functions as well which helped to break down all the steps that were happening.
