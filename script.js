const apiKey = "5206b0091f914fada1003edb4613060f";

fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Process the game data and generate the HTML content
    populateGames(data.results);
  })
  .catch(error => {
    console.error("Error fetching game data:", error);
  });

//generate the HTML content for each game and append it to the appropriate placeholders in the index.html file
function populateGames(games) {
  const gameList = document.getElementById("game-list");

  games.forEach(game => {
    const listItem = document.createElement("li");
    const gameTitle = document.createElement("h2");
    const gameImage = document.createElement("img");
    const gameGenres = document.createElement("span");
    const gameRating = document.createElement("div");

    gameTitle.innerHTML = `<a href="${game.url}" rel="noopener noreferrer">${game.name}</a>`;
    gameImage.src = game.background_image;
    gameGenres.innerHTML = `<b>Genres</b>: ${game.genres.map(genre => `<a href="${genre.url}" rel="tag">${genre.name}</a>`).join(", ")}`;
    gameRating.innerHTML = `
      <div class="rating-prc">
        <div class="rtp">
          <div class="rtb"><span style="width:${game.rating * 10}%"></span></div>
        </div>
      </div>
      <div class="numscore">${game.rating}</div>
    `;

    listItem.appendChild(gameTitle);
    listItem.appendChild(gameImage);
    listItem.appendChild(gameGenres);
    listItem.appendChild(gameRating);
    gameList.appendChild(listItem);
  });
}
