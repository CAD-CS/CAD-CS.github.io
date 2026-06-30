const art = `

██████╗  █████╗ ██████╗ ███████╗ █████╗ 
██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
██████╔╝███████║██████╔╝███████╗███████║
██╔═══╝ ██╔══██║██╔══██╗╚════██║██╔══██║
██║     ██║  ██║██║  ██║███████║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

██╗  ██╗ █████╗ ███████╗██╗  ██╗███████╗███╗   ███╗██╗
██║  ██║██╔══██╗██╔════╝██║  ██║██╔════╝████╗ ████║██║
███████║███████║███████╗███████║█████╗  ██╔████╔██║██║
██╔══██║██╔══██║╚════██║██╔══██║██╔══╝  ██║╚██╔╝██║██║
██║  ██║██║  ██║███████║██║  ██║███████╗██║ ╚═╝ ██║██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝

`;
const template = document.createElement('template');
template.innerHTML = `
<style>
    pre:hover {
        color: var(--hover-colour);
    }
</style>
<pre>${art}</pre>
`;

class AsciiArt extends HTMLElement 
{
    constructor()
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('ascii-art', AsciiArt);