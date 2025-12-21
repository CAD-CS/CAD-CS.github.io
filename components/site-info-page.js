const template = document.createElement('template');
template.innerHTML = `
<main-content>
    Site info
</main-content>
`;

class SiteInfoPage extends HTMLElement 
{
    constructor() 
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('site-info-page', SiteInfoPage);