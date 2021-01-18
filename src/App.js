
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.scss';
import Login from './pages/login'
import Landing from './pages/landing'
import Header from './pages/header'
import CurrentItem from './pages/currentitem'
import Footer from './pages/footer'
import Closets from './pages/closets'
import Home from './pages/home'
import {AnimatePresence, motion} from 'framer-motion'
import { wrap } from "popmotion";
function App() {
  const [currentPage, currentPageSet] = useState("currentItem")
 
  let pages = [<CurrentItem/>, <Home/>, <Closets/>]


  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newPage) => {
    setPage([newPage, 
      newPage > page ? 1 : -1 
    ]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 350 : -350,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: direction > 0 ? 0 : 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 100,
        x: direction < 0 ? 350 : -350,
        opacity: 0
      };
    }
  };
  
  const imageIndex = wrap(0, pages.length, page);

  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Landing/> */}
    
      <Header/>
      <div className="Content-Box" >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="Content"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {pages[imageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer currentPage={currentPage} currentPageSet={currentPageSet} paginate={paginate}/>
    </div>
  );
}

export default App;
