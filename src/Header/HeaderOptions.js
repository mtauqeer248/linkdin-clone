import React from 'react'
import './HeaderOption.css';
function HeaderOptions({ Avatar,Icon,title}) {
    return (
        <div className="headeroption">
            {Icon && <Icon className="headeroption__icon"/>}
            {Avatar&&(
                <Avatar className="headeroption__icon" img={Avatar}/>
    )}
        <h3 className="headeroption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions

