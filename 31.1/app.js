const API_URL = "https://swapi.dev/api/people/";
const data = [];

async function getData() {
  let response = await fetch(API_URL);
  let json = await response.json();
  let characters = json.results;

  for (let i = 0; i < 10; i++) {
    let character = characters[i];
    let planetResponse = await fetch(character.homeworld);
    let planetJson = await planetResponse.json();

    let characterData = {
      name: character.name,
      height: character.height,
      hair_color: character.hair_color,
      planet: {
        name: planetJson.name,
        population: planetJson.population
      }
    };

    data.push(characterData);
  }

  console.log(data);
}

getData();

const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);

for (let i = 0; i < data.length; i++) {
    const character = data[i];
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = character.name;
    row.appendChild(nameCell);
    const heightCell = document.createElement("td");
    heightCell.textContent = character.height;
    row.appendChild(heightCell);
    const hairCell = document.createElement("td");
    hairCell.textContent = character.hair_color;
    row.appendChild(hairCell);
    const planetCell = document.createElement("td");
    planetCell.textContent = character.planet.name;
    row.appendChild(planetCell);
    const populationCell = document.createElement("td");

    populationCell.textContent = character.planet.population;
    row.appendChild(populationCell);
    tbody.appendChild(row);
    document.body.appendChild(table);
    }


