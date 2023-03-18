import React from 'react'

const Banner = () => {
  return (
    <div className='container'>
        <h2 style={{color: '#ffdc1c', fontSize: '1.25 rem'}}>SERVICES</h2>
        <h1 style={{color: '#333132', marginBottom: '40px'}}>At  
            <span style={{color: '#124af4'}}> NAXA</span>
            , we work on
            <span style={{color: '#124af4'}}> ideas</span>
            ; ideas<br/> that can provide 
            <span style={{color: '#124af4'}}> simple solutions </span>
            to
            <span style={{color: '#124af4'}}> complex problems </span>
        </h1>
        <h4 style={{marginRight: '50%'}}>
          We work as a team to generate, explore, build and validate ideas. We also contextualize innovations around the world to find the best fitting solutions to local problems.
        </h4>
        
    </div>
  )
}

export default Banner