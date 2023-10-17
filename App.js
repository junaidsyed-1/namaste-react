/*
*
*
  <div id="parent">
    <div id="child">
        <h1>I am a h1 tag</h1>
        <h2>I am a h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am a h1 tag</h1>
        <h2>I am a h2 tag</h2>
    </div>
  </div>
*
*
*/

const parent = React.createElement(
    "div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am a h1 Tag"),
            React.createElement("h2", {}, "I am a h2 Tag")
        ]),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "I am a h1 Tag"),
            React.createElement("h2", {}, "I am a h2 Tag")
        ]),

])

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);