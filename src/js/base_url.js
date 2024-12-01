const baseUrl =
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:5500/"
    : "https://amar.my.id/portfolio-v2/";

// Update all elements (links, stylesheets, scripts, and images) based on base URL
const updateUrls = (selector, attr = "href") => {
  document.querySelectorAll(selector).forEach((el) => {
    const originalHref = el.getAttribute(`data-${attr}`);
    if (originalHref) el[attr] = baseUrl + originalHref;
  });
};

updateUrls('link[rel="stylesheet"]', "href");
updateUrls("script[data-src]", "src");
updateUrls("footer a[data-href]");
updateUrls("header a[data-href]");
updateUrls('link[rel="icon"][data-href]', "href");
