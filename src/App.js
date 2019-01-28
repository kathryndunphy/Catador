import React, { Component } from "react";

import Layout from './components/Layout/Layout';
import CatadorRoller from "./containers/CatadorRoller/CatadorRoller";
import Main from "./components/Authenticate/Main";
import Secret from "./components/Authenticate/Secret";
import NotFound from "./components/Authenticate/NotFound";
import Callback from "./components/Authenticate/Callback";

class App extends Component {
  render() {

    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? 
        <div>
          <div>
            <Secret {...this.props} />
          </div> 
          <div>
            <Layout>
              <CatadorRoller />
            </Layout>
          </div>
        </div> 
        : <NotFound />;
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
      </div>
    );
  }
}

  export default App;
