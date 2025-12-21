const template = document.createElement('template');
template.innerHTML = `
<main-content>
    <pre></pre>
</main-content>
`;

class SiteInfoPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }

    async connectedCallback() {
        const text = await this.getText();
        this.root.querySelector('pre').textContent = text;
    }

    async getText() {
        const art = await fetch('./text/site-info.txt');
        return await art.text();
    }
}

customElements.define('site-info-page', SiteInfoPage);