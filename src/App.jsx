import { useEffect, useState } from 'react'
import './App.css'
import Calculator from './calculator.jsx';
import Notepad from './notepad.jsx';
import Personalize from './personalize.jsx';
import { AnimatePresence,motion } from 'motion/react';
import { RetroGrid } from './components/ui/retro-grid';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from  '@/components/ui/slider';
import { Button } from  '@/components/ui/button';
import {Alert, AlertAction, AlertDescription, AlertTitle} from '@/components/ui/alert';
import { InfoIcon, Cog } from "lucide-react"
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
import { AnimatedShinyText } from './components/ui/animated-shiny-text.jsx';

function App() {
  const [dockShow, setDockShow] =useState(true);
  const [calcOpen, setCalcOpen] = useState(false);
  const [notepadOpen, setNotepadOpen] = useState(false);
  const [personalizeOpen, setPersonalizeOpen] = useState(false);
  const [bgColor, setbackground] = useState("rgba(255,215,0,1)");
  const [grid, setGrid] = useState(true);
  const [angle, setAngle] = useState(0);
  const [now,setNow]=useState(new Date());
  const [date, setDate] = useState(new Date());
  const options={weekday:'long', day:'numeric',month:'long',year:'numeric'}
  
  useEffect(() => {
    if (typeof bgColor === 'string' && !bgColor.includes("NaN"))
    {
      document.documentElement.style.setProperty('--background', bgColor);
    }
  }, [bgColor]);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setNow(new Date());
    }, 1000);
  }, []);

  return (
    <TooltipProvider>
    <div>
    {grid && <RetroGrid className='absolute top-0 bottom-0 z-[-1]' darkLineColor={bgColor} lightLineColor={bgColor} opacity={0.5} angle={angle}/>}
    <Menubar className="absolute w-full flex flex-row items-center justify-start z- rounded-none backdrop-blur text-white border-none">
    <MenubarMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <MenubarTrigger><Cog className='h-5 w-5 text-gray-100 hover:rotate-720 duration-200'/></MenubarTrigger>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          System Settings
        </TooltipContent>
      </Tooltip>
      <MenubarContent className="mx-1 backdrop-blur-xl bg-black/50 text-white outline-0">
        <MenubarGroup className=''>
          <MenubarItem onClick={()=>(dockShow==true)?setDockShow(false):setDockShow(true)}>{(dockShow==true)?"Hide ":"Show "}Dock</MenubarItem>
          <MenubarItem onClick={()=>(grid==true)?setGrid(false):setGrid(true)}>{(grid==true)?"Pause ":"Resume "}Animation</MenubarItem>
          <MenubarItem onClick={()=>(personalizeOpen==true)?setPersonalizeOpen(false):setPersonalizeOpen(true)}>Personalize</MenubarItem>
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
          <MenubarTrigger className="xl:ml-[85.5vw] ">{now.toLocaleTimeString()}</MenubarTrigger>
        </TooltipTrigger>
        <TooltipContent className='tracking-tight' side="left">
          Date and Time
        </TooltipContent>
      </Tooltip>
      <MenubarContent className="p-2 backdrop-blur-xl w-full text-center flex flex-col justify-center bg-black/50 text-white ">
        {now.toLocaleDateString('en-IN',options)}
        <Calendar className="rounded-xl" mode="single" selected={date} onSelect={setDate} />
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
  <AnimatePresence>
  <motion.div key="feature-alert" className="fixed z-50 xl:top-100"  initial={{ x: 100, opacity: 0, scale: 0, top: "100vh", right:"18vw" }} 
    animate={{ x: 0, opacity: 1, scale: 1, top:"90vh", right:"18vw" }} 
    transition={{ type: "spring", stiffness: 200, damping: 25 }}  >
    <Alert className="fixed hover:bg-black/70 duration-200 bg-black/50 text-white border-0 z-50 w-max backdrop-blur-2xl hover:scale-102 select-none">
      <InfoIcon/>
      <AlertTitle>New Feature!</AlertTitle>
      <AlertDescription className="text-md">
      <AnimatedShinyText>
          Check out the new Personalize App
      </AnimatedShinyText>
      </AlertDescription>
    </Alert>
  </motion.div>
  </AnimatePresence>
    <div style={{marginTop:"10px", fontSize:"10px", width:"350px", float:"right"}} className="pt-8 hover:scale-110 hover:mr-4 hover:drop-shadow-xs hover:drop-shadow-amber-300 duration-100 cursor-none"> 
      <span className="select-none bg-linear-to-r from-black to-[var(--background)]/90 text-transparent bg-clip-text ">
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
    <AnimatePresence >
      {personalizeOpen && <Personalize setActivate={ setPersonalizeOpen } setAngle={setAngle} angle={angle} setColor={setbackground} color={bgColor}/>}
    </AnimatePresence>
      
    <AnimatePresence>
    {dockShow && <motion.div initial={{opacity:0.5, scale:0.9}} animate={{opacity: 1, scale:1}} exit={{scale:0.25, opacity:0}} transition={{duration: 0.1}} className='flex flex-row items-center justify-center gap-x-5  absolute bottom-4  left-[27.5%] xl:left-[35%] md:w-[30vw] xl:w-[30vw] h-18.75 rounded-2xl shadow-xs *:hover:shadow-md *:hover:shadow-black shadow-black bg-black/50 hover:bg-black/60 duration-200 backdrop-blur-sm select-none *:flex *:items-center *:justify-center *:hover:scale-110 *:rounded-xl *:w-13 *:h-13 *:active:shadow-none *:active:scale-100'>
      
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
            <motion.div initial={{opacity:0.5, scale:0.8}} animate={{opacity: 1, scale:1}} className='text-3xl align-middle text-shadow-xs text-shadow-black bg-blue-300 duration-200 p-0 cursor-pointer' onClick={() => (notepadOpen == false ? setNotepadOpen(true) : setNotepadOpen(false))}>🗒️</motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notepad</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div initial={{opacity:0.5, scale:0.8}} animate={{opacity: 1, scale:1}} className='text-4xl flex flex-col align-middle bg-[#ffd700]/50 duration-200 pb-1 text-shadow-xs text-shadow-black cursor-pointer' onClick={() => (personalizeOpen == false ? setPersonalizeOpen(true) : setPersonalizeOpen(false))}>🎨</motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Personalize</p>
          </TooltipContent>
        </Tooltip>
    </motion.div> }
    </AnimatePresence>
    </div>
    </TooltipProvider>
  )
}

export default App
