import React from 'react'

import DrumPad from './DrumPad'

import { padData } from '../resources/padData'

const DrumMachine = ({triggered, setTriggered}) => {
    return (
        <div id="display">
            {padData.map(pad => {
                return <DrumPad id={pad.id} src={pad.src} key={pad.id} name={pad.name} setTriggered={setTriggered}/>
                })
            }
            <p>{triggered}</p>
        </div>
    )
}

export default DrumMachine