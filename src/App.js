import React, { Fragment } from 'react';
import './App.css';

// Components
import InputFeature from "./components/InputFeature"
import ListFeature from "./components/ListFeature"

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputFeature />
        <ListFeature />
      </div>

    </Fragment>
  );
}

export default App;
