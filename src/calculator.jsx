import { motion } from "motion/react";
import './calculator.css';
import { X } from 'lucide-react';
function inputDisplay(num){
    var display=document.getElementById("display");
    display.value+=num;
};

function backspace()
{
    var display=document.getElementById("display");
    var len=display.value.length;
    display.value=display.value.slice(0,len-1);
}
function clearDisplay()
{
    var display=document.getElementById("display");
    display.value="";
}
function result()
{
    var display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }
    catch{
        alert("Arithmetic Error.");
    }
}
function Calculator({ setActivate })
{
    return(
        <motion.div layout drag initial={{ scale: 0.75 }} exit={{ scale: 0.25, opacity:0}} animate={{ scale: 1 }}  whileDrag={{boxShadow: "5px 5px 10px"}} dragMomentum={false} className="flex flex-col absolute w-5xl items-center border [&,>*]:rounded-xl m-5 mt-10 checker">
            <div className="flex items-center justify-between w-[95%] font-bold font-['Inconsolata']  xl:h-9 bg-gray-500 text-white m-2 p-1 md:py-2 xl:p-2">
                <div className='pl-25'>Calculator</div>
                <button onClick={()=>setActivate(false)} className="float-right mr-2 hover:text-black duration-200 rounded-xl bg-red-500 xl:text-red-500 w-5 h-5 hover:shadow-xs md:text-black hover:shadow-black/50"><X className="h-5 w-5"/></button>
            </div>
            <div className="grid grid-cols-4 m-2 gap-1 *:rounded *:p-3 *:bg-gray-500 *:text-white *:font-bold *:xl:font-normal *md:text-xs *:lg:text-xl *:xl:text-2xl *:hover:shadow *:shadow-gray-500 *:active:shadow-none *:duration-250">
                <input className="col-span-4  bg-white! text-black! focus:border-amber-500! focus:outline-none!" id="display"></input>
                <div onClick={() => inputDisplay("+")} className="calcops">+</div>
                <div onClick={() => inputDisplay("-")} className="calcops">-</div>
                <div onClick={() => inputDisplay("*")} className="calcops">X</div>
                <div onClick={() => inputDisplay("/")} className="calcops">÷</div>
                <div onClick={() => inputDisplay(7)}>7</div>
                <div onClick={() => inputDisplay(8)}>8</div>
                <div onClick={() => inputDisplay(9)}>9</div>
                <div onClick={backspace} className="flex items-center justify-center row-span-2">⌫</div>
                <div onClick={() => inputDisplay(4)}>4</div>
                <div onClick={() => inputDisplay(5)}>5</div>
                <div onClick={() => inputDisplay(6)}>6</div>
                <div onClick={() => inputDisplay(1)}>1</div>
                <div onClick={() => inputDisplay(2)}>2</div>
                <div onClick={() => inputDisplay(3)}>3</div>
                <div onClick={clearDisplay} className="bg-red-500! hover:shadow-red-500! active:bg-white! active:text-red-500 duration-100! active:font-bold">C</div>
                <div onClick={() => inputDisplay(".")}>.</div>
                <div onClick={() => inputDisplay(0)}>0</div>
                <div onClick={result} className="col-span-2 bg-green-400! active:bg-white! active:text-green-400">=</div>
            </div>
        </motion.div>
    )
}

export default Calculator