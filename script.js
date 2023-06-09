const apiKey = "5206b0091f914fada1003edb4613060f";

async function fetchPopularGame() {
  try {
    const currentDate = new Date().toISOString().split("T")[0];
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${currentDate},${currentDate}&ordering=-rating&page_size=1`);
    const data = await response.json();

    const game = data.results[0];

    const gameBox = document.querySelector(".bs");

    const gameTitle = game.name;
    const gameImage = game.background_image;
    const gameRating = (game.rating * 2).toFixed(1);
    const gameTags = game.tags.map(tag => tag.name).join(', ');

    const gameBoxContent = `
      <div class="bsx">
        <a href="#" title="${gameTitle}">
          <div class="limit" id="game-image-container1">
            <div class="ply"></div>
            <img src="${gameImage}" class="ts-post-image wp-post-image attachment-medium size-medium game-image" loading="lazy" alt="">
          </div>
          <div class="bigor">
            <div class="tt">
              ${gameTitle}
            </div>
            <div class="adds">
              <div class="epxs">${gameTags}</div>
              <div class="rt">
                <div class="rating">
                  <div class="rating-prc">
                    <div class="rtp">
                      <div class="rtb"><span style="width:${gameRating * 10}%"></span></div>
                    </div>
                  </div>
                  <div class="numscore">${gameRating}</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;

    gameBox.innerHTML = gameBoxContent;

    const gameImageContainer = document.getElementById("game-image-container1");
    const gameImageElement = gameImageContainer.querySelector("img");
    gameImageElement.style.objectFit = "cover";
    gameImageElement.style.objectPosition = "center";
  } catch (error) {
    console.log(error);
  }
}

async function fetchYesterdayPopularGame() {
  try {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const formattedDate = today.toISOString().split("T")[0];
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&dates=${formattedDate},${formattedDate}&ordering=-rating&page_size=1`);
    const data = await response.json();

    const game = data.results[0];

    const gameBox = document.querySelector(".bs:nth-child(2)");

    const gameTitle = game.name;
    const gameImage = game.background_image;
    const gameRating = (game.rating * 2).toFixed(1);
    const gameTags = game.tags.map(tag => tag.name).join(', ');

    const gameBoxContent = `
      <div class="bsx">
        <a href="#" title="${gameTitle}">
          <div class="limit" id="game-image-container2">
            <div class="ply"></div>
            <img src="${gameImage}" class="ts-post-image wp-post-image attachment-medium size-medium game-image" loading="lazy" alt="">
          </div>
          <div class="bigor">
            <div class="tt">
              ${gameTitle}
            </div>
            <div class="adds">
              <div class="epxs">${gameTags}</div>
              <div class="rt">
                <div class="rating">
                  <div class="rating-prc">
                    <div class="rtp">
                      <div class="rtb"><span style="width:${gameRating * 10}%"></span></div>
                    </div>
                  </div>
                  <div class="numscore">${gameRating}</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;

    gameBox.innerHTML = gameBoxContent;

    const gameImageContainer = document.getElementById("game-image-container2");
    const gameImageElement = gameImageContainer.querySelector("img");
    gameImageElement.style.objectFit = "cover";
    gameImageElement.style.objectPosition = "center";
  } catch (error) {
    console.log(error);
  }
}

fetchPopularGame();
fetchYesterdayPopularGame();
