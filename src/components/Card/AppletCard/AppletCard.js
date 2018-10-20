import React from 'react';

import { Card } from '..';
import { LaunchButton, SubjectTag, TypeTag } from '../..';
import type { MathRoute } from '../../../models/routeTypes';
import logo from "../../../logo.svg"

import "./AppletCard.css"


type Props = {
    route: MathRoute
}
function AppletCard( props:Props ) {
    //TODO: use actual description, thumbnail, tags, and tag callbacks
    return (
        <Card>
            <h3>{props.route.name}</h3>
            <div className="AppletCard-desc-and-thumb">
                <img src={logo} alt={props.route.name} className="AppletCard-thumb"/>
                <div className="AppletCard-desc">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
            </div>
            <div className="AppletCard-button-and-tags">
                <div className="AppletCard-tags">
                    <TypeTag
                        type={TypeTag.TYPE_GAME}
                        onClick={()=>console.log("subject clicked")}
                    />
                    <SubjectTag
                        subject="mySubject"
                        onClick={()=>console.log("subject clicked")}
                    />
                </div>
                <LaunchButton route={props.route}/>
            </div>
        </Card>
    );
}

export default AppletCard;
