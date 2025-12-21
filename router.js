const routes =
{
    "Home": "<home-page></home-page>",
    "About": "<about-page></about-page>",
    "Contact": "<contact-page></contact-page>",
    "Blog": "<blog-page></blog-page>",
    "Site Info": "<site-info-page></site-info-page>",
};

function render(path) {
    const view = routes[path] || "<h1>404</h1>";
    document.getElementById("content").innerHTML = view;
}

document.addEventListener("navigate", (e) => {
    render(e.detail.path);
});


render("Home");