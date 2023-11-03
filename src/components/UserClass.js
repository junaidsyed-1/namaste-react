import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "John Doe",
                location: "Default",
                login: "Default",
                bio: "Bio"
            }
        }
        console.log(this.props.name + "Child Constructor");
    };

    async componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount")
        // API call GitHub User
        const data = await fetch("https://api.github.com/users/junaidsyed-1");
        const json = await data.json();
        this.setState({ userInfo: json })
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        console.log(this.props.name + "Child Render")
        const { name, location, login, avatar_url, bio } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>GitHub UserName: {login}</h4>
                <p>Bio: {bio}</p>

            </div>
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
 *  - componentWillUpdate()
 * 
 */