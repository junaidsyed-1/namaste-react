import React from "react";

class First extends React.Component {

    constructor(props) {
        super(props);

        console.log("Test Constructor")
    }

    componentDidMount() {
        console.log("Test componentDidMount")
    }

    render() {
        console.log("Test Render")
        return (
            <div>

            </div>
        )
    }
};

export default First;