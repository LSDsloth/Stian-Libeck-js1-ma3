const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4db762b0d2b040f9947af390e34f5ec0";

const resultsContainer = document.querySelector(".results");

async function apiCall() {
  const response = await fetch(url);

  const results = await response.json();

  const games = results.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name + games[i].rating + games[i].tags.length);

    resultsContainer.innerHTML += `<div class="result"> 
    <div class="gameName"> <h3>Name:</h3> <p>${games[i].name}</p> </div>
    <div class="gameRating"> <h3>Rating:</h3> <p>${games[i].rating}</p> </div>
    <div class="gameTags"> <h3>Tags:</h3> <p>${games[i].tags.length}</p> </div>
    </div>`;

    if (i === 7) {
      break;
    }
  }
}

apiCall();
