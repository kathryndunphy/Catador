import React, { Component } from "react";

import Layout from './components/Layout/Layout';
import CatadorRoller from "./containers/CatadorRoller/CatadorRoller";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CatadorRoller />
        </Layout>
      </div>
    );
  }
}

export default App;
