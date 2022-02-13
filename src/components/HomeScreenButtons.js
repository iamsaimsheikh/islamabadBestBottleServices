 import React from 'react'
 import ListAltIcon from '@mui/icons-material/ListAlt';
 import PersonIcon from '@mui/icons-material/Person';
 import Button from '@material-ui/core/Button'
 
 const HomeScreenButtons = ({setSideScreen , setLogin}) => {



   return (
    <div className='btn-div'>
    
    <Button startIcon={<ListAltIcon />} className='mui-btn' color='primary' variant='contained' size='large' style={{margin: "10px"}} onClick={() => {
        setSideScreen('form')
    }}>
        Order Form
    </Button>
    <Button startIcon={<PersonIcon />} className='mui-btn'  color='primary' variant='outlined' size='large' style={{margin: "10px"}} onClick={() => {
        setLogin(true)
    }} >
    Admin Login
    </Button>
</div>
   )
 }
 
 export default HomeScreenButtons