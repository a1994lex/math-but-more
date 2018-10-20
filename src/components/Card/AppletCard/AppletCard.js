import React from 'react';

import { LaunchButton } from '../..';
import type { MathRoute } from '../../../models/routeTypes';
import { Card } from '..';


type Props = {
    route: MathRoute
}
function AppletCard( props ) {
    return (
        <Card>
            <h3>{props.route.name}</h3>
            <LaunchButton route={props.route}/>
        </Card>
    );
}

export default AppletCard;
