// This function loads pokemon data from the Pokemon API
function fetchsimpsonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID

  const url = `https://thesimpsonsquoteapi.glitch.me/quotes
  `;
  axios
    .get(url)
    .then(function (response) {
      return response.data[0]; // used response.data[0] to get the first quote object
    })

    .then(function (simpson) {
      console.log("data decoded from JSON:", simpson);

      //   Build a block of HTML
      const simpsonHtml = `
      <p><strong>${simpson.character}</strong></p>
      <img src="${simpson.image}" alt="${simpson.character}" />
      <p>${simpson.quote}</p>
      `;
      document.querySelector(".content").innerHTML = simpsonHtml;
    })
    .catch(function (error) {
      console.log("Encountered error fetching Simpsons data:", error);
    });
}

fetchsimpsonJSON();
