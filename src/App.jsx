import { useEffect, useState } from 'react'
import './App.css'
import Calculator from './calculator.jsx';
import Notepad from './notepad.jsx';
import { AnimatePresence,motion } from 'motion/react';
import { RetroGrid } from './components/ui/retro-grid';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from  '@/components/ui/slider';

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Menu } from 'lucide-react';

function App() {
  const [dockShow, setDockShow] =useState(true);
  const [calcOpen, setCalcOpen] = useState(false);
  const [notepadOpen, setNotepadOpen] = useState(false);
  const [grid, setGrid] = useState(true);
  const [angle, setAngle] = useState(0);
  const [now,setNow]=useState(new Date());
  const [date, setDate] = useState(new Date());
  const options={weekday:'long', day:'numeric',month:'long',year:'numeric'}

  useEffect(()=>{
    const timer = setInterval(()=>{
      setNow(new Date());
    }, 1000);
  }, []);

  return (
    <TooltipProvider>
    <div>
    {grid && <RetroGrid className='absolute top-0 bottom-0 z-[-1]' darkLineColor="#ffd700" lightLineColor="#ffd700" opacity={0.5} angle={angle}/>}
    <Menubar className="absolute w-full flex flex-row items-center justify-start z- rounded-none backdrop-blur text-white border-none">
    <MenubarMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <MenubarTrigger>🥔</MenubarTrigger>
        </TooltipTrigger>
        <TooltipContent className='text-[#ffd700]!' side='bottom'>
          AaloOS
        </TooltipContent>
      </Tooltip>
      <MenubarContent className="mx-1 backdrop-blur-xl bg-black/50 text-white">
        <MenubarGroup>
          <MenubarItem onClick={()=>(dockShow==true)?setDockShow(false):setDockShow(true)}>{(dockShow==true)?"Hide ":"Show "}Dock</MenubarItem>
          <MenubarItem onClick={()=>(grid==true)?setGrid(false):setGrid(true)}>{(grid==true)?"Pause ":"Resume "}Animation</MenubarItem>
          <MenubarItem>Animation Angle: {angle}<br/></MenubarItem><Slider className="m-1 mb-2 rounded bg-black w-30" defaultValue={[angle]} max={90} step={1} onValueChange={(value) => setAngle(value)}/>
          <hr className="w-full my-1 flex justify-center" />
          <MenubarItem onClick={() => window.open("https://github.com/PiyushVarman/sandbox", "_blank","noreferrer")}>
            Source Code
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Applications</MenubarTrigger>
      <MenubarContent className="backdrop-blur-xl bg-black/50 text-white ">
        <MenubarGroup >
          <MenubarItem  onClick={() => {calcOpen ? setCalcOpen(false) : setCalcOpen(true)}}>
            {calcOpen ? "Close" : "Open"} Calculator
          </MenubarItem>
          <MenubarItem onClick={() => {notepadOpen ? setNotepadOpen(false) : setNotepadOpen(true)}}>
            {notepadOpen ? "Close":"Open"} NotePad
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <MenubarTrigger className="float-right">{now.toLocaleTimeString()}</MenubarTrigger>
        </TooltipTrigger>
        <TooltipContent className='tracking-tight!'>
          Date and Time
        </TooltipContent>
      </Tooltip>
      <MenubarContent className="p-2 backdrop-blur-xl w-full text-center flex flex-col justify-center bg-black/50 text-white ">
        {now.toLocaleDateString('en-IN',options)}
        <Calendar className="rounded-xl" mode="single" selected={date} onSelect={setDate} />
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
    <div style={{marginTop:"10px", fontSize:"10px", width:"350px", float:"right"}} className="pt-8 hover:scale-110 hover:mr-4 hover:drop-shadow-xs hover:drop-shadow-amber-300 duration-100 cursor-none"> 
      <span className="select-none bg-linear-to-r from-black to-[#ffd700]/90 text-transparent bg-clip-text ">
      ░█████╗░░█████╗░██╗░░░░░░█████╗░░█████╗░░██████╗<br/>
      ██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗██╔════╝<br/>
      ███████║███████║██║░░░░░██║░░██║██║░░██║╚█████╗░<br/>
      ██╔══██║██╔══██║██║░░░░░██║░░██║██║░░██║░╚═══██╗<br/>
      ██║░░██║██║░░██║███████╗╚█████╔╝╚█████╔╝██████╔╝<br/>
      ╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝░╚════╝░░╚════╝░╚═════╝░<br/>
    </span>
    </div>
    <AnimatePresence>
      {calcOpen && <Calculator setActivate={ setCalcOpen }/>}
    </AnimatePresence>
    <AnimatePresence >
      {notepadOpen && <Notepad setActivate={ setNotepadOpen }/>}
    </AnimatePresence>
      
    <AnimatePresence>
    {dockShow && <motion.div initial={{opacity:0.5, scale:0.9}} animate={{opacity: 1, scale:1}} exit={{scale:0.25, opacity:0}} transition={{duration: 0.1}} className='flex flex-row items-center justify-center gap-x-5  absolute bottom-4 left-[35%] w-[30vw] h-[75px] rounded-2xl shadow-xs *:hover:shadow-md *:hover:shadow-black shadow-black bg-black/50 hover:bg-black/60 duration-200 backdrop-blur-sm select-none *:flex *:items-center *:justify-center *:hover:scale-110 *:rounded-xl *:w-13 *:h-13 *:active:shadow-none *:active:scale-100'>
      
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div initial={{opacity:0.5, scale:0.8}} animate={{opacity: 1, scale:1}} className='outline text-s align-middle bg-white duration-200 p-0 cursor-pointer' onClick={() => (calcOpen == false ? setCalcOpen(true) : setCalcOpen(false))}>➕➖<br/>✖️➗</motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Calculator</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div initial={{opacity:0.5, scale:0.8}} animate={{opacity: 1, scale:1}} className='text-3xl align-middle bg-blue-300 duration-200 p-0 cursor-pointer' onClick={() => (notepadOpen == false ? setNotepadOpen(true) : setNotepadOpen(false))}>🗒️</motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notepad</p>
          </TooltipContent>
        </Tooltip>
    </motion.div> }
    </AnimatePresence>
    </div>
    </TooltipProvider>
  )
}

export default App
