import { routes } from '../routes.js';

const selectorIcon = '&gt;'; // '>'

const styles = `
<style>
    button {
        color: var(--text-colour);
        background: none;
        border: none;
    }

    ul {
        list-style-type: none;
        padding-left: 10px;
    }

    li {
        position: relative;
    }

    li:hover {
        border-color: var(--hover-colour);
        color: var(--hover-colour);
        border-style: solid;
        border-width: thin;
    }

    li:hover * {
        color: var(--hover-colour);
        cursor: pointer;
    }

    button:focus-visible {
        outline: 2px solid var(--hover-colour);
        outline-offset: 2px;
    }

    li[data-active] {
        border-left: 2px solid var(--hover-colour);
        padding-left: 8px;
    }

    .nav-indicator {
        min-width: 1ch;
        display: inline-block;
    }
</style>
`;

const html = `
<aside>
    <nav aria-label='Site navigation'>
        <ul>
        </ul>
    </nav>
</aside>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class SideBar extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.initializeList();
        this.addEventListeners();
        this.initializeActiveState();
    }

    initializeList() {
        const ul = this.root.querySelector('ul');
        ul.innerHTML = '';
        routes.forEach(route => this.initializeNavigationItem(route, ul));
    }

    initializeNavigationItem(route, ul) {
        const li = document.createElement('li');
        const formattedPath = this.formatPath(route.path);
        li.innerHTML = `
                <span class='nav-indicator' aria-hidden='true'></span>
                <button data-link='${route.path}' aria-current='false'>${formattedPath}</button>
            `;
        ul.appendChild(li);
    }

    formatPath(path) {
        return path.replace(/-/g, ' ')
            .replace(/^\w/, c => c.toUpperCase());
    }

    addEventListeners() {
        this.root.addEventListener('click', (e) => this.updateSelection(e));
        document.addEventListener('route-change', (e) => this.updateActiveState(e.detail.path));
    }

    updateSelection(e) {
        const link = e.target.closest('[data-link]');
        if (!link) return;

        const path = link.getAttribute('data-link');
        this.updateActiveState(path);

        this.dispatchEvent(new CustomEvent('route-change-request', {
            detail: { path },
            bubbles: true,
            composed: true,
        }));
    }

    updateActiveState(path) {
        this.root.querySelectorAll('.nav-indicator').forEach(span => {
            span.innerHTML = '';
        });

        this.root.querySelectorAll('[data-link]').forEach(btn => {
            btn.setAttribute('aria-current', 'false');
        });

        const activeButton = this.root.querySelector(`[data-link='${path}']`);
        if (activeButton) {
            const indicator = activeButton.previousElementSibling;
            if (indicator && indicator.classList.contains('nav-indicator')) {
                indicator.innerHTML = selectorIcon;
            }
            activeButton.setAttribute('aria-current', 'page');
        }
    }

    initializeActiveState() {
        const initialPath = window.location.hash.slice(1) || 'home';
        this.updateActiveState(initialPath);
    }
}

customElements.define('side-bar', SideBar);