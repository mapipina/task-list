import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        ReactDOM.render(
          <App taskGroupList={data} />,
          document.getElementById("root")
        );
    })
    .catch(err => {
        console.log(`Data error: ${err}`);
});
