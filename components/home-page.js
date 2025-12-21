const template = document.createElement('template');
template.innerHTML = `
<main-content>
	<ascii-art></ascii-art>
	<h1>Welcome!</h1>
	<pre></pre>
</main-content>
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
    }

    async getText() {
        const art = await fetch('./text/home.txt');
        return await art.text();
    }
}

customElements.define('home-page', HomePage);