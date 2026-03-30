import { useState } from 'react'
import './App.css'
import Check from './check.jsx';
function App() {
  const [activate, setActivate] = useState(false)

  return (
    <>
    <div style={{textAlign:"right"}}>
    ░█████╗░░█████╗░██╗░░░░░░█████╗░░█████╗░░██████╗<br/>
    ██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔════╝<br/>
    ███████║███████║██║░░░░░██║░░██║██║░░██║╚█████╗░<br/>
    ██╔══██║██╔══██║██║░░░░░██║░░██║██║░░██║░╚═══██╗<br/>
    ██║░░██║██║░░██║███████╗╚█████╔╝╚█████╔╝██████╔╝<br/>
    ╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝░╚════╝░░╚════╝░╚═════╝░<br/>
    </div>
    <button onClick={() => setActivate(true)} className='rounded border w-10'>hello</button>
    {activate && <Check/>}
    </>
  )
}

export default App
