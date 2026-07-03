const txt = 
`

I have extensive experience working in collaborative engineering environments, including contributing to a team of about ten engineers at Planview on Hub, a cross‑system synchronization web app. My work covered the whole stack, from frontend modernization (AngularJS/JavaScript --> React/TypeScript) to backend services (Java), and end-to-end feature delivery and design. I also supported our team's DevOps needs and release processes.

At UBC's Learning Technology Hub, I contributed to Equity Insights, a grade and demographics in-equity visualizer, by building interactive graph displays using D3.

On the operations side, I worked as an IT Support Analyst at the LT Hub, helping faculty and students troubleshoot learning‑technology issues and providing training on the digital tools used at UBC.

Community involvement is important to me, and I enjoy using my technical skills to support creative spaces. I have volunteered at events such as the Retro Gaming Expo as an AV Technician and at ProtoCON as a playtester.

As can be seen by the design of this site, I am also a big Fallout and retro-computing fan!
`;

const styles =
`
<style>
    pre {
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
        font-size: large;
        font-family: 'Courier New', Courier, monospace;
        line-height: 1.5;
    }

    h1:hover, h2:hover, p:hover, pre:hover {
        color: var(--hover-colour);
    }

    h1 {
        font-style: italic;
    }
</style>
`;

const html =
`
<div class='container'>
    <ascii-art></ascii-art>
    <h1>SOFTWARE ENGINEER | GAME DEVELOPER | IT SUPPORT ANALYST</h1>
    <h2>A quick spiel (some would call this an elevator pitch)</h2>
    <pre>${txt}</pre>
</div>
`;

const template = document.createElement('template');
template.innerHTML =
`
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