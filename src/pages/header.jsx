import React from 'react'
import {IoMail} from 'react-icons/io5'

function Header(){

    const data = {
        notifications: 100,
        firstname: "Elon Musk",
        propic: "https://i.imgur.com/CNhZzYY.jpg",
        specialtext: ""
    }

    return(
        <div className="Header">
            
            <IoMail className="notif" />
            <div className="badge">
                    {data.notifications > 99 ? 
                        <>
                            <div className="count">99</div>
                            <div className="excess">+</div>
                        </> :
                        <div className="count">{data.notifications}</div>
                    }
            </div>
            <div className="center">
                {data.specialtext}
            </div>
            <div className="nametag">
                {data.firstname}
            </div>
            <img src={data.propic} className="profile"/>
            
        </div>
    )
}

export default Header