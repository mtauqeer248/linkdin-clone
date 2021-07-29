import React,{useState,useEffect} from 'react'
import './Feed.css';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay'
import PostSection from './PostSection';
import { db } from './Firebase';
import firebase from 'firebase'
   function  Feed (){
       const [input, setInput] = useState('')
      const [posts , setPosts] = useState([])
useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc')
      .onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        )
    );
},[])
const sendPost =(e)=>{
    e.preventDefault()
db.collection('posts')
.add    ({
    name:'tauqi248',
    description:'helloby',
    message:input,
    photoUrl:'',
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
});
setInput('')
}
       return(
           <div className="feed">
               <div className="feed__inputcontainer">
                   <div className="feed__input">
                       <CreateIcon/>
                       <form>
                           <input  type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                           <button type="submit" onClick={sendPost} >Send</button>
                       </form>
                   </div>
                   <div className="feed__inputoptions">
                     <InputOptions title="Photo" Icon={ImageIcon} color='lightblue'
                     />
                     <InputOptions title="Event" Icon={EventNoteIcon} color='yellow'/>
                     <InputOptions title="Write article" Icon={CalenderViewDayIcon} color='blue'/>
                     <InputOptions title="Video" Icon={SubscriptionsIcon} color='red'/>
                   </div>
               </div>
               {/**post section */}
               {posts.map(({id , data:{name,description,message,photoUrl}})=>(
                        <PostSection
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        />
               ))}
        
           </div>
       )
   }
   export default Feed;