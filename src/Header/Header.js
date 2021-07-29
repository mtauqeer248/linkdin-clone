import React from 'react'
import './Header.css';
import MYIMAGE from './icons/meimage.jpg'
import SearchIcon from '@material-ui/icons/Search';
import linkedin from './icons/linkedin.png'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <img src={linkedin} alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title=" My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={ChatIcon} title='Chat'/>
                <HeaderOptions Icon={NotificationIcon}title='Notification'/>
                <HeaderOptions avatar={MYIMAGE} title="me"/>
                            </div>
        </div>
    )
}

export default Header
