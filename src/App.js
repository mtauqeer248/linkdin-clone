import React from 'react'
import './App.css';
import Feed from './Feed/Feed';
import {  useSelector } from 'react-redux'
import Header from './Header/Header';
import Sidebar from './sidebar/Sidebar'
import { selectUser } from './store/userSlice';
import Login from './Login'
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {/**Header**/}
      <Header />
      
      {!user ?
        (<Login />) : (


          <div className="app__body">
            {/***sidebar***/}
            <Sidebar />
            {/***Feed */}
            <Feed />
          </div>
        )}
    

    </div>
  );
}

export default App;
