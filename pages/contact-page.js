const styles = `
<style>
    ul {
        list-style-type: none;
        padding-left: 0;
    }

    li {
        margin-bottom: 0.5rem;
    }

    h1:hover, h2:hover, span:hover {
        color: var(--text-hover-colour);
    }

    a, a:visited {
        color: var(--accent-colour);
        text-decoration: none;
    }

    a:hover {
        color: var(--accent-hover-colour);
        text-decoration: underline;
    }
</style>
`;

const html = `
<h1>Have I piqued your interest? Contact me!</h1>
<ul>
    <li><span>Email:</span>
        <a href='mailto:hash-par@hotmail.com'>hash-par@hotmail.com</a>
    </li>
    <li><span>LinkedIn:</span>
        <a href='https://www.linkedin.com/in/parsahashemi' target='_blank'>https://www.linkedin.com/in/parsahashemi</a>
    </li>
</ul>
<h2>You can find more of my work here:</h2>
<ul>
    <li><span>GitHub:</span>
        <a href='https://github.com/CAD-CS' target='_blank'>https://github.com/CAD-CS</a>
    </li>
</ul>
`;

const template = document.createElement('template');
template.innerHTML = `
${styles}
${html}
`;

class ContactPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('contact-page', ContactPage);
