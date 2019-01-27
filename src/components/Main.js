import React, { Component } from "react";

export default class Main extends Component {
    render(){
        return(
            <div>
                <p className="App-intro">
                    Welcome {this.props.name}!<br/>
                    To get started, login. <a href="<Secret />">Click here</a>
                </p>

                {!this.props.auth.isAuthenticated() &&
                <div>
                    <hr/>
                        Please login first
                    <hr/>
                    <button onClick={this.props.auth.login}>login</button>
                </div>
                }
            </div>
        )
    }
}