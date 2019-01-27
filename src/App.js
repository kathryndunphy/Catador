import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import CatadorRoller from "./containers/CatadorRoller/CatadorRoller";
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";

class App extends Component {
  render() {

    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound />;
        break;
      case "callback":
        mainComponent = <Callback />
        break;
      default:
        mainComponent = <NotFound />  
    }

    return (
      <div>
        <div>
          {mainComponent}
        </div>
        <div>
          <Layout>
            <CatadorRoller />
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
