  // Navbar active link
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".nav-link");
  
  navLinks.forEach((link) => {
      const linkUrl = link.href;
  
      if (currentUrl.includes(linkUrl)) {
          link.classList.add("active");
      }
  });
  
  // CONNECT TO BACKEND SERVER
  const API_URL = "http://localhost:3000";
  
  async function getTopNews() {
      try {
          const response = await fetch(`${API_URL}/index.html`);
          const news = await response.json();
          const beritaHarian = document.getElementById("main_leftcol");
          news.forEach((berita) => {
          const newBerita = document.createElement("div");
          newBerita.innerHTML = 
              <div className="main-news" >
                  <h2>BeritaKita.com / ${berita.category}</h2>
                  <div class="news-title">
                      <h1>${berita.news_title}</h1>
                  </div>
                  <div class="news-date"><strong>BeritaKita.com </strong>- ${berita.news_date}</div>
                  <img src="${berita.news_image}" alt="image" />
                  <div id="caption">
                      <p>${berita.news_caption}</p>
                  </div>
                  <p>
                      <strong>BeritaKita.com</strong> - ${berita.news_content}
                  </p>
              </div>;
  
              newBerita.classList.add("main-news");
              beritaHarian.appendChild(newBerita);
          });
      } catch (error) {
          console.log("404");
    }
  }
  
  getTopNews();
  
  
  
  