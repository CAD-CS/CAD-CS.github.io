const template = document.createElement('template');
template.innerHTML = `
<main-content>
    About
</main-content>
`;

class AboutPage extends HTMLElement 
{
    constructor() 
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('about-page', AboutPage);