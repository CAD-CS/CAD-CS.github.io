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
<div class="container" style="visibility: hidden;">
    <ascii-art></ascii-art>
    <h1>Welcome to my super simple site!</h1>
    <p style="font-style: italic;">*It's actually not that simple behind the scenes*</p>
    <h2>A quick spiel about me</h2>
    <pre></pre>
</div>
`;

class HomePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }

    async connectedCallback() {
        const text = await this.getText();
        this.root.querySelector('pre').textContent = text;
        this.root.querySelector('div').style.setProperty('visibility', 'visible');
        
    }

    async getText() {
        const art = await fetch('./text/about.txt');
        return await art.text();
    }
}

customElements.define('home-page', HomePage);