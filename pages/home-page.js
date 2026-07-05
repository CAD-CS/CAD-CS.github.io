const txt = `

I'm a software engineer with experience across the full stack, creating web interfaces and services while also maintaining and triaging DevOps pipelines.

Alongside development, I have experience working directly with clients in operational roles, providing technical consultation, live troubleshooting, and clear documentation.

Outside of work, I enjoy making games and volunteering at conventions, expos, and festivals. Community involvement matters a lot to me, especially in creative and artistic spaces and I try to support them as much as I can.
`;

const styles = `
<style>
    pre {
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
        font-size: large;
        font-family: inherit;
        line-height: 1.5;
    }

    h2:hover, pre:hover {
        color: var(--text-hover-colour);
    }

    h1 {
        font-style: italic;
        color: var(--nav-colour);
    }

    h1:hover {
        color: var(--nav-hover-colour);
    }
</style>
`;

const html = `
<div class='container'>
    <ascii-art></ascii-art>
    <h1>SOFTWARE ENGINEER | GAME DEVELOPER | IT SUPPORT ANALYST</h1>
    <h2>A quick spiel (some would call this an elevator pitch)</h2>
    <pre>${txt}</pre>
</div>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class HomePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('home-page', HomePage);
