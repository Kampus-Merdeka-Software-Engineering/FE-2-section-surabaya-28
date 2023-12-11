const API_URL = "https://be-2-section-surabaya-28-production.up.railway.app";

            async function fetchNewsDetail() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const newsId = urlParams.get('id');
                const response = await fetch(`${API_URL}/news/${newsId}`);
                const newsDetail = await response.json();

                document.getElementById("detail_title").innerText = newsDetail.news_title;
                document.getElementById("detail_title").style.paddingRight = '10px';
                document.getElementById("detail_date").innerText = `BeritaKita.com - ${newsDetail.news_date}`;
                document.getElementById("detail_image").src = newsDetail.news_image;
                document.getElementById("detail_image").style.height = '600px';
                document.getElementById("detail_image").style.width = '97%';
                document.getElementById("caption").innerHTML = `<p>${newsDetail.news_caption}</p>`;
                document.getElementById("detail_content").innerText = newsDetail.news_content;
                document.getElementById("detail_content").style.paddingRight = '30px';
            } catch (error) {
                console.log("Error fetching news detail:", error);
            }
        }

        // Call the fetchNewsDetail function when the page loads
        window.onload = fetchNewsDetail;