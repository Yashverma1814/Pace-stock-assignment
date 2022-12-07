import React from 'react'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export const LoginCard = () => {
  return (
    <div className='loginCardMain'>
        <div><img src="https://wallpaperaccess.com/full/3064766.jpg" alt="" className='topImage'/></div>
        <div className='cardContent'>
            <div className='welcomeHeading'>Welcome to Bardeen</div>
            <div className='loginSubHeading'>Let's log in to launch your automations</div>
            <div style={{marginBottom:'0.5rem'}}><TextField id="outlined-basic" label="Email Address" variant="outlined" className='loginInput'/></div>
            <div><TextField id="outlined-basic" label="Password" variant="outlined" type={'password'} className='loginInput'/></div>
            <div className='linkDiv'>
                <div className='create'>Create Account</div>
                <div className='forgot'>Forgot Password</div>
            </div>
            <div><button className='signInBtn'> <a href="/homepage"> Sign in </a></button></div>
            <div><button className='googleSignIn'><div><GoogleIcon /></div><div style={{paddingTop:'5px',marginLeft:'0.3rem'}}>Sign in with Google</div></button></div>
            <div><button className='githubSignIn'><div><GitHubIcon /></div><div style={{paddingTop:'5px',marginLeft:'0.3rem'}}>Sign in with Github</div></button></div>
        </div>
    </div>
  )
}
