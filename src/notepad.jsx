import { motion } from "motion/react";
import "./notepad.css";

function Notepad({ setActivate })
{
    return(
        <motion.div drag dragMomentum={false} initial={{scale:0.75}} animate={{scale:1}} exit={{ scale: 0.25, opacity:0 }} whileDrag={{boxShadow: "0px 0px 10px"}} className="window z-0 active:z-1 overflow-auto ">
            <div className="font-bold text-center font-['consolas'] bg-gray-500 text-white m-1  p-2">
                Notepad
                <button onClick={()=>setActivate(false)} className="float-right mr-2 hover:text-red-600 duration-200">⛌</button>
            </div>
            <textarea className="text">
            </textarea>
        </motion.div>
    );
}
export default Notepad;