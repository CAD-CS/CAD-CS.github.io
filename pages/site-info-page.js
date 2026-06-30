const template = document.createElement('template');
template.innerHTML = `
<style>
    pre {
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
    }
        
    h1:hover, h2:hover, p:hover, pre:hover {
        color: var(--hover-colour);
    }
</style>
<h1>Why keep it simple?</h1>
<pre></pre>
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