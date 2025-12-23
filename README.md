# Some interesting technical details and my experience using vanilla JS

## Creating the sidebar

### Converting a list of strings into HTML elements

Having spent most of my time working with JavaScript frameworks, I was pleasantly surprised by how straightforward this was in vanilla JS.

Compared to React or Angular, the implementation only required a couple of extra lines of code (around 2–3).

The main drawback is that you can’t express these operations directly in HTML using directives like in Angular or JSX/TSX in React.

### Implementing the tab indicator (the ">")

I implemented the indicator by attaching an event listener to each button. When a button is clicked, the handler iterates through all buttons to remove any existing indicators, then adds the indicator to the newly selected one.

This isn’t the most optimal approach, but with only three options, the performance impact is negligible.

## Client-side routing

This turned out to be much simpler than expected. I assumed it would take over 100 lines of code, but the final implementation was under 20.

The routing works by intercepting the click event from sidebar links and updating the inner HTML of the page container accordingly.
