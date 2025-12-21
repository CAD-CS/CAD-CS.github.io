const template = document.createElement('template');
template.innerHTML = `
<main-content>
    Blog
</main-content>
`;

class BlogPage extends HTMLElement 
{
    constructor() 
    {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('blog-page', BlogPage);