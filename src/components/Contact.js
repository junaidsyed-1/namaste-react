const Contact = () => {
    return (
        <div>
            <h1 className="mx-auto p-4">Contact Us</h1>
            <form >
                <input type="text" placeholder="name" className="border border-black p-2 m-2" />
                <input type="text" placeholder="message" className="border border-black p-2 m-2" />
                <button className="p-2 m-2 border border-black rounded-xl bg-slate-200" type="button">Submit</button>
            </form>
        </div>
    );
};

export default Contact;