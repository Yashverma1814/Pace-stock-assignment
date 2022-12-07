import React from 'react'

export const HeadCard = (props) => {
  console.log(props.newsData)
  // I am trying to access the details but unable to access it.
  // console.log(props.newsData.title)
  return (
    <div className='headCardMain'>
        <div>
            <img className='cardImage' src="https://storage.googleapis.com/afs-prod/media/cc70ea1e4e56464996dac6871ee87e2c/3000.webp" alt="" />
            <div className='date'>2022-12-06</div>
            <div className='heading'>Ukraine leader defiant as drone strikes hit Russia again - The Associated Press</div>
            <div className='content'>KYIV, Ukraine (AP) Drones struck inside Russias border with Ukraine on Tuesday in the second day of attacks exposing the vulnerability of some of Moscows most important military sites, experts said</div>  
        </div>
    </div>
  )
}
