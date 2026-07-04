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

const styles = `
<style>
    pre {
        transition: color 0.5s ease;
    }

    pre:hover {
        color: var(--hover-colour, #ffbf00);
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