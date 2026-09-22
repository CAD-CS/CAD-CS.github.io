const styles = `
<style>
    h1:hover, h2:hover, h3:hover, ul:hover {
        color: var(--text-hover-colour);
    }
</style>
`;

const html = `
<h1>Community Involvement</h1>

<experience-card title='General Volunteer' organization='Full Indie' period='Aug 2026 - Present'>
    <ul>
        <li>Assisted event operations by checking in attendees and answering their questions.</li>
    </ul>
</experience-card>

<experience-card title='Set up & Strike Volunteer' organization='Vancouver International Film Festival' period='Sep - Oct 2026'>
    <ul>
        <li>Assembled lighting and furniture setups for festival venues, helping ensure spaces were fully prepped and event-ready ahead of screenings.</li>
    </ul>
</experience-card>

<experience-card title='Event Support Volunteer' organization='Full Indie Summit' period='Sep 2026'>
    <ul>
        <li>Managed late registrant check-in, provided live mic support for panelists, and delivered wayfinding assistance to attendees, ensuring a smooth and well-organized event experience. </li>
    </ul>
</experience-card>

<experience-card title='Setup Volunteer' organization='Westcoast Comic Con' period='Aug 2026'>
    <ul>
        <li>Helped set up and prepare the venue for the event, ensuring tables and chairs were in the correct locations and presentable for exhibitors.</li>
    </ul>
</experience-card>

<experience-card title='Audio Visual Technician' organization='Vancouver Retro Gaming Expo' period='June 2026'>
    <ul>
        <li>Managed full audio‑visual operations for event panels, including setup, live troubleshooting, and teardown, ensuring uninterrupted presentations and a professional environment.</li>
    </ul>
</experience-card>

<experience-card title='Play Tester' organization='ProtoCON (Board Game Convention)' period='Nov 2025'>
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

<experience-card title='Security Volunteer' organization='UBC Pop-Up Hanami (Anime and Japanese cultural festival)' period='March 2025'>
    <ul>
        <li>Maintained a safe environment for convention attendees by monitoring for and reporting inappropriate behavior.</li>
    </ul>
</experience-card>

<experience-card title='General Volunteer' organization='Powell Street Festival (Japanese cultural festival)' period='Aug 2023'>
    <ul>
        <li>Provided general volunteer support, including delivering food to performers and guiding
attendees with wayfinding assistance.</li>
    </ul>
</experience-card>

<experience-card title='Logistics Volunteer' organization='UBC Multidisciplinary Undergraduate Research Conference (MURC)' period='March 2023'>
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
