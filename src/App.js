import React, { Fragment } from 'react';

// Components
import Menu from "./components/Menu"
import InputFeature from "./components/InputFeature"
import ListFeature from "./components/ListFeature"


function App() {
  return (
    <Fragment>

      <div className="container">

        <div className="menu">
          <Menu />
        </div>
        <div className="tracker">
          <InputFeature />
          <ListFeature />
        </div>

      </div>

    </Fragment>
  );
}

export default App;
