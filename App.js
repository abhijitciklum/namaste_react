import React from "react";
import ReactDOM from "react-dom/client";

const structure = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-child1" }, "Namaste"),
    React.createElement("h2", { key: "h2-child1" }, "React"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-child2" }, "hi"),
    React.createElement("h2", { key: "h2-child2" }, "Abhijit"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(structure);
console.log("heading", structure);
