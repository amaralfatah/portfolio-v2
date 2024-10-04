// Fetch articles from API
async function getArticles() {
    const loadingSpinner = document.getElementById("loading-spinner");
    const articlesContainer = document.getElementById("articles-container");

    try {
        // Tampilkan spinner dan sembunyikan container artikel
        loadingSpinner.classList.remove("hidden");
        articlesContainer.classList.add("hidden");

        const response = await fetch(
            "https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all"
        );
        const articles = await response.json();

        // Sembunyikan spinner dan tampilkan artikel
        loadingSpinner.classList.add("hidden");
        articlesContainer.classList.remove("hidden");

        displayArticles(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        // Sembunyikan spinner jika terjadi error
        loadingSpinner.classList.add("hidden");
        // Tampilkan pesan error ke user (opsional)
        articlesContainer.innerHTML = `<p class="text-white">Failed to load articles. Please try again later.</p>`;
        articlesContainer.classList.remove("hidden");
    }
}

// Display articles in the DOM
function displayArticles(articles) {
    const articlesContainer = document.getElementById("articles-container");
    articles.forEach((article) => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <a href="/read/${article.slug}/${article.id}" class="flex w-full bg-[#1e1e1f] border-[#383838] rounded-xl text-left text-white p-5 md:py-7 md:px-8 cursor-pointer hover:bg-[#282828] items-center">
                <div class="w-full pr-4">
                    <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                        <div class="h-[1px] w-20 bg-[#90E0EF] md:w-5 mr-2"></div> ${article.date}
                    </div>
                    <h1 class="text-sm md:text-md text-[#90E0EF] font-bold mb-2 paraf">${article.title}</h1>
                    <div class="text-sm hidden md:block paraf">${article.desc}</div>
                </div>
                <div>
                    <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                        <img src="${article.image}" class="rounded-lg md:rounded-xl" alt="">
                    </div>
                </div>
            </a>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Fetch and display articles on page load
window.onload = getArticles;
