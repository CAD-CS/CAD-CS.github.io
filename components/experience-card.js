const styles = `
<style>
    h1:hover, h2:hover, h3:hover {
        color: var(--hover-colour);
    }

    .position {
        margin-bottom: 2rem;
    }

    .position-title {
        font-weight: bold;
    }

    .position-organization {
        color: #00bfff;
    }

    .position-period {
        color: #ffbf00;
        font-size: 0.9em;
    }

    ul {
        margin-left: 1.5rem;
    }
</style>
`;

const html = `
<div class='position'>
    <div class='position-title'></div>
    <div class='position-organization'></div>
    <div class='position-period'></div>
    <slot></slot>
</div>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.root.querySelector('.position-title').textContent = this.getAttribute('title') || '';
        this.root.querySelector('.position-organization').textContent = this.getAttribute('organization') || '';
        this.root.querySelector('.position-period').textContent = this.getAttribute('period') || '';
    }
}

customElements.define('experience-card', ExperienceCard);