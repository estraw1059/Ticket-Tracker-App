import React from 'react'
import { NavBarProps } from '../Types'
import './NavBar.css';

export default function NavBar(navBarProps: NavBarProps) {
    const buttonClick = () => {
        console.log('Clicked');
    }
    return (
        <div className='NavBarContainer'>
            <div onClick={buttonClick} className='NavBarItem'>Ticket Tracker</div>
            <div onClick={buttonClick} className='NavBarItem'>Service</div>
            <div onClick={buttonClick} className='NavBarItem'>Hour Logs</div>
            <div  onClick={buttonClick}className='NavBarItem'> + </div>
        </div>
    )
}
