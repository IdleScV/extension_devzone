import React from 'react'
import {motion} from 'framer-motion'

function Home (){
    const spring = {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    return(
        <motion.div className="Home"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 350 }}
        exit={{opacity: 0}}
        transition={{spring}}
        >
            This is Home Page
        </motion.div>
    )
}

export default Home