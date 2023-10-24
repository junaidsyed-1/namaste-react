import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Components we need to build our Food Ordering App
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Card Image
 *      - Info
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 *  - Address
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/5462907/screenshots/11960844/5.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b" />
            <h3>SubWay</h3>
            <h4>Salads, Snacks, Desserts, Beverages</h4>
            <h4>4.1 stars</h4>
            <h4>31 MINS</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                <RestaurantCard />
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
