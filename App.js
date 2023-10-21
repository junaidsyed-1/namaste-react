import React from 'react';
import ReactDOM from 'react-dom/client';


// React Element 
const heading = (
    <h1 className="heading" tabIndex="1">
        React Element
    </h1>
)

// React Functional Component
const HeadingComponent = () => (<h1>This is a React Functional Component</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);