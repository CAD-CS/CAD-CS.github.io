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
    :host {
        --ascii-art-colour: var(--text-colour, #39FF14);
        --ascii-art-hover-colour: var(--hover-colour, #ffbf00);
    }
    
    pre {
        color: var(--ascii-art-colour);
        transition: color 0.2s ease;
    }

    pre:hover {
        color: var(--ascii-art-hover-colour);
        cursor: default;
    }
</style>
<pre>${art}</pre>
`;

class AsciiArt extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define("ascii-art", AsciiArt);