import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeadCard } from '../components/homeComp/HeadCard'
import { HomePageNav } from '../components/homeComp/HomePageNav'
import { SubCard } from '../components/homeComp/SubCard'

export const HomePage = () => {
  const [news,setNews] = useState([]);
  const fetchData = () => {
     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=60c46c95b83d473ba621e81143876595')
      .then((res)=>setNews(res.data.articles));
      
    }
  useEffect(()=>{
    fetchData();
  },[])
  


  return (
    <div className='homePageMain' >
        <div><HomePageNav/></div>
        <div className='partitionLine'></div>
        <div className='homePageSubMain'>
            <div><HeadCard /></div>
            <div className='subCardTop'>  
                <SubCard newsData={news}/>
                <SubCard />
                <SubCard />
            </div>
        </div>
        <div className='partitionLine'></div>
        <div className='simpleArticlesMain'>Artikel Terbaru</div>
        <div className='simpleArticlesDiv'>
            {news.map((el)=>{
              return <div>
                <HeadCard newsData = {el} />
              </div>
            })}
        </div>
    </div>
  )
}
