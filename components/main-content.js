const template = document.createElement('template');
template.innerHTML = `
<slot></slot>
`;

class MainContent extends HTMLElement 
{
    constructor() 
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('main-content', MainContent);