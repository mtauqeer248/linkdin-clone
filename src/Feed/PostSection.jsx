import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import ThumbUpAllOutLinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutLinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutLinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutLinedIcon from '@material-ui/icons/SendOutlined'
import './PostSection.css'
function PostSection({name,description,message,photoUrl }) {
    return (
        <div className="post">
             <div className='post__header'>
                 <Avatar/>
                 <div className="post__info">
                     <h2>{name}</h2>
                     <p>{description}</p>
                 </div>
             </div>
             <div className="post__body">
                 <p>{message}</p>

             </div>
             <div className="post__buttons">
                 <InputOptions Icon={ThumbUpAllOutLinedIcon} title="Like"color="gray"/>
                 <InputOptions Icon={ChatOutLinedIcon} title="comment"color="gray"/>
                 <InputOptions Icon={ShareOutLinedIcon} title="share"color="gray"/>
                 <InputOptions Icon={SendOutLinedIcon} title="send"color="gray"/>
             </div>
        </div>
    )
}

export default PostSection;
