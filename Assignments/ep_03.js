// Epiosde 03 - Laying the Foundation

/* 
1. Create a Nested Header Element using React.createElement(h1,h2,h3 inside a div with class "title")
 - Create the same element using JSX
 - Create a functional component of the same with JSX
 - Pass attributes into the tag in JSX
 - Composition of component(Add a component inside a component)
 - {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX

*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

// Create a Nested Header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement(
//     'div',
//     { id: 'header' },
//     [
//         React.createElement('h1', { class: 'title' }, "This is h1 Tag"),
//         React.createElement('h2', { class: 'title' }, "This is h2 Tag"),
//         React.createElement('h3', { class: 'title' }, "This is h3 Tag")
//     ]
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(header);

// ----------------------------------------------------------------
// Create the same element using JSX

// const header = (
//     <div id="header">
//         <h1 className="title">This is h1 Tag</h1>
//         <h2 className="title">This is h2 Tag</h2>
//         <h3 className="title">This is h3 Tag</h3>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(header);

// ----------------------------------------------------------------
//  - Create a functional component of the same with JSX
//  - Pass attributes into the tag in JSX

// const Header = () => {
//     return (
//         <div id="header">
//             <h1 className="title" tabIndex="1">This is h1 Tag</h1>
//             <h2 className="title" >This is h2 Tag</h2>
//             <h3 className="title">This is h3 Tag</h3>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// ----------------------------------------------------------------
// - Composition of component(Add a component inside a component)

// const Header = () => (<h1>This is a header</h1>);

// const MainComponent = () => {
//     return (
//         <div>
//             <Header />
//             <h2>This is the main component</h2>
//         </div>
//     )
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MainComponent />);

// ----------------------------------------------------------------
// - {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX

// const TitleComponent = () => <h1>Hello World!</h1>;

// const App = () => (
//     <div>
//         {TitleComponent()}
//         {<TitleComponent />}
//         {<TitleComponent></TitleComponent>}
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// 2. Create a Header component from scratch using funtional component with JSX
// - Add a logo on left
// - Add a search bar in middle
// - Add user icon on right
// - Add CSS to make it look nice

const Header = () => (
    <div className="container">
        <div className="col-md-4">
            <div id="logo">Logo</div>
        </div>
        <div className="col-md-4">
            <div id="search-bar"> <input className="search-input" type="search" placeholder="Search" /></div>
        </div>
        <div id="user-icon">
            <FontAwesomeIcon icon={faUser} style={{ color: "#fcfcfc", }} />
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)
