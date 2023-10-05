// Assignment 1 | COMP1073 Client-Side JavaScript

// Get the paragraph element with the id 'studentId'
var studentIdParagraph = document.getElementById("studentId");

// The student ID
var studentId = "200530585, Seahee Hong";

// Set the content of the 'studentId' paragraph to display the student Id and name
studentIdParagraph.textContent = `Student ID/Name: ${studentId}`;

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1Button = document.getElementById("noun1");
var verbButton = document.getElementById("verb");
var adjectiveButton = document.getElementById("adjective");
var noun2Button = document.getElementById("noun2");
var settingButton = document.getElementById("setting");
// Add reset button
var resetButton = document.getElementById("reset");

// Constants for p tag to display query selectors
var choosenNoun1 = document.getElementById("choosenNoun1");
var choosenVerb = document.getElementById("choosenVerb");
var choosenAdjective = document.getElementById("choosenAdjective");
var choosenNoun2 = document.getElementById("choosenNoun2");
var choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
var playbackButton = document.getElementById("playback");
var randomButton = document.getElementById("random");
var storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
var nouns1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "The teacher",
  "The elephant",
  "The Cat",
];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
var nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];

// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  choosenNoun1.textContent = nouns1[noun1Count];
  noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
  choosenVerb.textContent = verbs[verbCount];
  verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
  choosenAdjective.textContent = adjectives[adjectiveCount];
  adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
  choosenNoun2.textContent = nouns2[noun2Count];
  noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
  choosenSetting.textContent = settings[settingCount];
  settingCount = (settingCount + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
  var story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
  storyParagraph.textContent = story;
}

// grabbing a random element from arrays, concatenate and display
function random_on_click() {
  var randomStory = `${randomFromArray(nouns1)} ${randomFromArray(
    verbs
  )} ${randomFromArray(adjectives)} ${randomFromArray(
    nouns2
  )} ${randomFromArray(settings)}`;
  storyParagraph.textContent = randomStory;
}

// Function to get a random element from an array
function randomFromArray(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to reset the story
function reset_on_click() {
  // Clear the content of all the chosen elements
  choosenNoun1.textContent = "";
  choosenVerb.textContent = "";
  choosenAdjective.textContent = "";
  choosenNoun2.textContent = "";
  choosenSetting.textContent = "";

  // Clear the story paragraph
  storyParagraph.textContent = "";
}

// Event listener for the reset button
resetButton.addEventListener("click", reset_on_click);

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
