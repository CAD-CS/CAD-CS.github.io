const text = `
This site is built with plain HTML, CSS, and JavaScript in conjunction with the Web Components API for component reusability.

It was originally made with Next.js, which fit my background but felt a little too familiar. I wanted a challenge, so I moved to a lighter stack with Alpine, Tailwind, and Web Components. After some experimenting, I decided to go all in on fundamentals and rebuilt everything with vanilla JS and CSS.

It turned out to be a great decision. I deepened my understanding of the DOM, and improved my core web development skills, and got plenty of hands‑on experience with Web Components, creating my own router and component library.

This reflects my general approach to learning new technologies, and that is starting from first principles and building up to a higher level of abstraction. Since, as a rule of thumb, it's easier to go up an abstraction than go down. 

`
const template = document.createElement('template');
template.innerHTML = `
<style>
    pre {
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
    }
        
    h1:hover, h2:hover, p:hover, pre:hover {
        color: var(--hover-colour);
    }
</style>
<h1>Why keep it simple?</h1>
<pre>${text}</pre>
`;

class SiteInfoPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(template.content.cloneNode(true));
    }
}

customElements.define('site-info-page', SiteInfoPage);