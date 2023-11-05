import React from 'react';
import Shimmer from './Shimmer';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
        console.log("Constructor");
    };

    async componentDidMount() {
        console.log("Component Did Mount")
        // this.timer = setInterval(() => {
        //     console.log("Timer")
        // }, 1000)
        // API
        const data = await fetch("https://dummyjson.com/users");
        const json = await data.json();
        this.setState({
            users: json?.users,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        // clearInterval(this.timer);
    }


    render() {
        console.log("Render")
        if (this.state.users.length == 0) return <Shimmer />

        return (
            <div className="container">
                {this.state.users.map((user) => {
                    return <div className="user-card" key={user.id}>
                        <h2>firstName : {user.firstName}</h2>
                        <h3>LastName : {user.lastName}</h3>
                        <h4>Age: {user.age}</h4>
                        <p>Address: {user.address.address}, {user.address.city}</p>
                    </div>
                })}


            </div >
        )
    }

};

export default UserClass;

/**
 * 
 * In the Mounting Phase
 *  - constructor(Dummy data)
 *  - render(Dummy data)
 *  - (React Updates the DOM)
 *  - componentDidMount()
 *   - API CALL
 *   - this.setState(state variable is updated) - This triggers the Update Phase
 * 
 * In the Update Phase
 *  - constructor(API data)
 *  - render(API data)
 *  - (React Updates the DOM)
 *  - componentDidUpdate() is called
 * 
 * UnMounting Phase start when we change the page
 *  - componentWillUnmount()
 * 
 */