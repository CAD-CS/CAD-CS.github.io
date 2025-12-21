const template = document.createElement('template');
template.innerHTML = `
<main-content>
	<ascii-art></ascii-art>
	<h1>Welcome!</h1>
	<p>This is the home page.</p>
</main-content>
`;

class HomePage extends HTMLElement 
{
    constructor() 
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('home-page', HomePage);