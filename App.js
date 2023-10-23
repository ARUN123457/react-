const heading=React.createElement("h1",{id:"heading"},"hello world from React!");
      

        
        const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'am h1 tag"),React.createElement("h2",{},"i'am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"i'am h1 tag"),React.createElement("h2",{},"i'am h2 tag")]),]);
        const root1=ReactDOM.createRoot(document.getElementById("root"));
        root1.render([parent,heading]);
