  // CONNECT TO BACKEND SERVER
  const news_category = 'beritaharian';
  const API_URL = "http://localhost:3000";
  
  async function getNews() {
      try {
          const response = await fetch(`${API_URL}/api/data?category=${news_category}`);
          const news = await response.json();
          const beritaHarian = document.getElementById("main_leftcol");
          news.forEach((berita) => {
          const newBerita = document.createElement("div");
          newBerita.innerHTML = 
            <div id="top-news">
                <img src="images/berita harian/images13.jpg" alt="image" />
                <div class="news-date">${berita.news_date}</div>
                <h1>${berita.news_title}</h1>
                <p>
                    ${berita.news_content}
                    <a href="readnews_page.html">Baca Selengkapnya</a>   
                </p>
            </div>;

            newBerita.classList.add("leftcol_subcol");
            beritaHarian.appendChild(newBerita);
          });
      } catch (error) {
          console.log("404");
    }
  }
  getNews();

  async function getOtherNews() {
    try {
        const response = await fetch(`${API_URL}/api/data?category=${news_category}`);
        const news = await response.json();
        const beritaHarian = document.getElementById("main_leftcol");
        news.forEach((berita) => {
        const newBerita = document.createElement("div");
        newBerita.innerHTML = 
            <div id="image_section">
                <a href="#"><img src='${berita.news_image}' alt="image" /></a>
                <a href="#"><img src='${berita.news_image}' alt="image" /></a>
                <a href="#"><img src='${berita.news_image}' alt="image" /></a>
                <a href="#"><img src='${berita.news_image}' alt="image" /></a>
                <a href="#"><img src='${berita.news_image}' alt="image" /></a>
                <a href="#"><img src='${berita.news_image}' alt="image" /></a>
            </div>;

            newBerita.classList.add("othernews_section");
            beritaHarian.appendChild(newBerita);
        });
    } catch (error) {
        console.log("404");
  }
}

getOtherNews();

async function getRegulerNews() {
    try {
        const response = await fetch(`${API_URL}/api/data?category=${news_category}`);
        const news = await response.json();
        const beritaHarian = document.getElementById("main_leftcol");
        news.forEach((berita) => {
        const newBerita = document.createElement("div");
        newBerita.innerHTML = 
            <div class="news-box">
                <img src="${berita.news_image}" alt="image" />
                <div class="news-date">${berita.news_date}</div>
                <span class="news-title">${berita.news_title}</span>
                <p> 
                    ${berita.news_content}
                    <a href="readnews_page.html">Baca Selengkapnya</a>                        
                </p>
            </div>;

            newBerita.classList.add("reguler_section");
            beritaHarian.appendChild(newBerita);
        });
    } catch (error) {
        console.log("404");
  }
}

getRegulerNews();

async function getTodayNews() {
    try {
        const response = await fetch(`${API_URL}/api/data?category=${news_category}`);
        const news = await response.json();
        const beritaHarian = document.getElementById("main_leftcol");
        news.forEach((berita) => {
        const newBerita = document.createElement("div");
        newBerita.innerHTML = 
            <div id="today_section">
                <h2>Berita Hari Ini</h2>
                <div id="today_images">
                    <a href="readnews_page.html"><img src="${berita.news_image}" alt="image" /></a>
                    <a href="readnews_page.html"><img src="${berita.news_image}g" alt="image" /></a>
                    <a href="readnews_page.html"><img src="${berita.news_image}" alt="image" /></a>
                </div>
            </div>;

            newBerita.classList.add("leftcol_subcol");
            beritaHarian.appendChild(newBerita);
        });
    } catch (error) {
        console.log("404");
  }
}

getTodayNews();

async function getBottomNews() {
    try {
        const response = await fetch(`${API_URL}/api/data?category=${news_category}`);
        const news = await response.json();
        const beritaHarian = document.getElementById("main_leftcol");
        news.forEach((berita) => {
        const newBerita = document.createElement("div");
        newBerita.innerHTML = 
            <div id="bottom-news">
                <h2>Rekomendasi</h2>
                <img src="${berita.news_image" alt="image" />
                <div class="news-date">${berita.news_date}</div>
                <h1>${berita.news_title}</h1>
                <p>
                    ${berita.news_content}
                    <a href="readnews_page.html">Baca Selengkapnya</a>   
                </p>
            </div>

            newBerita.classList.add("leftcol_subcol");
            beritaHarian.appendChild(newBerita);
        });
    } catch (error) {
        console.log("404");
  }
}

getBottomNews();


  
  
  