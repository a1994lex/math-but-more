import React, { Component } from "react";
import { AppletHeader } from "../../components";

type Props = {
    applet: Component
}
export default class AppletWrapper extends Component<Props> {
    render() {
        return (<div>
            <AppletHeader />
            <this.props.applet/>
        </div>)
    }
}
