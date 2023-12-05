import React, { useState } from 'react';
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs/index.esm';
import { HiOutlineMenuAlt1 } from "react-icons/hi/index.esm";
import './dropdown.css';

function Dropdown() {
    const[nav, setNav] =  useState (false)
    const handleNav =() => setNav(!nav)
    return (
        <div className='Dropdown'> 
        <div className='logo'>
            
            <h2 className='Logo1'>
                <dv className='alf'>
                    <>Ec</>
                </dv>
                <dv className='alf1'>
                    <>o</>
                </dv>
                <dv className='alf2'>
                    <>Cart.</>
                </dv>
            </h2>
        </div>
        <div className='control'>
            <div className='humBurger'onClick={handleNav}>
                <HiOutlineMenuAlt1 className='icon'/>
            </div>
            <div> Categories</div>
            </div>
            <div className={nav? 'mobile-menu active':'mobile-menu'}>
                <ul className='mobile-nav'>
            <li>All</li>
            <li>Lentils</li>
            <li>Vegetables/Fruits</li>
            <li>Condiments/Spices</li>
            <li>Diary/Eggs/Chilled</li>
            <li>Dry Fruits</li>
            <li>Pasta/Rice</li>
            <li>Flour/Refined_Grains</li>
                </ul>
                <div className='social-icons'>
                    <BsFacebook className='icon'/>
                    <BsInstagram className='icon'/>
                    <BsTwitter className='icon'/>
                    <BsPinterest className='icon'/>
                    <BsYoutube className='icon'/>
                </div>
            </div >
        </div>
            
    )
}

export default Dropdown