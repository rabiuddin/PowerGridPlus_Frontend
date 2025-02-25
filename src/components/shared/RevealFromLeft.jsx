import React, {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

  return (
    <div ref = {ref} className='w-full'>
        <motion.div
            variants={{
                hidden: {opacity: 0, x: -75},
                visible: {opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal