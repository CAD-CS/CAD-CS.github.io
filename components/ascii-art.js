const template = document.createElement('template');
template.innerHTML = `
<pre></pre>
`;

class AsciiArt extends HTMLElement 
{
    constructor()
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }

    async connectedCallback()
    {        
        const art = await this.getArt();
        this.root.querySelector('pre').textContent = art;
    }

    async getArt() 
    {
        const art = await fetch('./art/ascii.txt');
        return await art.text();
    }
}

customElements.define('ascii-art', AsciiArt);