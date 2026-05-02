import './personalize.css';
import { motion } from "motion/react";
import { Slider } from  '@/components/ui/slider';"use client";
import {
  ColorPicker,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/kibo-ui/color-picker";

function Personalize({setActivate,setAngle,angle, color, setColor}){
    const handlecolorchange = (colorData) => {
        if (!colorData) return;

        var rgbaString;

        if (Array.isArray(colorData)) {
        // Check for NaN before setting
        const [r, g, b, a] = colorData;
        if (!isNaN(r) && !isNaN(g)) {
            rgbaString = `rgba(${r}, ${g}, ${b}, ${a ?? 1})`;
        }
        } else if (typeof colorData === 'string') {
        rgbaString = colorData;
        }

        if (rgbaString && !rgbaString.includes("NaN")) {
        setColor(rgbaString);
        }
    };

    return(
        <>
        <motion.div drag layout dragMomentum={false} initial={{scale:0.75}} animate={{scale:1}} exit={{ scale: 0.25, opacity:0 }} whileDrag={{boxShadow: "0px 0px 10px"}} className="window flex flex-col z-0 overflow-auto m-5 mt-10  ">
            <div className="font-bold text-center font-['Inconsolata']  bg-gray-500 text-white m-1 p-2">
                Personalize
                <button onClick={()=>setActivate(false)} className="float-right mr-2 hover:text-red-600 duration-200">⛌</button>
            </div>
            <div onPointerDown={(e) => e.stopPropagation()} className="w-2xl outline m-auto flex flex-col items-center align-middle justify-center gap-x-10 h-50 text-white backdrop-blur-xl">
                <div className="flex flex-row items-center gap-x-30">
                    <p>Animation Angle</p>
                    <div className='flex flex-row items-center'>
                        <Slider className="m-1 mb-2 rounded bg-black w-50 h-1 " defaultValue={[angle]} max={90} step={1} onValueChange={(value) => setAngle(value)}/><p>{angle}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-50 items-center">
                    <div>
                    <p>Background Color</p>
                    </div>
                    <div>
                    <ColorPicker className="max-w-sm rounded-md  p-4 shadow-sm shadow-black/90" value={color} onChange={handlecolorchange}>

                    <div className="flex items-center gap-4">
                    
                    <div className="grid w-full gap-1">
                        <ColorPickerHue />
                    </div>
                    </div>
                    <div className="flex items-center gap-2">
                    <ColorPickerFormat/>
                    </div>
                    </ColorPicker>
                    </div>
                </div>
                </div>
        </motion.div>
        </>
    )

} export default Personalize