const text = `

I have extensive experience working in collaborative engineering environments, including contributing to a team of about ten engineers at Planview on Hub, a cross‑system synchronization web app. My work covered the <b>whole stack</b>, from <b>frontend</b> modernization (AngularJS/JavaScript --> React/TypeScript) to <b>backend</b> services (Java), and <b>end-to-end feature delivery and design</b>. I also supported our team’s <b>DevOps</b> needs and release processes. 

At UBC’s Learning Technology Hub, I contributed to Equity Insights, a grade and demographics in-equity visualizer, by building interactive graph displays using D3.

On the operations side, I worked as an IT Support Analyst at the LT Hub, helping faculty and students troubleshoot learning‑technology issues and providing training on the digital tools used at UBC.

Community involvement is important to me, and I enjoy using my technical skills to support creative spaces. I have volunteered at events such as the Retro Gaming Expo as an AV Technician and at ProtoCON as a playtester.

As can be seen by the design of this site, I am also a big Fallout and retro-computing fan!
`

const template = document.createElement('template');
template.innerHTML = `
<style>
    pre {
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
        font-size: large;
        font-family: 'Courier New', Courier, monospace;
    }

    h1:hover, h2:hover, p:hover, pre:hover {
        color: var(--hover-colour);
    }

</style>
<div class="container" style="visibility: hidden;">
    <ascii-art></ascii-art>
    <h1 style="font-style: italic;">SOFTWARE ENGINEER | GAME DEVELOPER | IT SUPPORT ANALYST</h1>
    <h2>A quick spiel (some would call this an elevator pitch)</h2>
    <pre>${text}</pre>
</div>
`;


class HomePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }

    async connectedCallback() {
        this.root.querySelector('div').style.setProperty('visibility', 'visible');

    }

}

customElements.define('home-page', HomePage);