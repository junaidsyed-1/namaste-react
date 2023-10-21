import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// How can i put React Element inside a component?
// React Element is what? - It is a object and at the end of the day it is just JavaScript
const title = (
    <h1 className="heading" tabIndex="1">
        Namaste React🚀
    </h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div className="container">
        {title}
        <h1>This is a React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
