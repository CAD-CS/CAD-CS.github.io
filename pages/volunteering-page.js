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

<experience-card title='Audio Visual Technician' organization='Vancouver Retro Gaming Expo' period='June 2026'>
    <ul>
        <li>Managed full audio‑visual operations for event panels, including setup, live troubleshooting, and teardown, ensuring uninterrupted presentations and a professional environment.</li>
    </ul>
</experience-card>

<experience-card title='Play Tester' organization='ProtoCON' period='Nov 2025'>
    <ul>
        <li>Provided actionable feedback on flow, accessibility, and difficulty, enabling board game designers to improve their games prior to public release.</li>
    </ul>
</experience-card>

<experience-card title='Move-in Volunteer' organization='UBC Student Housing' period='Aug 2025'>
    <ul>
        <li>Assisted students with moving their belongings to their dorms while answering their questions
regarding how it is like to live on campus, creating a safe and welcoming environment.</li>
    </ul>
</experience-card>

<experience-card title='Security Volunteer' organization='UBC Pop-Up Hanami' period='March 2025'>
    <ul>
        <li>Maintained a safe environment for convention attendees by monitoring for and reporting inappropriate behavior.</li>
    </ul>
</experience-card>

<experience-card title='General Volunteer' organization='Powell Street Festival' period='Aug 2023'>
    <ul>
        <li>Provided general volunteer support, including delivering food to performers and guiding
attendees with wayfinding assistance.</li>
    </ul>
</experience-card>

<experience-card title='Logistics Volunteer' organization='Multidisciplinary Undergraduate Research Conference (MURC)' period='March 2023'>
    <ul>
        <li>Assisted conference attendees with wayfinding and tracked presenter attendance to ensure
adjudication requirements were met.</li>
    </ul>
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