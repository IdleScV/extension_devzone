
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
function App() {
  const [currentPage, currentPageSet] = useState("currentItem")

  let pages = [<CurrentItem/>, <Home/>, <Closets/>]
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Landing/> */}
    
      <Header/>
      <div className="Content" >
        <AnimatePresence initial={false} exitBeforeEnter >
          {currentPage === "currentItem"  &&
            <CurrentItem/> }
        <AnimatePresence initial={false} >
        </AnimatePresence>
          {currentPage === "home" &&
            <Home/> }
        {/* <AnimatePresence initial={false} >
        </AnimatePresence> */}
          {currentPage === "closets" &&
            <Closets/> }
        </AnimatePresence>
      </div>
      <Footer currentPage={currentPage} currentPageSet={currentPageSet}/>
    </div>
  );
}

export default App;
