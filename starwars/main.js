import { people } from "../data/people.js";
import { removeChildren, getLastNumber } from "../scripts/uti.js";

const gallery = document.querySelector(".gallery");

const maleButton = document.querySelector("#maleButton");
const femaleButton = document.querySelector("#femaleButton");
const otherButton = document.querySelector("#otherButton");

const otherCharacters = people.filter(person => {
  if (
    person.gender === "hermaphrodite" ||
    person.gender === "n/a" ||
    person.gender === "none"
  ) {
    return person;
  }
});

maleButton.addEventListener("click", event => {
  populateDOM(people.filter(person => person.gender === "male"));
});

femaleButton.addEventListener("click", event => {
  populateDOM(people.filter(person => person.gender === "female"));
});

otherButton.addEventListener("click", event => {
  populateDOM(otherCharacters);
});

function populateDOM(characters) {
  removeChildren(gallery);
  characters.forEach(person => {
    // need to extract the number from the person.url property
    let charNum = getLastNumber(person.url);
    let anchorWrap = document.createElement("a");
    anchorWrap.href = "#";

    let imageItem = document.createElement("img");
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

    imageItem.addEventListener("error", event => {
      //console.log(`${event.type}: Loading image\n`)
      //console.log(event);
      imageItem.hidden = true;
      //imageItem.src = '../images/uvu-logo.jpeg'
    });

    imageItem.addEventListener("click", event => {
      
    });
    anchorWrap.appendChild(imageItem); //you need to add something to the DOM once you create it in JS
    gallery.appendChild(anchorWrap);
  });
}
