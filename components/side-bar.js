const template = document.createElement('template');
template.innerHTML = `
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
        'Site info',
        'Contact'
    ];

for (const tab of tabs) {
    const li = document.createElement('li');
    li.innerHTML = `
       <span id="${tab}"></span><button id="${tab}" data-link>${tab}</button>
    `;
    if (tab === 'Home') {
        li.querySelector('span').innerHTML = '>';
    }
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

            this.shadowRoot.querySelectorAll('span').forEach(span => {
                span.innerHTML = '';
            });

            const span = this.shadowRoot.getElementById(link.id);
            span.innerHTML = '>';
        });
    }

}

customElements.define('side-bar', SideBar);