const styles = `
<style>
    h1:hover, h2:hover, h3:hover {
        color: var(--hover-colour);
    }

    .job {
        margin-bottom: 2rem;
    }

    .job-title {
        font-weight: bold;
    }

    .job-company {
        color: #00bfff;
    }

    .job-period {
        color: #ffbf00;
        font-size: 0.9em;
    }

    ul {
        margin-left: 1.5rem;
    }
</style>
`;

const html = `
<h1>Work Experience</h1>

<experience-card title='Software Engineer' organization='Planview' period='2021 - Present'>
    <p>Contributing to Hub, a cross-system synchronization web application serving a team of ~10 engineers.</p>
    <ul>
        <li>Frontend modernization: AngularJS/JavaScript to React/TypeScript</li>
        <li>Backend services development in Java</li>
        <li>End-to-end feature delivery and design</li>
        <li>DevOps support and release process management</li>
    </ul>
</experience-card>

<experience-card title='Developer' organization='UBC Learning Technology Hub' period='2020 - 2021'>
    <p>Contributed to Equity Insights, a visualization tool for grade and demographic equity data.</p>
    <ul>
        <li>Built interactive graph displays using D3.js</li>
        <li>Worked on data processing and visualization pipeline</li>
    </ul>
</experience-card>

<experience-card title='IT Support Analyst' organization='UBC Learning Technology Hub' period='2019 - 2020'>
    <p>Provided technical support and training for learning technology tools used across UBC.</p>
    <ul>
        <li>Troubleshooting and resolving faculty and student issues</li>
        <li>Training on digital tools and best practices</li>
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