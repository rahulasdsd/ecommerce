import React from 'react';
import { Carousel } from 'antd';
import './Home.css'
const App = () => (
  <Carousel 
    autoplay={true} 
    autoplaySpeed={3000} 
    arrows 
    infinite={true} // Enable infinite loop
    dots={true} // Ensure dots are visible if needed
  className='head'
  >
   
    <div>
      <img 
        src="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=80" 
        alt='aaaa' 
        className='image'
      />
    </div>
    <div>
      <img 
        src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1920&q=80" 
        alt='aaaa'  
         className='image'
      />
    </div>
    <div>
      <img 
        src="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=80" 
        alt='aaaa' 
         className='image'
      />
    </div>
    <div>
      <img 
        src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1920&q=80" 
        alt='aaaa'  
        className='image'
      />
    </div>
    
  </Carousel>
);

export default App;