# FlashCards

## Abstract
This is the first solo project of Mod 2 at the [Turing School of Software and Design](https://turing.io/). I, [Boone Epstein](https://github.com/deadbelly), received partially finished files for a program that runs flashcards in the CLI, complete with prototype data pertaining to JavaScript. The goal for this project was to complete the app using Test Driven Development. I tried to make robust tests that helped me build out the features, and also provide a solid blueprint to any future devs that look at these files. The app functions well and I have to say it's been very helpful for me memorizing the details of different array prototype methods. 

## Features
The app will give you multiple choice questions in CLI and accepts inputs in the form of numbers. After you've made your selection it will inform you of whether or not your choice was correct and move on to the next question. After you've completed all of the cards you will receive a percentage score. If you did not answer all the questions correctly you will be encouraged to start a new round, this time only answering the questions you got wrong the first time.

The app currently uses a prototype data set with 30 questions about JavaScript. It can, however, work for any subject if you format your data correctly. I recommend looking at `Card.js` if you plan to add your own data.

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

## Installation
To run this app start by cloning down this repo. Then navigate to the folder and run `npm install` to make sure you have any dependencies you need. This app runs in the CLI using `Node.js` so having that installed is a must. 

Once everything is installed you can run the app with the command `node index.js`. You can exit the app at any time by killing the script with `ctl+C`. 

---
