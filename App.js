import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="title" tabIndex="1">
        Namaste React🚀
    </h1>
);

// React Functional Component
// Component Composition - It means that we can call a component inside a component.
// Also we can call a component using 3 methods.
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading">This is a React Functional Component</h1>
    </div>
);

console.log(HeadingComponent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
