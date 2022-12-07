import React from 'react'
import ExplicitIcon from '@mui/icons-material/Explicit';


export const HomePageNav = () => {
  return (
    <div>
        <div className='navMain'>
            <div><a href="/homepage" ><ExplicitIcon /></a></div>
            <div><a href="/homepage" className='navLinks'>LEARN</a></div>
            <div><a href="/homepage" className='navLinks'>BLOG</a></div>
            <div><a href="/homepage" className='navLinks'>BOOKMARKS</a></div>
            <div><a href="/homepage" className='navLinks'>US KIT</a></div>
        </div>
    </div>
  )
}

