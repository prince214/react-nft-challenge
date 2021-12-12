import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

function Header() {
    return (
        <div className='header'>
            <div className='logo__container'>
                <img src={punkLogo} className='punkLogo' alt='logo' />
            </div>

            <div className='search__bar'>
                <div className='search__icon__container'>
                    <img src={searchIcon} alt="search icon" />
                </div>  
                <input className='search__input' placeholder='Collection, Items or Users ...' />
            </div>

            <div className='header__items'>
                <p>Drops</p>
                <p>MarketPlace</p>
                <p>Create</p>                
            </div>

            <div className='header__actions'>
                <div className='theme_switch_container'>
                    <img src={themeSwitchIcon} alt="theme switch icon" />
                    </div>               
            </div>

            <div className='login__button'>
                GET IN
            </div>
        </div>
    )
}

export default Header
