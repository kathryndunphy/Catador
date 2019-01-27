import React, { Component } from "react";

export default class Secret extends Component {
    render() {
        return(
            
            <div>
                <div>
                    Secret Area... SHHHH!!
                </div>
                <div>
                    <button onClick={this.props.auth.logout}>Logout</button>
                </div>
            </div>
        )
    }
}