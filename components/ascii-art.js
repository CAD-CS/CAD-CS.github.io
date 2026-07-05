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
        color: var(--ascii-colour);
        transition: color 1s ease;
    }

    pre:hover {
        color: var(--ascii-hover-colour);
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
