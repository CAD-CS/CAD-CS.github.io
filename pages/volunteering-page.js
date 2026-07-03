const styles = `
<style>
    h1:hover, h2:hover, h3:hover {
        color: var(--hover-colour);
    }

    .event {
        margin-bottom: 2rem;
    }

    .event-title {
        font-weight: bold;
        font-size: 1.1em;
    }

    .event-role {
        color: #00bfff;
    }

    .event-year {
        color: #ffbf00;
        font-size: 0.9em;
    }

    p {
        margin-top: 0.5rem;
    }
</style>
`;

const html = `
<h1>Community Involvement</h1>

<experience-card title='AV Technician' organization='Retro Gaming Expo' period='2022, 2023'>
    <p>Provided audio/visual technical support for vendor setup, booth management, and event presentation.</p>
</experience-card>

<experience-card title='Playtester' organization='ProtoCON' period='2022, 2023'>
    <p>Tested indie games during development and provided constructive feedback to creators. Helped identify bugs and gameplay improvements.</p>
</experience-card>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class VolunteeringPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('volunteering-page', VolunteeringPage);