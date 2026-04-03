import { motion } from "motion/react";
import './calculator.css';

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
        <motion.div drag initial={{ scale: 0.75 }} exit={{ scale: 0.25, opacity:0}} animate={{ scale: 1 }}  whileDrag={{boxShadow: "5px 5px 10px"}} dragMomentum={false} className="border [&,>*]:rounded-xl checker z-0 active:z-1">
            <div className="font-bold text-center font-['consolas'] bg-gray-500 text-white m-1 p-2">
                Calculator
                <button onClick={()=>setActivate(false)} className="float-right mr-2 hover:text-red-600 duration-200">⛌</button>
            </div>
            <div className="grid grid-cols-4 m-2 gap-1 *:rounded *:p-3 *:bg-gray-500 *:text-white *:text-2xl *:hover:shadow *:shadow-gray-500 *:active:shadow-none *:duration-250">
                <input className="col-span-4 bg-white! text-black! focus:border-amber-500! focus:outline-none!" id="display"></input>
                <div onClick={() => inputDisplay("+")} className="calcops">+</div>
                <div onClick={() => inputDisplay("-")} className="calcops">-</div>
                <div onClick={() => inputDisplay("*")} className="calcops">X</div>
                <div onClick={() => inputDisplay("/")} className="calcops">÷</div>
                <div onClick={() => inputDisplay(7)}>7</div>
                <div onClick={() => inputDisplay(8)}>8</div>
                <div onClick={() => inputDisplay(9)}>9</div>
                <div onClick={backspace} className="flex place-items-center! row-span-2 p-4.5!">⌫</div>
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