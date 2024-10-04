// Fetch articles from API
async function getArticles() {
    try {
        const response = await fetch(
            "https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all"
        );
        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
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
