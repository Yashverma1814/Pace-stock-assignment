import React from 'react'
import { HeadCard } from '../components/homeComp/HeadCard'
import { HomePageNav } from '../components/homeComp/HomePageNav'
import { SubCard } from '../components/homeComp/SubCard'

export const HomePage = () => {
  return (
    <div className='homePageMain' >
        <div><HomePageNav /></div>
        <div className='partitionLine'></div>
        <div className='homePageSubMain'>
            <div><HeadCard /></div>
            <div className='subCardTop'>  
                <SubCard />
                <SubCard />
                <SubCard />
            </div>
        </div>
        <div className='partitionLine'></div>
        <div className='simpleArticlesMain'>Artikel Terbaru</div>
        <div className='simpleArticlesDiv'>
            <HeadCard />
            <HeadCard />
            <HeadCard />
            <HeadCard />
            <HeadCard />
            <HeadCard />
        </div>
    </div>
  )
}
