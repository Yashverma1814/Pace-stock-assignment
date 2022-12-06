import React from 'react'
import TextField from '@mui/material/TextField';

export const LoginCard = () => {
  return (
    <div>
        <div>Welcome to Bardeen</div>
        <div>Let's log in to launch your automations</div>
        <div><TextField id="outlined-basic" label="Email Address" variant="outlined" /></div>
        <div><TextField id="outlined-basic" label="Password" variant="outlined" type={'password'}/></div>
        <div>
            <div>Create Account</div>
            <div>Forgot Password</div>
        </div>
        <div><button>Sign in</button></div>
        <div><button>Sign in with Google</button></div>
        <div><button>Sign in with Github</button></div>
    </div>
  )
}
