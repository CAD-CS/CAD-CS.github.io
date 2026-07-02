const template = document.createElement('template');
template.innerHTML = `
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
<h1>Community Involvement</h1>
<p>I'm passionate about using my technical skills to support creative communities and spaces.</p>

<h2>Volunteering</h2>

<div class="event">
    <div class="event-title">AV Technician</div>
    <div class="event-role">Retro Gaming Expo</div>
    <div class="event-year">2022, 2023</div>
    <p>Provided audio/visual technical support for vendor setup, booth management, and event presentation.</p>
</div>

<div class="event">
    <div class="event-title">Playtester</div>
    <div class="event-role">ProtoCON</div>
    <div class="event-year">2022, 2023</div>
    <p>Tested indie games during development and provided constructive feedback to creators. Helped identify bugs and gameplay improvements.</p>
</div>

<div class="event">
    <div class="event-title">Tech Support Volunteer</div>
    <div class="event-role">Various Community Events</div>
    <p>Provided technical assistance at local gaming and maker events, troubleshooting hardware and software issues.</p>
</div>

<h2>Interests</h2>
<p>I'm deeply interested in retro computing, gaming history, and the culture surrounding video game preservation. As you can see from this site's design, I'm a big Fallout fan and enjoy the retro-terminal aesthetic.</p>
`;

class VolunteeringPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('volunteering-page', VolunteeringPage);