const art =
    `

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

const styles = `
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
`;

const html = `
<pre>${art}</pre>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class AsciiArt extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('ascii-art', AsciiArt);