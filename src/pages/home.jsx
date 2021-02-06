import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import IconButton from '@material-ui/core/IconButton'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
function Home (){
    
    const [[direction, storeStartIndex], storeStartIndexSet] = useState([0 , 0])
    // const [direction, directionSet] = useState(0)
    const [currentIndex, currentIndexSet] = useState(0)
    
    useEffect(() => {
        currentIndexSet(storeStartIndex)

        return () => {
            
        }
    }, [storeStartIndex])

    const handleNextStore = () => {
        storeStartIndexSet([1, storeStartIndex + 1])
    
    }

    const handlePrevStore = () => {
        storeStartIndexSet([-1, storeStartIndex - 1])
       
    }

    const data = {
        stores: [
            {
                name: "Walmart",
                link: "https://www.walmart.com/",
                logo: "https://www.powellandmahoney.com/wp-content/uploads/2017/03/retailers-walmart-logo-1.png"
            },
            {
                name: "Urban Outfitters",
                link: "https://www.urbanoutfitters.com/",
                logo: "https://www.finelinetech.com/wp-content/uploads/URBAN-OUTFITTERS-logo-for-home-page.png"
            },
            {
                name: "Macy's",
                link: "https://www.macys.com/",
                logo: "https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png"
            },
            {
                name: "Converse",
                link: "https://www.converse.com/",
                logo: "https://cdn.mos.cms.futurecdn.net/h28ZaxtM5kqAGb7587qns-320-80.jpg"
            },
            {
                name: "Amazon",
                link: "https://www.amazon.com/",
                logo: "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            },
            {
                name: "Macy's",
                link: "https://www.macys.com/",
                logo: "https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png"
            },
            {
                name: "Converse",
                link: "https://www.converse.com/",
                logo: "https://cdn.mos.cms.futurecdn.net/h28ZaxtM5kqAGb7587qns-320-80.jpg"
            },
            {
                name: "Amazon",
                link: "https://www.amazon.com/",
                logo: "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            },
            {
                name: "Macy's",
                link: "https://www.macys.com/",
                logo: "https://cdn.mos.cms.futurecdn.net/kPTwCmCKYJUwGbDbRZr9MX.png"
            },
            {
                name: "Converse",
                link: "https://www.converse.com/",
                logo: "https://cdn.mos.cms.futurecdn.net/h28ZaxtM5kqAGb7587qns-320-80.jpg"
            },
        ]
    }

    return(
        <div  className="Home">
            <div id="header">
                Your Most Visited Stores
            </div>
            {
                storeStartIndex  > 0 &&
                <IconButton className="prevStore" size="small" onClick={handlePrevStore}>
                    <AiOutlineUp/>
                </IconButton>
            }
            <div id="stores">
            <AnimatePresence initial={false} custom={direction} >
                <motion.div
                    className="container"
                    custom={direction}
                    initial={{y: direction > 0 ? 75 : -75, zIndex: 20}}
                    animate={{y: 0,  opacity: 1, zIndex: 10}}
                    exit={{y: direction > 0 ? -75 : 75, opacity: 0, zIndex: 1}}
                    key={currentIndex}
                >
                    {
                        data.stores.slice(currentIndex, currentIndex + 5).map(
                            (store, i) => 
                                <motion.a 
                                    className="store"
                                    whileHover={{opacity: 0.4}}   
                                    transition={{duration: 0.05}}
                                    href={store.link}
                                    target="_blank"
                                >
                                    <img src={store.logo} id="store-image" alt={store.name}></img>
                                </motion.a>
                        )                      
                    }
                </motion.div>
            </AnimatePresence>  
            </div>
            {
                storeStartIndex + 5 < data.stores.length &&
                <IconButton className="nextStore" size="small" onClick={handleNextStore}>
                    <AiOutlineDown/>
                </IconButton>
            }
        </div>

    )
}

export default Home