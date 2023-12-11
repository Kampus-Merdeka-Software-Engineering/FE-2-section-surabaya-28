// CONNECT TO BACKEND SERVER
const news_category = "beritaharian";
const API_URL = "https://be-2-section-surabaya-28-production.up.railway.app";

async function getNews() {
  try {
    const response = await fetch(`${API_URL}/news`);
    const news = await response.json();
    const beritaHarian = document.getElementById("main_leftcol");

    // Clear existing content
    beritaHarian.innerHTML = "";

    news.forEach((berita) => {
      const newBerita = document.createElement("div");

      // Limit the body content to 100 characters
      const limitedContent =
        berita.news_content.length > 100
          ? `${berita.news_content.substring(0, 100)}...`
          : berita.news_content;

      newBerita.innerHTML = `
            <div id="top-news">
                <img src="${berita.news_image}" alt="image" />
                <div class="news-date">${berita.news_date}</div>
                <h1>${berita.news_title}</h1>
                <p>
                    ${limitedContent}
                    <a href="readnews_page.html?id=${berita.news_id}" onclick="showNewsDetail(${berita.news_id});">Baca Selengkapnya</a>
                </p>
            </div>
        `;

      newBerita.classList.add("leftcol_subcol");
      beritaHarian.appendChild(newBerita);
    });
  } catch (error) {
    console.log("Error fetching news:", error);
  }
}

// Call the function to get news when the page loads
document.addEventListener("DOMContentLoaded", getNews);
