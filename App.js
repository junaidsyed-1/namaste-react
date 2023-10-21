import React from 'react';
import ReactDOM from 'react-dom/client';

// Revision

// React.createElement => Object
const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// ReactDOM converts the react element which is an object to HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);