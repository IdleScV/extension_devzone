import React, {useState, useRef, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import Button from '@material-ui/core/Button'
import Moment from 'react-moment'
import {FaFacebookMessenger, FaCopy, FaWhatsapp} from 'react-icons/fa'
import {BiCloset, BiSad, BiHappyHeartEyes, BiMailSend, BiSend} from 'react-icons/bi'
import {AiOutlineInfo, AiOutlineMeh} from 'react-icons/ai'
import {VscChromeClose} from 'react-icons/vsc'
import {CgCloseR} from 'react-icons/cg'
import {RiMailSendLine} from 'react-icons/ri'
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'
import {motion, AnimatePresence} from 'framer-motion'
function CurrentItem (){
    const [showPage, showPageSet] = useState("feedback")
    const [friendList, friendListSet] = useState(0)
    const [direction, directionSet] = useState(undefined)
    const [newCloset, newClosetSet] = useState(undefined)
    const [friendDetail, friendDetailSet] = useState(undefined)
    const [showFeedback, showFeedbackSet] = useState(false)
    const [showWaiting, showWaitingSet] = useState(false)
    const [showRequestFeedback, showRequestFeedbackSet] = useState(false)


    // focused on new textbox when rendered
    const closetInput = useRef(null)
    useEffect(() => {
        if(closetInput.current !== null){
            closetInput.current.focus()
        }
        return () => {
        }
    }, [newCloset])

    const handlePage = (page) => {
        if (showPage === page){        
            showPageSet("feedback")
            clearNewCloset()
        }else{
            closeFriendDetails()
            showPageSet(page)
        }
        
    }

    const handleNextFriendsRow = () => {
        friendListSet(friendList + 1)
        directionSet(1)
        closeFriendDetails()
    }

    const handlePrevFriendsRow = () => {
        friendListSet(friendList - 1)
        directionSet(-1)
        closeFriendDetails()
    }

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 350 : -350,
            opacity: 0
          };
        },
        center: {
        //   zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            // zIndex: 100,
            x: direction < 0 ? 350 : -350,
            opacity: 0
          };
        }
      };

    const clearNewCloset = () => {
        newClosetSet(undefined)
    }

    const handleFocus = (event) => {
        event.target.setAttribute('autocomplete', 'off');
    }

    const closeFriendDetails = () => {
        friendDetailSet(undefined)
        showFeedbackSet(false)
        showWaitingSet(false)
        showRequestFeedbackSet(false)
    }


    const handleFriendStatus = (friendData) => {
        console.log(friendData)
        closeFriendDetails()
        friendDetailSet(friendData)

        if(friendData.feedback){
            showFeedbackSet(true)
        }else if(friendData.sent ){
            showWaitingSet(true)
        }else{
            showRequestFeedbackSet(true)
        }
    } 

    // ! fetch request here
    const handleFeedbackRequest = (id) => {
    }

    // ! fetch request
    const handleRequestApp = (appName) => {
        console.log("Request App Share with:", appName)
        // trigger user share, 3 options
    }
    
    // ! fetch request
    const handleClosetChange = (closetData) => {
        console.log("Closet State change", closetData.name, "to =>", !closetData.state)
        // trigger closet state change
        // client side rendering of closet data change before fetch request is completed
        // fetch request
    }
    
    // ! fetch request
    const handleNewCloset = () => {
        console.log("create New Closet named:", newCloset)
        // make a fetch call and then add the new closet to data
        clearNewCloset()
    }






    let data = {
        // we can add other item description here
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81KkSJ5eotL._AC_SL1500_.jpg",
        itemURL: "https://www.amazon.com/T-fal-Ultimate-Anodized-Nonstick-Dishwasher/dp/B004WULC3I?ref_=Oct_DLandingS_D_91f9fae8_60&smid=ATVPDKIKX0DER",
        itemName: "T-fal Nonstick Dishwasher Safe Cookware Lid Fry Pan, 10-Inch, Black",
        itemNotes: "Great for eggs",
        closets: [
            {name: "Save for later", state: true},
            {name: "2021", state: true},
            {name: "2020", state: true},
            {name: "back to school", state: false},
            {name: "fieldtrip", state: false},
            {name: "summer", state: false},
            {name: "Item", state: false},
            {name: "winter collection", state: false},
            {name: "skinny", state: false},
            {name: "fat", state: false},
            {name: "summer", state: false},
            {name: "Item", state: false},
            {name: "winter collection", state: false},
            {name: "skinny", state: false},
            {name: "fat", state: false}
        ],
        friends: [
            {name: "John", img: "", id: 1, feedback: "alright!", review: "meh"},
            {name: "Dave", img: "", id: 2, feedback: "alright!", review: "good"},
            {name: "Lisa", img: "", id: 3, feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, risus eget tincidunt luctus, nisi nisl tristique ex, ultrices laoreet nibh tortor nec est.", review: "bad"},
            {name: "Susan", img: "", id: 4, sent: "waiting", time_sent: "2021-02-05T19:50:29+00:00" },
            {name: "Lauren", img: "", id: 5},
            {name: "John2", img: "", id: 6},
            {name: "Dave2", img: "", id: 7},
            {name: "Lisa2", img: "", id: 8},
            {name: "Susan3", img: "", id: 9},
            {name: "Laure4", img: "", id: 10},
            {name: "John2", img: "", id: 11},
            {name: "Dave2213", img: "", id: 12},
            {name: "Lisa22", img: "", id: 13},


        ]
    }

    return(
        <div  className="CurrentItem">
                <img src={data.imgUrl} alt={data.itemName} id="image"/>
                <div id="options">
                    <div id="features">
                        <IconButton  onClick={()=>handlePage("closet")} className="icon">
                            {showPage === "closet" ?
                                <VscChromeClose/> :
                                <BiCloset/>
                            }
                        </IconButton>
                            <div className="text">
                                {
                                    showPage === "feedback" ?
                                    "Feedback"
                                    :
                                    showPage === "info" ?
                                    "Info" :
                                    "Closets"
                                }                         
                            </div>
                        <IconButton onClick={()=>handlePage("info")} className="icon" >
                            {showPage === "info" ?
                                <VscChromeClose/> :
                                <AiOutlineInfo/>
                            }
                        </IconButton>
                    </div>
                        <div id="friends">  
                            <div className="friends-nav">
                                {friendList > 0 && 
                                    <IconButton onClick={handlePrevFriendsRow} id="prev" size="small"  ><MdNavigateBefore/></IconButton>
                                }
                                {(friendList + 1 ) * 5 < data.friends.length &&
                                    <IconButton onClick={handleNextFriendsRow} id="next" size="small" ><MdNavigateNext/></IconButton>
                                }
                            </div>
                            {/* !! Animate this */}
           
                            <AnimatePresence custom={direction} initial={false}>
                                <motion.div key={friendList}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="friends">
                                {data.friends.slice((friendList * 5), (friendList * 5) + 5).map((friend, i) =>
                                    <div 
                                        className="friend" 
                                        
                                    >
                                        {
                                            friend.feedback &&
                                            <div className="review" >
                                                {friend.review === "meh" && 
                                                    <AiOutlineMeh id="meh"/>
                                                }
                                                {friend.review === "good" && 
                                                    <BiHappyHeartEyes id="good"/>
                                                }
                                                {friend.review === "bad" && 
                                                    <BiSad id="bad"/>
                                                }
                                            </div>
                                        }
                                        {
                                            friend.sent &&
                                            <div className="review">
                                                {
                                                    friend.sent === "waiting" &&
                                                    <BiMailSend/>
                                                }
                                            </div>
                                        }
                                        <IconButton onClick={()=>handleFriendStatus(friend)}className="icon-button">
                                            <PersonIcon/> 
                                        </IconButton>
                                        
                                        <div className="name">{friend.name}</div>
                                    </div>
                                )}
                                </motion.div>
                            </AnimatePresence>
                    
                          

                            <div className="app-button">
                            <IconButton onClick={()=>{handleRequestApp("whatsapp")}}><FaWhatsapp/></IconButton>
                            <IconButton onClick={()=>{handleRequestApp("facebook")}}><FaFacebookMessenger/></IconButton>
                            <IconButton onClick={()=>{handleRequestApp("copylink")}}><FaCopy/></IconButton>
                            </div>
                        </div>
                    {/* Item Info */}
                    <AnimatePresence >
                    {
                        showPage === "info" &&
                        <motion.div id="info"
                            initial={{ x:350 }}
                            animate={{x:0}}
                            exit={{  x: 350 }}
                        >
                            <a href={data.itemURL}>Link</a>
                            <div>
                                {data.itemNotes}
                            </div>
                        </motion.div>
                    }
                    </AnimatePresence>
                    {/* Item Closet */}
                    <AnimatePresence >
                    {
                        showPage === "closet" &&
                        <motion.div id="closets"
                        initial={{ x: -350 }}
                        animate={{x:0}}
                        exit={{  x: -350 }}
                        >
                            <div className="closet add" onClick={()=>newClosetSet("")}>
                                        
                                        {newCloset === undefined ?
                                        <div className="name">+</div>  
                                        :
                                        <input id="textfield" 
                                            ref={closetInput} 
                                            value={newCloset} 
                                            onChange={(e) => newClosetSet(e.target.value)}
                                            onKeyDown={(e)=>{ 
                                                if (e.key === "Enter"){
                                                    handleNewCloset()
                                                }
                                            }}
                                            onFocus={handleFocus}
                                            ></input>                                   
                                        }
                            </div>
                            {newCloset !== undefined &&
                                <div className="closet submit" onClick={handleNewCloset}>Add</div>
                            }
                            {
                                data.closets.map(
                                    (closet, i) => 
                                    <div key={i} className={`closet ${closet.state === true ? "highlight" : "nohighlight"}`} onClick={()=>handleClosetChange(closet)}>
                                        <div className="name">{closet.name}</div>
                                    </div>
                                )
                            }
                        </motion.div>
                    }
                    </AnimatePresence>
                    {/* Friend Feedback */}
                    <AnimatePresence >
                        { friendDetail &&
                            <motion.div id="feedback"
                                key={friendDetail.id}
                                initial={{ y: 125, opacity: 0 }}
                                animate={{y:0, opacity: 1}}
                                exit={{  y: 125, opacity: 0 }}
                            >
                                <IconButton id="close" onClick={closeFriendDetails}>
                                    <CgCloseR />
                                </IconButton>
                                {
                                    showFeedback && 
                                        <div className="content feedback">
                                            <div className="emote">
                                                {friendDetail.review === "meh" && 
                                                            <AiOutlineMeh id="meh"/>
                                                        }
                                                {friendDetail.review === "good" && 
                                                            <BiHappyHeartEyes id="good"/>
                                                        }
                                                {friendDetail.review === "bad" && 
                                                            <BiSad id="bad"/>
                                                        }
                                            </div>
                                            <div className="text">
                                                {friendDetail.feedback}
                                            </div>
                                        </div>
                                }
                                {
                                    showWaiting &&
                                    <div className="content waiting">
                                            <div>
                                                <RiMailSendLine/>
                                            </div>
                                            <div>
                                                request sent <Moment fromNow date={friendDetail.time_sent}/>
                                            </div>
                                    </div>
                                }
                                {
                                    showRequestFeedback &&
                                    <div className="content request">
                                       <Button id="request" onClick={()=>handleFeedbackRequest(friendDetail.id)} endIcon={<BiSend/>}>
                                            Request Feedback from {friendDetail.name}
                                       </Button>
                                    </div>
                                }
                            </motion.div>
                        }
                    </AnimatePresence>
                    
                </div>
                
        </div>
    )
}

export default CurrentItem
