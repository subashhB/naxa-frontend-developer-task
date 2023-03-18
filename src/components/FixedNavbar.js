import React from 'react';
import { Link } from 'react-scroll';


const FixedNavbar = ({services}) => {
    console.log(services)
  return (
    <div className='fixed-nav'>
      <div className='services-navbar-items'>
        {services && services.map((service) => {
          return (
              <Link to={service.id.toString()} style={{marginRight: '20px'}} activeClass="active" smooth spy key={service.id}>{service.title}</Link>
          )
        })}
      </div>
    </div>
  );
}

export default FixedNavbar;
