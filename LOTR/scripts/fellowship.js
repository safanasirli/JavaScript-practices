console.log("LINKED");

// Dramatis Personae
const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took",
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

// Our Setting
const lands = ["The-Shire", "Rivendell", "Mordor"];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const section = document.createElement("section");
  section.setAttribute("id", "middle-earth");
  // 2. append the section to the body of the DOM.
  document.body.append(section);
  // 3. use a for loop to iterate over the lands array that does the following:
  for (i = 0; i < lands.length; i++) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    const article = document.createElement("article");
    //   3b. gives each land article an `id` tag of the corresponding land name
    article.setAttribute("id", lands[i]);
    //   3c. includes an h1 with the name of the land inside each land article
    const h1 = document.createElement("h1");
    h1.innerText = lands[i];
    article.appendChild(h1);
    //   3d. appends each land to the middle-earth section
    section.appendChild(article);
  }
};
//console.log(makeMiddleEarth());
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  console.log("makeHobbits");

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  const ul = document.createElement("ul");
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  for (i = 0; i < hobbits.length; i++) {
    const li = document.createElement("li");
    li.innerText = hobbits[i];
    ul.appendChild(li);
    // 3. also, give each hobbit (`li`) a class of "hobbit"
    li.setAttribute("class", "hobbit");
    // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
  }
  document.getElementById("The-Shire").appendChild(ul);
};
//console.log(makeHobbits());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  console.log("keepItSecretKeepItSafe");

  // 1. create an empty div with an id of 'the-ring'
  const div = document.createElement("div");
  div.setAttribute("id", "the-ring");
  // 2. add the ring as a child of Frodo
  document.getElementsByClassName("hobbit")[0].appendChild(div);
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
};
//console.log(keepItSecretKeepItSafe());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  console.log("makeBaddies");

  // 1. display an unordered list of baddies in Mordor
  const ul = document.createElement("ul");
  for (i = 0; i < baddies.length; i++) {
    const li = document.createElement("li");
    li.innerText = baddies[i];
    // 2. give each of the baddies a class of "baddy"
    li.setAttribute("class", "baddy");
    ul.appendChild(li);
    // 3. remember to append the ul to Mordor
  }
  document.getElementById("Mordor").appendChild(ul);
};
//console.log(makeBaddies());

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  console.log("makeBuddies");

  // 1. create an aside tag and append it to middle-earth below mordor
  const aside = document.createElement("aside");
  document.body.children[1].insertBefore(
    aside,
    document.getElementById("Mordor").nextSibling
  );
  // 2. display an unordered list of buddies in the aside
  const ul = document.createElement("ul");
  for (i = 0; i < buddies.length; i++) {
    const li = document.createElement("li");
    li.innerText = buddies[i];
    // 3. give each of the buddies a class of "buddy"
    li.setAttribute("class", "buddy");
    // 4. don't forget to append them to the aside
    ul.appendChild(li);
    aside.appendChild(ul);
  }
};
//console.log(makeBuddies());
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  console.log("leaveTheShire");
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  document.getElementById("Rivendell").appendChild(document.getElementById("The-Shire").childNodes[1]);
};
//console.log(leaveTheShire());
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  console.log("beautifulStranger");
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  document.getElementsByTagName('aside')[0].childNodes[0].childNodes[3].innerText = 'Aragorn';
};
//console.log(beautifulStranger())
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  console.log("forgeTheFellowShip");

  // 1. create a new div with an id 'the-fellowship'
  const div = document.createElement('div');
  div.setAttribute('id', 'the-fellowship')
  // 2. add an h1 with the text 'The Fellowship' to this new div
  const h1 = document.createElement('h1');
  h1.innerText = 'The Fellowship';
  div.appendChild(h1)
  // 3. append the fellowship to middle-earth
  document.getElementById('middle-earth').appendChild(div)
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  div.appendChild(document.getElementById('Rivendell').childNodes[1]);
  div.appendChild(document.getElementsByTagName('aside')[0].childNodes[0]);
};
//console.log(forgeTheFellowShip())

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  console.log("theBalrog");

  // 1. change the 'Gandalf' text to 'Gandalf the White'
  document.getElementsByClassName('buddy')[0].innerText = 'Gandalf the White'
  // 2. add a class "the-white" to this element
  document.getElementsByClassName('buddy')[0].setAttribute('class', 'the-white')
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};
//console.log(theBalrog())
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  console.log("hornOfGondor");

  // 1. create a pop-up alert that the horn of gondor has been blown
  window.alert("Horn of Gondor has been blown")

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  document.getElementsByClassName('buddy')[3].style.textDecoration = 'line-through';
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  document.getElementsByClassName('baddy')[2].innerText = ""
};
//console.log(hornOfGondor())

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor
  document.getElementById('Mordor').appendChild(document.getElementsByClassName('hobbit')[0]);
  document.getElementById('Mordor').appendChild(document.getElementsByClassName('hobbit')[1]);
  const div = document.createElement('div');
  div.setAttribute('id', 'mount-doom');
  document.getElementById('Mordor').appendChild(div)
};
//console.log(itsDangerousToGoAlone())
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  console.log("weWantsIt");

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const div = document.createElement('div');
  div.setAttribute('id', 'gollum');
  document.getElementById('Mordor').appendChild(div)
  // 2. Move the ring from Frodo and give it to Gollum
  div.appendChild(document.getElementById('the-ring'))
  // 3. Move Gollum into Mount Doom
  document.getElementById('mount-doom').appendChild(div)

};
//console.log(weWantsIt());
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  console.log("thereAndBackAgain");

  // 1. remove Gollum and the Ring from the DOM
  document.getElementById('gollum').remove()
  // 2. remove all the baddies from the DOM
  document.getElementById('Mordor').childNodes[1].remove();
  // 3. Move all the hobbits back to the shire
  document.getElementById('The-Shire').appendChild(document.getElementById('the-fellowship').childNodes[1])
  document.getElementById('The-Shire').childNodes[1].appendChild(document.getElementsByClassName('hobbit')[2])
  document.getElementById('The-Shire').childNodes[1].appendChild(document.getElementsByClassName('hobbit')[3])
};
//console.log(thereAndBackAgain())
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

window.addEventListener("DOMContentLoaded", () => {
  console.log("eve");
  document
    .querySelector("#button-1")
    .addEventListener("click", makeMiddleEarth);
  document.querySelector("#button-2").addEventListener("click", makeHobbits);
  document
    .querySelector("#button-3")
    .addEventListener("click", keepItSecretKeepItSafe);
  document.querySelector("#button-4").addEventListener("click", makeBaddies);
  document.querySelector("#button-5").addEventListener("click", makeBuddies);
  document.querySelector("#button-6").addEventListener("click", leaveTheShire);
  document
    .querySelector("#button-7")
    .addEventListener("click", beautifulStranger);
  document
    .querySelector("#button-8")
    .addEventListener("click", forgeTheFellowShip);
  document.querySelector("#button-9").addEventListener("click", theBalrog);
  document.querySelector("#button-10").addEventListener("click", hornOfGondor);
  document
    .querySelector("#button-11")
    .addEventListener("click", itsDangerousToGoAlone);
  document.querySelector("#button-12").addEventListener("click", weWantsIt);
  document
    .querySelector("#button-13")
    .addEventListener("click", thereAndBackAgain);
});
