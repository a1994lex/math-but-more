import React, { Component } from "react";
import { AppletHeader } from "../../components";

type Props = {
    applet: Component
}
function AppletWrapper( props:Props ) {
        return (<div>
            <AppletHeader />
            <props.applet/>
        </div>)
}

export default AppletWrapper;
