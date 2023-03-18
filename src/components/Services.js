import React from 'react'

const Services = ({services}) => {

  return (
    <div className='services'>
      <div className='container'>
        {services && services.map((service)=>{
          if(service.service_order %2 ===0){
            return(
            <div key={service.service_order} id={service.id} className="service-row">
              <div className='details-column'>
                <div className="icon">
                  <img src={service.photo}/>
                </div>
                <div className='service-title'>
                  <h1>{service.title}</h1>
                </div>
                <div className="description-1">
                  <div dangerouslySetInnerHTML={{ __html: service.description1 }}></div>
                </div>
                <div className="description-2">
                  <div dangerouslySetInnerHTML={{ __html: service.description2 }}></div>
                </div>
              </div>
              <div className='img-column' style={{marginLeft: '10%'}}>
                <img src={service.icon}/>
              </div>
            </div>)}
          else{
            return (
              <div key={service.service_order} id={service.id} className="service-row">
                <div className='img-column'>
                  <img src={service.icon}/>
                </div>
                <div className='details-column'>
                  <div className="icon">
                    <img src={service.photo}/>
                  </div>
                  <div className='service-title'>
                    <h1>{service.title}</h1>
                  </div>
                  <div className="description-1">
                    <div dangerouslySetInnerHTML={{ __html: service.description1 }}></div>
                  </div>
                  <div className="description-2">
                    <div dangerouslySetInnerHTML={{ __html: service.description2 }}></div>
                  </div>
                </div>
                
            </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Services