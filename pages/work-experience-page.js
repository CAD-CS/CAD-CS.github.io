const styles = `
<style>
    h1:hover, h2:hover, h3:hover, ul:hover {
        color: var(--text-hover-colour);
    }

    strong {
        color: var(--bold-colour);
    
    }

    strong:hover {
        color: var(--bold-hover-colour);
    }
</style>
`;

const html = `
<h1>Work Experience</h1>

<experience-card title='Software Engineer I' organization='Planview' period='Sept 2025 - April 2026'>
    <ul>
        <li>Owned the <strong>end-to-end design and delivery</strong> of a feature requested by a <strong>Fortune 5 client</strong>, enabling targeted error logging during cross-system synchronization, built on an <strong>event-driven architecture</strong>.</li>
        <li>Modernized the legacy AngularJS <strong>frontend</strong> to React and TypeScript, re-architecting state management and component logic while meeting strict UX design standards.</li>
        <li>Implemented a Spring-based Java <strong>REST API</strong> for a major automotive client, enabling them to extract actionable usage insights while meeting their technical integration requirements.</li>
        <li>Maintained Jenkins <strong>CI/CD pipeline</strong> stability by rapidly diagnosing and resolving critical failures, ensuring uninterrupted deployments across production environments.</li>
        <li><strong>Owned client-facing software releases</strong> by coordinating with cross-functional stakeholders to validate builds and ensure regression-free deployments to production.</li>
        <li>Increased team velocity by building Claude Code slash commands, <strong>automating product-environment setup</strong>, accelerating testing and verification through AI workflows.</li>
    </ul>
</experience-card>

<experience-card title='WordPress Developer' organization='UBC Faculty of Education' period='April 2025 - June 2025'>
    <ul>
        <li>Delivered <strong>technical consultation</strong> and a fully searchable database of 170+ academic articles, complete with an efficient workflow for submitting new entries.</li>
        <li>Improved <strong>UX</strong> by customizing site filtering and design to client specifications, leveraging CSS and the FacetWP API.</li>
    </ul>
</experience-card>

<experience-card title='Learning Technology Rover' organization='UBC Learning Technology Hub' period='Sept 2024 - April 2025'>
    <ul>
        <li>Delivered <strong>IT support</strong>, consultation, and training to a <strong>community of 70,000+</strong> students, faculty, and staff, efficiently resolving requests and troubleshooting technical issues via ServiceNow to maintain seamless university operations.</li>
        <li>Built interactive <strong>data-visualization</strong> components for the Equity Insights platform using React and D3, enabling instructors to analyze course performance and demographic data to identify systemic inequities.</li>
        <li><strong>Improved reliability</strong> of Canvas API Python scripts for <strong>non-technical users</strong> by implementing granular error handling for authentication, token expiry, and permission failures, eliminating silent failure points.</li>
        <li>Improved <strong>public-facing documentation</strong> in consultation with the UX lead, increasing readability and reducing incident tickets through clearer guidance.</li>
        <li><strong>Mentored and trained</strong> two new team members, ensuring consistent delivery of high-quality IT services.</li>
    </ul>
</experience-card>

<experience-card title='Learning Spaces Steward' organization='UBC IT AV' period='May 2023 - Aug 2023'>
    <ul>
        <li>Provided audio-visual IT support to the UBC community via phone, developing <strong>hands-on experience with IT operations at a large institution</strong> while facilitating smooth technology integration in an academic setting.</li>
        <li>Conducted daily inspections and basic <strong>troubleshooting of audio-visual equipment</strong> in teaching spaces, ensuring consistent and reliable functionality.</li>
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
