import React, {useState} from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine'

function App() {
  const [triggered, setTriggered] = useState('')

  const setAudio = (key) => {
    const audio = document.getElementById(key)
    setTriggered(audio.getAttribute('name'))
    audio.currentTime = 0
    audio.play()

  }
  
  const handleKeyPress = (e) => {
    let key = e.key.toUpperCase()
    switch(key){
        case "Q":
          setAudio(key)
          break
        case "W":
          setAudio(key)
          break
        case "E":
          setAudio(key)
          break
        case "A":
          setAudio(key)
          break
        case "S":
            setAudio(key)
            break
        case "D":
            setAudio(key)
            break
        case "Z":
            setAudio(key)
            break
        case "X":
            setAudio(key)
            break
        case "C":
            setAudio(key)
            break
    }
  }

  window.addEventListener("keydown", handleKeyPress)

  return (
    <div className="App" id="drum-machine">
      <DrumMachine triggered={triggered} setTriggered={setTriggered}/>

    </div>
  );
}


export default App;
