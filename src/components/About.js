import User from './User'
import UserClass from './UserClass'

const About = () => {
    return (
        <div id="about">
            <h1>This is About component</h1>
            <UserClass name={"Junaid Syed class"} location={"Delhi (class)"} />
        </div>
    );
};

export default About;