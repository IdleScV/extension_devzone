import React, {useState} from 'react'
import {FaGoogle, FaFacebookSquare} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import logo from '../assets/Asset 1.png'
import {motion, AnimatePresence} from 'framer-motion'

import {useForm} from 'react-hook-form';

function Landing (){
    const [emailLogin, emailLoginSet] = useState(false)
    const [signup, signupSet] = useState(false)
    const {register, handleSubmit,  errors} = useForm()
    const [error, errorSet] = useState(undefined)

    const onSubmit = (data) => {
        if(emailLogin){
            console.log("email login with data", {email: data.email, password: data.password})
        }else if(signup){
            console.log("signup with data", {firstname: data.firstname, lastname: data.lastname, email: data.email, phone: data.phone, password: data.password})
        }
    }

    return(

        <div className="Landing">
            <img className="logo" src={logo} alt="rexLogo"  onClick={()=>{signupSet(false); emailLoginSet(false)}}/>
            <AnimatePresence>
            {
                emailLogin &&
                <motion.div className="email-login-popup"
                    animate={{ x:0}}
                    initial={{ x: 350 }}
                    exit={{ x: 350 }}
                    transition={{ type: "spring", stiffness: 1000, damping: 100 }}
                >
                    <div className="close-popup" onClick={()=>{emailLoginSet(false)}}></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <TextField name="email" label="EMAIL" inputRef={register}></TextField>
                        <TextField type="password" name="password" label="PASSWORD" inputRef={register}></TextField>
                        <Button  type="submit" className='login-button'  > LOGIN </Button >
                    </form>
                    
                </motion.div>
            }
            </AnimatePresence>
            <AnimatePresence>
            {
                signup &&
                <motion.div className="signup-popup"
                    animate={{ y: 0, height: 320 }}
                    initial={{ y: 400, height: 0 }}
                    exit={{  x:-350 }}
                    transition={{ type: "spring", stiffness: 1000, damping: 100 }}
                >
                    <div onClick={()=>{signupSet(false)}} className="close-popup"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
                        <div className="name">
                            <TextField className="input-left" name="firstname" label="FIRST NAME" inputRef={register}></TextField>
                            <TextField className="input-right" name="lastname" label="LAST NAME" inputRef={register}></TextField>
                        </div>
                        <TextField className="input"  name="email" label="EMAIL" inputRef={register}></TextField>
                        <TextField className="input"  name="phone" label="PHONE" inputRef={register}></TextField>
                        <TextField className="input"  type="password" name="password" label="PASSWORD" inputRef={register}></TextField>
                        <Button  type="submit" className='login-button'> SIGNUP </Button >
                    </form>
                    <div className="error-box">{error && error}</div>
                </motion.div>
            }
           </AnimatePresence>
            <div className="buttons">
                <div className="login">
                    <Button className="email login-button" startIcon={<HiOutlineMail/>} onClick={()=>{emailLoginSet(true); signupSet(false)}}>Login with Email</Button>
                    <Button className="fb login-button" startIcon={<FaFacebookSquare/>}>  Login with Facebook</Button>
                    <Button className="google login-button" startIcon={<FaGoogle/> }> Login with Google</Button>
                </div>
                <div className="signup">
                    <div onClick={()=>emailLoginSet(false)}>Don't have an account?</div>
                    <Button className="signup-button" onClick={()=>{signupSet(true); emailLoginSet(false)}}>Sign-up</Button>
                </div>
            </div>
        </div>

    )
}

export default Landing