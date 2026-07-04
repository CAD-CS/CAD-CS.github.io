const styles = `
<style>
    h1:hover, h2:hover, h3:hover {
        color: var(--hover-colour);
    }
</style>
`;

const html = `
<h1>Work Experience</h1>

<experience-card title='Software Engineer I' organization='Planview' period='Sept 2025 - April 2026'>
    <ul>
        <li>Owned the end‑to‑end design and delivery of a feature requested by a Fortune 5 client, enabling targeted error logging during cross‑system synchronization, built on an event‑driven architecture.</li>
        <li>Modernized the legacy AngularJS frontend to React and TypeScript, re-architecting state management and component logic while meeting strict UX design standards.</li>
        <li>Implemented a Spring-based Java REST API for a major automotive client, enabling them to extract actionable usage insights while meeting their technical integration requirements.</li>
        <li>Maintained Jenkins CI/CD pipeline stability by rapidly diagnosing and resolving critical failures, ensuring uninterrupted deployments across production environments.</li>
        <li>Owned client-facing software releases by coordinating with cross-functional stakeholders to validate builds and ensure regression-free deployments to production.</li>
        <li>Increased team velocity by building Claude Code slash commands, automating product‑environment setup, accelerating testing and verification through AI workflows.</li>
    </ul>
</experience-card>

<experience-card title='WordPress Developer' organization='UBC Faculty of Education' period='April 2025 - June 2025'>
    <ul>
        <li>Delivered technical consultation and a fully searchable database of 170+ academic articles, complete with an efficient workflow for submitting new entries.</li>
        <li>Improved UX by customizing site filtering and design to client specifications, leveraging CSS and the FacetWP API.</li>
    </ul>
</experience-card>

<experience-card title='Learning Technology Rover' organization='UBC Learning Technology Hub' period='Sept 2024 - April 2025'>
    <ul>
        <li>Delivered IT support, consultation, and training to a community of 70,000+ students, faculty, and staff, efficiently resolving requests and troubleshooting technical issues via ServiceNow to maintain seamless university operations.</li>
        <li>Built interactive data‑visualization components for the Equity Insights platform using React and D3, enabling instructors to analyze course performance and demographic data to identify systemic inequities.</li>
        <li>Improved reliability of Canvas API Python scripts for non-technical users by implementing granular error handling for authentication, token expiry, and permission failures, eliminating silent failure points.</li>
        <li>Improved public‑facing documentation in consultation with the UX lead, increasing readability and reducing incident tickets through clearer guidance.</li>
        <li>Mentored and trained two new team members, ensuring consistent delivery of high-quality IT services.</li>
    </ul>
</experience-card>
<experience-card title='Learning Spaces Steward' organization='UBC IT AV' period='May 2023 - Aug 2023'>
    <ul>
        <li>Provided audio-visual IT support to the UBC community via phone, developing hands-on experience with IT operations at a large institution while facilitating smooth technology integration in an academic setting.</li>
        <li>Conducted daily inspections and basic troubleshooting of audio-visual equipment in teaching spaces, ensuring consistent and reliable functionality.</li>
    </ul>
</experience-card>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class WorkExperiencePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('work-experience-page', WorkExperiencePage);