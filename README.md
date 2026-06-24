# Web Development Project 2 - *Country Capitals*

Submitted by: **Joel Echeverri**

This web app: **Quiz yourself for knowledge in the capitals in America**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:


- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
- [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on a card flips it over, showing the back with corresponding information 
  - [X] Clicking on a flipped card again flips it back, showing the front
- [X] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [X] Cards contain images in addition to or in place of text
  - [X] Some or all cards have images in place of or in addition to text
- [X] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='.\country-capitals\src\assets\Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Snipping Tools

## Notes

I found it challenging to add an image in the flashcards as for some reason they were being mirrored. 

## License

    Copyright 2026 Joel Echeverri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


# Web Development Project 3 - Country Capitals of America

**Submitted by: Joel Echeverri**

## Description

This web app is an interactive flashcard application designed to help users learn and master the capitals of all 35 countries in the Americas. It features a beautiful 3D flipping card interface with country flags, difficulty-based coloring, guess validation, streaks, and mastered card tracking.

**Time spent:** 6 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button navigates to the next card in sequence
  - A previous/back button returns to the previous card
  - Both buttons are visually disabled (grayed out) at the beginning and end of the list with no wrap-around

## Optional / Stretch Features

The following **optional** features are implemented:

- [x] **Users can use a shuffle button to randomize the order of the cards**
  - Cards remain in the original sequence unless the shuffle button is clicked
  - Clicking shuffle creates a new random order

- [x] **A user’s answer may be counted as correct even when it is slightly different from the target answer**
  - Ignores case sensitivity, punctuation, and extra spaces
  - Accepts partial matches (e.g. "Washington" or "Washington DC" for "Washington, D.C.")

- [x] **A counter displays the user’s current and longest streak of correct responses**
  - Current streak increments on correct answers and resets on incorrect ones
  - Longest streak tracks the highest score achieved

- [x] **A user can mark a card that they have mastered and have it removed from the pool of displayed cards**
  - "Mark as Mastered" button removes the card from active study
  - Progress is shown with a mastered counter

## Additional Features

- Beautiful 3D flip animation with country flags
- Difficulty-based color coding (Easy = Blue, Medium = Orange, Hard = Red)
- Glassmorphism / semi-transparent card design
- Earth-themed background focused on the Americas
- Responsive design that works on mobile and desktop
- Keyboard support (Enter key to submit guess)
- Auto-flip on correct answer
- Real-time progress counter

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='.\country-capitals\src\assets\Walkthrough2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Snipping Tools

## Notes

- The lenient answer checker makes the app more user-friendly while still being educational.
- Mastered cards are removed from the current session. Refreshing the page resets everything.
- The project heavily utilizes React `useState`, event handlers (`onClick`, `onChange`), and component composition.

## License

Copyright 2026 Joel Echeverri

Licensed under the Apache License, Version 2.0 (the "License");  
you may not use this file except in compliance with the License.  
You may obtain a copy of the License at  

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software  
distributed under the License is distributed on an "AS IS" BASIS,  
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
See the License for the specific language governing permissions and  
limitations under the License.