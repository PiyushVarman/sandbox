import { motion } from "motion/react";
import './check.css';

function Check()
{
    return(
        <motion.div drag initial={{ scale: 0.75 }}  animate={{ scale: 1 }}  whileDrag={{boxShadow: "5px 5px 10px"}} dragMomentum={false} className="border rounded-xl checker">
            helloworld
        </motion.div>
    )
}

export default Check