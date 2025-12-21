const template = document.createElement('template');
template.innerHTML = `
<aside>
    <nav>
        <ul>
        </ul>
    </nav>
</aside>
`;

const tabs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Site Info', url: '/site-info' }
];

for (const tab of tabs) {
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="${tab.url}" target="_blank" rel="noopener noreferrer" data-link>${tab.name}</a>
    `;
    template.content.querySelector('ul').appendChild(li);
}

class SideBar extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('side-bar', SideBar);