import React from 'react'

const DrumPad = ({id, src, name, setTriggered}) => {

    const handlePlayClip = () => {
        setTriggered(name)
        const audio = document.getElementById(id)
        audio.currentTime = 0
        audio.play()
    }

    return (
        <div className="drum-pad" id={name} onClick={handlePlayClip}>
            <p>{id}</p>
            <audio src={src} className='clip' id={id} name={name}></audio>

        </div>
    )
}

export default DrumPad