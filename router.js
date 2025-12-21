const routes = {
  "/": "<home-page></home-page>",
  "/about": "<about-page></about-page>",
  "/contact": "<contact-page></contact-page>",
  "/blog": "<blog-page></blog-page>",
  "/site-info": "<site-info-page></site-info-page>",
};

let currentRoute = "/";

function render(path) {
  const view = routes[path] || "<h1>404</h1>";
  document.getElementById("content").innerHTML = view;
}

function navigate(path) {
  currentRoute = path;   // store route internally
  render(path);          // update UI
}

document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

// initial render
render(currentRoute);