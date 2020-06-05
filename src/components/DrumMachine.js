import React from 'react'

import DrumPad from './DrumPad'

import { padData } from '../resources/padData'

const DrumMachine = ({triggered, setTriggered}) => {
    return (
        <div id="display">
            <div className='padsdisplay'>
                {padData.map(pad => {
                    return <DrumPad id={pad.id} src={pad.src} key={pad.id} name={pad.name} setTriggered={setTriggered}/>
                    })
                }

            </div>
            <p className='triggered'>{triggered}</p>
        </div>
    )
}

export default DrumMachine