const template = document.createElement('template');
template.innerHTML = `
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
<h1>Work Experience</h1>

<div class="job">
    <div class="job-title">Software Engineer</div>
    <div class="job-company">Planview</div>
    <div class="job-period">2021 - Present</div>
    <p>Contributing to Hub, a cross-system synchronization web application serving a team of ~10 engineers.</p>
    <ul>
        <li>Frontend modernization: AngularJS/JavaScript to React/TypeScript</li>
        <li>Backend services development in Java</li>
        <li>End-to-end feature delivery and design</li>
        <li>DevOps support and release process management</li>
    </ul>
</div>

<div class="job">
    <div class="job-title">Developer</div>
    <div class="job-company">UBC Learning Technology Hub</div>
    <div class="job-period">2020 - 2021</div>
    <p>Contributed to Equity Insights, a visualization tool for grade and demographic equity data.</p>
    <ul>
        <li>Built interactive graph displays using D3.js</li>
        <li>Worked on data processing and visualization pipeline</li>
    </ul>
</div>

<div class="job">
    <div class="job-title">IT Support Analyst</div>
    <div class="job-company">UBC Learning Technology Hub</div>
    <div class="job-period">2019 - 2020</div>
    <p>Provided technical support and training for learning technology tools used across UBC.</p>
    <ul>
        <li>Troubleshooting and resolving faculty and student issues</li>
        <li>Training on digital tools and best practices</li>
    </ul>
</div>
`;

class WorkExperiencePage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('work-experience-page', WorkExperiencePage);