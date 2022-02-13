import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import logo from '../content/ibbs-blue-8.png'
import Form from '../containers/Form'


function Main() {

    const [sideScreen,setSideScreen] = useState('home')


  return (
    
    
    <div className='main'>
    {sideScreen === 'home' ? <>
        <div className='main-login'>
            <div className='main-logo'>
            <img src={logo}/>
            <h4>Islamabad Best Bottle Services</h4>
        </div>

    <hr />

    <div className='btn-div'>
        <Button className='mui-btn' color='primary' variant='contained' size='large' style={{margin: "10px"}} onClick={() => {
            setSideScreen('form')
        }}>
            Order Form
        </Button>
        <Button className='mui-btn'  color='primary' variant='outlined' size='large' style={{margin: "10px"}} >
        Admin Login
        </Button>
    </div>

    <hr />

    <div className='copyright'>
        <h5>@copyright ibbs</h5>
        </div>
    </div> </> : <Form />}

    <div className='main-img'>
    </div> 

    </div> 
    
  )
}

export default Main