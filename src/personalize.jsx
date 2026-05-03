import './personalize.css';
import { motion } from "motion/react";
import { Slider } from  '@/components/ui/slider';"use client";
import { X } from 'lucide-react';
import {
  ColorPicker,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/kibo-ui/color-picker";
import { BadgeCent } from 'lucide-react';
import { ColorPickerAlpha } from './components/kibo-ui/color-picker';

function Personalize({setActivate,setAngle,angle, color, setColor}){
    const handlecolorchange = (colorData) => {
        if (!colorData) return;

        var rgbaString;

        if (Array.isArray(colorData)) {
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
    <motion.div dragMomentum={false} initial={{scale:0.75}} animate={{scale:1}} exit={{ scale: 0.25, opacity:0 }} whileDrag={{boxShadow: "0px 0px 10px"}} className="[&,>*]:font-['Inconsolata'] windowpers flex flex-col z-2! overflow-auto">
            <div className="font-bold text-center font-['Inconsolata']  bg-gray-500 text-white m-1 p-2">
                Personalize
                <button onClick={()=>setActivate(false)} className="float-right mr-2 hover:text-black duration-200 rounded-xl bg-red-500 md:text-black xl:text-red-500 w-5 h-5 hover:shadow-xs hover:shadow-black/50"><X className="h-5 w-5"/></button>
            </div>
            <div onPointerDown={(e) => e.stopPropagation()} className="xl:w-2xl h-[45vh] w-[50vw] xl:h-[30vh] shadow-xl shadow-black/20 m-auto flex flex-col items-center align-middle justify-center gap-y-10 xl:gap-x-10 text-white backdrop-blur-xl ">
                <div className="flex flex-col xl:flex-row items-center  gap-x-12 ">
                    <p className='w-40 xl:text-left font-bold text-md'>Animation Angle</p>
                    <div className='flex flex-col xl:flex-row items-center align-middle  gap-x-2'>
                        <Slider className="m-1 mb-2 rounded bg-black w-60 h-1 " defaultValue={[angle]} max={90} step={1} onValueChange={(value) => setAngle(value)}/>
                        <p className='w-5 pb-1'>{angle}°</p>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row  gap-x-29 items-center">
                    <div className='flex flex-col justify-center'>
                        <p className='w-full xl:text-left text-md font-bold'>System Color</p>
                    </div>
                    <div>
                        <ColorPicker className="max-w-sm p-0 shadow-black/90" onChange={handlecolorchange}>
                        
                        <div className="flex">
                            <div className="grid w-full gap-1">
                                <ColorPickerHue />
                                <ColorPickerAlpha/>
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