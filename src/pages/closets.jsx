import React from 'react'
import {motion} from 'framer-motion'
function Closets (){
    const spring = {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    return(
        <motion.div className="Closets"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 350 }}
        exit={{opacity: 0}}
        transition={{spring}}
        >
            This is Closets Page
        </motion.div>
    )
}

export default Closets