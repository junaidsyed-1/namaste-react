import React from 'react';
import ReactDOM from 'react-dom/client';

// Revision

// React.createElement => React Element => Object => HTML
const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// JSX
// JSX => React.createElement => React Element => Object => HTML
// JSX is different, its not HTML inside JS, JSX is different and React is different. Babel is transpiling the code before it reaches to JS Engine.
const jsxHeading = <h1>This is Namaste React using JSX</h1>

// ReactDOM converts the react element which is an object to HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);