import { routes } from '../routes.js';

const selectorIcon = '&gt;'; // '>'

const styles = `
<style>
    ul {
        list-style-type: none;
        padding-left: 10px;
    }

    button {
        display: block;
        width: 100%;
        color: var(--text-colour);
        background: none;
        border: none;
        font-family: inherit;
        font-weight: bold;
        font-size: medium;
        text-align: left;
        padding: 0.25rem 0;
        cursor: pointer;
    }

    button:hover {
        color: var(--nav-hover-colour);
    }

    .nav-indicator {
        display: inline-block;
        font-weight: bold;
        color: var(--nav-colour);
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
                <button data-link='${route.path}' aria-current='false'>
                    <span class='nav-indicator' aria-hidden='true'></span>
                    ${formattedPath}
                </button>
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
            const indicator = activeButton.querySelector('.nav-indicator');
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
