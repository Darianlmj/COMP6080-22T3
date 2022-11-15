# Prac Exam

## 1. The Exam

### 1.1 Overview

You are to build a landing page and a game page

### 1.2 Landing Page

* The overall document/page should have a `margin` of `0px`. (0.5)
* All screens shall have a sidebar bar that is:
  * `100px` wide. (0.5)
  * On the right hand side of the page. (0.5)
  * Has a height that spans the full height of the viewport. (0.5)
  * Has a background colour of `#eee`. (0.5)
  * Contains a logo (any random image from the internet) that:
  	* At the top of the sidebar, centre aligned. (0.5)
  * Contains 4 lines of text that are links: (1)
    * Home (linking to `/home`)
    * 24 (linking to `/make_24`)
* The content in the landing page (i.e. everything excluding the sidebar should be positioned in the middle of the page.)
* The only content in the landing page should be a heading that says `Welcome to the landing page!` (0.5)

### 1.3 Game Page

* This page exists on route `/make_24` and contains the sidebar and footer from `1.2`. (0.5)
* This main page consists of a primary box that is:
  * `100px` in height (0.5)
  * `100%` in width (0.5)
  * Vertically spaced equally between the top and bottom of main page (2)
* Contains a row of 4 equal sized spaced sections within this box (1)
* Users are able to type into these sections (0.5)
* These sections should only take in numbers (0.5)
* After typing in 4 numbers in the sections, the user should be able to press the "Enter" key on their keyboard and if the numbers sum up to 24, the user should be alerted with a message saying "You win!" (2)
* If the numbers do not sum up to 24, the user should be alerted with a message saying "You lose!" (2)