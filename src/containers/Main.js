import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import logo from '../content/ibbs-blue-8.png'
import Form from '../containers/Form'

import HomeScreenButtons from '../components/HomeScreenButtons';
import LoginForm from '../components/LoginForm';


function Main() {

    const [sideScreen,setSideScreen] = useState('home')
    const [login,setLogin] = useState(false)


  return (
    
    
    <div className='main'>
    {sideScreen === 'home' ? <>
        <div className='main-login'>
            <div className='main-logo'>
            <img src={logo}/>
            <h4>Islamabad Best Bottle Services</h4>
        </div>

    <hr />

   {login === false ? <HomeScreenButtons setSideScreen={setSideScreen} setLogin={setLogin}/> : <LoginForm setLogin={setLogin} />} 
    
    

    <div className='copyright'>
        <h5>@copyright ibbs</h5>
        </div>
    </div> </> : <Form setSideScreen={setSideScreen}/>}

    <div className='main-img'>
    </div> 

    </div> 
    
  )
}

export default Main