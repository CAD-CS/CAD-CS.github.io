const routes =
{
    "Home": "<home-page></home-page>",
    "Contact": "<contact-page></contact-page>",
    "Site info": "<site-info-page></site-info-page>",
};

function render(path) {
    const view = routes[path] || "<h1>404</h1>";
    document.getElementById("content").innerHTML = view;
}

document.addEventListener("navigate", (e) => {
    render(e.detail.path);
});


render("Home");