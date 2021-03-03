import React from 'react'
import './Navbar'
import Navbar from './Navbar'

const Home = (props) => {
    const {
        user,
        handleLogout
    } = props;
    return (
        <div>
           <Navbar
               user = {user}
               handleLogout = {handleLogout}
           /> 
        </div>
    )
}

export default Home;
