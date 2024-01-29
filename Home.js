import React from 'react'
import Navbar from './navbar';

const Home = () => {
 
  return (
    <div className='banner'>
    <Navbar/>
    <div className='home_contant'>
    
        <div className='container-1'>
        <div className='home_text'>
        <h3>Pizza Delveary</h3>
            <h1>ZABARDAST-PIZZA</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, ab soluta?  harum nemo laborum.</p>
            <div className='home_btn'>
                <button className='btn'>Delveary Now</button>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Home