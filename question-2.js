const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4db762b0d2b040f9947af390e34f5ec0";

const resultsContainer = document.querySelector(".results");

async function apiCall() {
  const response = await fetch(url);

  const results = await response.json();

  const games = results.results;

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name + games[i].rating + games[i].tags.length);

    resultsContainer.innerHTML += `<div class="result">${
      games[i].name + games[i].rating + games[i].tags.length
    }</div>`;

    if (i === 8) {
      break;
    }
  }
}

apiCall();
