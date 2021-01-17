import React from 'react'
// import {getState, updateState, clearState } from '../../util/chromeTools'
import IconButton from '@material-ui/core/IconButton';
import {FaSave, FaDoorOpen} from "react-icons/fa"
import HomeIcon from '@material-ui/icons/Home';
function Footer ({currentPage, currentPageSet}) {




    return(
        <div className="Footer">
 
            <IconButton onClick={()=>currentPageSet("currentItem")}className={`bottom-button ${currentPage === "currentItem" ? "highlight" : ""}`} name="currentItem">
                <FaSave onClick={()=>currentPageSet("currentItem")}  />
            </IconButton>
            <IconButton onClick={()=>currentPageSet("home")} className={`bottom-button ${currentPage === "home" ? "highlight" : ""}`} name="home">
                <HomeIcon onClick={()=>currentPageSet("home")} fontSize="large" />
            </IconButton>
            <IconButton onClick={()=>currentPageSet("closets")} className={`bottom-button ${currentPage === "closets" ? "highlight" : ""}`} name="closets">
                <FaDoorOpen onClick={()=>currentPageSet("closets")} />
            </IconButton>
            
        </div>
    )


}

export default Footer