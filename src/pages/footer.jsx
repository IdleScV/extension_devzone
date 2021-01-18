import React from 'react'
// import {getState, updateState, clearState } from '../../util/chromeTools'
import IconButton from '@material-ui/core/IconButton';
import {FaSave, FaDoorOpen} from "react-icons/fa"
import HomeIcon from '@material-ui/icons/Home';
function Footer ({currentPage, currentPageSet, paginate}) {




    return(
        <div className="Footer">
 
            <IconButton onClick={()=>paginate(0)} className={`bottom-button ${currentPage === "currentItem" ? "highlight" : ""}`} name="currentItem">
                <FaSave onClick={()=>paginate(0)}  />
            </IconButton>
            <IconButton onClick={()=>paginate(1)} className={`bottom-button ${currentPage === "home" ? "highlight" : ""}`} name="home">
                <HomeIcon onClick={()=>paginate(1)} fontSize="large" />
            </IconButton>
            <IconButton onClick={()=>paginate(2)} className={`bottom-button ${currentPage === "closets" ? "highlight" : ""}`} name="closets">
                <FaDoorOpen onClick={()=>paginate(2)} />
            </IconButton>
            
        </div>
    )


}

export default Footer