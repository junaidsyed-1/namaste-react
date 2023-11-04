import { useState, useEffect } from "react";

const User = (props) => {
    const [count] = useState(0);
    const { name } = props;

    useEffect(() => {

    }, [])

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Delhi</h3>
            <h4>Contact: Junaid</h4>
        </div>
    )
};

export default User;