import React, { Component } from "react";
import { AppletHeader } from "../../components";

export default class AppletWrapper extends Component {
    render() {
        return (<div>
            <AppletHeader />
            <this.props.child/>
        </div>)
    }
}
