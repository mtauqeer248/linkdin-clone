import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebar.css";
import BackgroundImage from '../Header/icons/meimage.jpg'
function Sidebar() {

    const recentItem = (topic) => {
        <div className="sidebar__recentitems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
 }


    return (
        <div className="sidebar">
           
            <div className="sidebar__top">
                <img src={BackgroundImage} alt=""/>
          <Avatar className="sidebar__avatar"/>
          <h2>Tauqeer248</h2>
          <h4>Tauqeer248@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statnumber">2,134</p>
                </div>
                <div className="sidebar__stat">
                <p>views on post</p>
                    <p className="sidebar__statnumber">2,448</p>
                </div>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('desinging')}
                    {recentItem('javascript')}
                    {recentItem('pythan')}
                </div>

        
        </div>
    )
}

export default Sidebar
