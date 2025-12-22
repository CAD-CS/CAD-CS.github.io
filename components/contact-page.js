const template = document.createElement('template');
template.innerHTML = `
<style>
    a, a:visited {
        color: #00bfff;
    }
    a:hover {
        color: #ff2d2d;
    } 
</style>
<main-content>
    <h1>Contact Me!</h1>
    <p>My contact information:</p>
    <ul>
        <li>Email:
            <a href="mailto:hash-par@hotmail.com">hash-par@hotmail.com</a>
        </li>
        <li>LinkedIn:
            <a href="https://www.linkedin.com/in/parsahashemi" target="_blank">https://www.linkedin.com/in/parsahashemi</a>
        </li>
        <li>GitHub:
            <a href="https://github.com/CAD-CS" target="_blank">https://github.com/CAD-CS</a>
        </li>
            
    </ul>
</main-content>
`;

class ContactPage extends HTMLElement 
{
    constructor()
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('contact-page', ContactPage);