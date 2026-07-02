import { routes } from './routes.js';

const routeMap = Object.fromEntries(
    routes.map(r => [r.path, r.tag])
);

function getCurrentPath() {
    const hash = window.location.hash.slice(1);
    return hash || "home";
}

function handleUnsupportedPage(contentElement) {
    const notFound = document.createElement("div");
    notFound.innerHTML = "<h1>404 - Page not found</h1>";
    contentElement.appendChild(notFound);
}

function render(path) {
    const tag = routeMap[path];
    const contentElement = document.getElementById("app-content");
    contentElement.innerHTML = "";

    if (!tag) {
        handleUnsupportedPage(contentElement);
        return;
    }

    const pageElement = document.createElement(tag);
    contentElement.appendChild(pageElement);

    document.dispatchEvent(new CustomEvent("route-change", {
        detail: { path },
        bubbles: true,
        composed: true,
    }));
}

document.addEventListener("route-change-request", (e) => {
    const newPath = e.detail.path;
    window.location.hash = newPath;
    render(newPath);
});

window.addEventListener("hashchange", () => {
    const path = getCurrentPath();
    render(path);
});

const initialPath = getCurrentPath();

render(initialPath);
