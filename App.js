    // const heading = document.createElement("h1");
    //     heading.innerHTML = "Hello React From Javascript!";
        // const root = document.getElementById("root");
        // root.appendChild(heading);
    
    
    // const parent = React.createElement('div', { id: 'parent', className: 'parent-class' }, "Hello, Start React! ");

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello React From Javascript!";

// const domRoot = document.getElementById("root");
// domRoot.appendChild(heading);

const parent1 = React.createElement( 
    "div", 
    { id: 'parent1', className: 'parent1-class' }, 
    React.createElement(
        "div", 
        { id: 'child' }, 
        React.createElement("h1", {}, "Hello, Start React! "), 
        React.createElement("h2", {}, "Hello, Start React! "), 
        React.createElement("h3", {}, "Hello, Start React! ")
        )
    );
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent1 );

// const parent1 = React.createElement(
//   "div",
//   { id: "parent1", className: "parent1-class" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hello, Start React!"),
//     React.createElement("h2", {}, "Hello, Start React!"),
//     React.createElement("h3", {}, "Hello, Start React!")
//   )
// );

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(parent1);
