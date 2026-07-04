# Stack

HTML, CSS, and JavaScript in addition to the native Web Components API. 

Web Components let you create real custom HTML elements with encapsulated structure and styling through the shadow DOM. Frameworks typically render components as built‑in tags like `<div>`, but custom elements appear in the DOM as their own tags and must include a hyphen in their name.

# Architecture

## Routing

Client-side routing is hash-based. The router reads `window.location.hash` on load and listens for `hashchange` events to handle browser back and forward navigation. URLs are shareable and bookmarkable, and page state is preserved on reload.

Navigation is decoupled from the router via a two-event system. The sidebar dispatches a `route-change-request` event when the user clicks a link. The router handles that event, updates the hash, renders the new page, then broadcasts a `route-change` event so the sidebar can update its active state.

All routes are defined in a single `routes.js` file, which both the router and the sidebar import from.

## Components

Pages and components follow a somewhat similar pattern to how Angular defines components, with the component logic and state management being separate from the HTML template and styling.

For React developers this is a downgrade as the HTML template is a string which means it doesn't have IDE support the way that JSX and TSX do. 

## Interactivity

While in UI libraries like React interactivity is achieved via `onChange` callbacks and `useEffect` hooks, in plain JavaScript you have to do so via adding event listeners, dispatching events, and updating tags dynamically by querying and updating the DOM manually. Unfortunately, this makes the logic of the code a tad harder to reason about but once you get used to it then it isn't as cumbersome as it may originally seem. 
