const template = document.createElement('template');
template.innerHTML = `
<style>
    button {
        color: var(--text-colour);
        background: none;
        border: none;

    }
    button:hover {
        cursor: pointer;
        color: var(--hover-colour);
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>

<aside>
    <nav>
        <ul>
        </ul>
    </nav>
</aside>
`;

const tabs =
    [
        'Home',
        'About',
        'Contact',
        'Blog',
        'Site Info'
    ];

for (const tab of tabs) {
    const li = document.createElement('li');
    li.innerHTML = `
        <button id="${tab}" data-link>${tab}</button>
    `;
    template.content.querySelector('ul').appendChild(li);
}

class SideBar extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.addEventListener("click", (e) => {
            const link = e.target.closest("[data-link]");
            this.dispatchEvent(new CustomEvent("navigate", {
                detail: { path: link.id },
                bubbles: true,
                composed: true,
            }));
        });
    }

}

customElements.define('side-bar', SideBar);