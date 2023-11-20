import { alienPlanets } from "./alienPlanets.js";

const alienContainer = document.querySelector("#alien-container");

function displayAlienPalnets() {
  for (let planet of alienPlanets) {
    let alienCard = document.createElement("div");
    alienCard.className = "card";
    let planetName = document.createElement("p");
    planetName.textContent = planet.name;
    let planetEmoji = document.createElement("p");
    planetEmoji.textContent = planet.emoji;
    alienCard.appendChild(planetName);
    alienCard.appendChild(planetEmoji);
    alienContainer.appendChild(alienCard);
  }
}

displayAlienPalnets();
