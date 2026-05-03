import { motion } from "motion/react";
import { X } from "lucide-react";
import "./notepad.css";

function Notepad({ setActivate })
{
    return(
        <motion.div layout drag dragMomentum={false} initial={{scale:0.75}} animate={{scale:1}} exit={{ scale: 0.25, opacity:0 }} whileDrag={{boxShadow: "0px 0px 10px"}} className="window z-0 overflow-auto m-5 mt-10  ">
            <div className="font-bold text-center font-['Inconsolata']  bg-gray-500 text-white m-1 p-2">
                Notepad
                <button onClick={()=>setActivate(false)} className="float-right mr-2 hover:text-black md:text-black duration-200 rounded-xl bg-red-500 xl:text-red-500 w-5 h-5 hover:shadow-xs hover:shadow-black/50"><X className="h-5 w-5"/></button>
            </div>
            <textarea className="text">
            </textarea>
        </motion.div>
    );
}
export default Notepad;