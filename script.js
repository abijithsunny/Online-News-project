const apiKey = "608e4dc9ba654f388b43e24d28353d19";
const apiUrl = "https://newsapi.org/v2/everything?q=";

const cardContainer = document.querySelector(".cards-container");
const searchInput = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-button")

async function fetchNews(query) {
  try {
    const response = await fetch(`${apiUrl}${query}&apiKey=${apiKey}`);
    const data = await response.json();

    console.log(data);


  

    // clear old results
    cardContainer.innerHTML = "";

    data.articles.forEach(article => {
      // create card
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img class="card-image" src="${article.urlToImage || "https://via.placeholder.com/300"}" alt="news image">
        <h3 class="card-title">${article.title || "No title available"}</h3>
        <p class="card-date">${article.publishedAt || "No time avilable"}</p>
        <p class="card-description">${article.description || "No description available"}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;

      cardContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

searchBtn.addEventListener("click", () => {
fetchNews(searchInput.value)
});

  window.addEventListener("DOMContentLoaded", () => {
  fetchNews("everything");  
});

