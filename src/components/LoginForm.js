import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const LoginForm = ({setLogin}) => {
  return (
    <div className='btn-div'>
    <p onClick={() => setLogin(false)}> <ArrowBackIosNewIcon  />Go Back</p>
    <TextField required className='mui-btn' color='primary' id="filled-basic" label="Username" variant="outlined" />
    <TextField required type='password' className='mui-btn' color='primary'id="filled-basic" label="Password" variant="outlined" />    
    <Button startIcon={<PersonIcon />} className='mui-btn' color='primary' variant='contained' size='large' style={{margin: "10px"}} >
        Login
    </Button>
    </div>
  )
}

export default LoginForm