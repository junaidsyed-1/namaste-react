import User from './User';
import React from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';


class About extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount")
    }


    render() {



        // console.log("Parent Render")
        return (
            <div id="about">
                <h1>This is About component</h1>
                <h1 className="text-xl">
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <div className="text-xl font-bold">{loggedInUser}</div>
                        }
                    </UserContext.Consumer>
                </h1>
                <UserClass name={"First "} location={"Delhi (class)"} />
            </div>
        )
    }
};

/*
- Parent Constructor
- Parent Render
    
    This is the Render Phase
    - First child Constructor
    - First child Render
    
    - Second child Constructor
    - Second child Render 

    This is the Commit Phase
    - First child componentDidMount
    - Second child componentDidMount

- Parent ComponentDidMount



 */
export default About;