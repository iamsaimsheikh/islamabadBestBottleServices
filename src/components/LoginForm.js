import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AdminContext } from '../contexts/AdminContext';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom'
import axios from 'axios';



const LoginForm = ({setLogin}) => {

  const {admin , logIn, logOut} = useContext(AdminContext);
  const {user} = useContext(UserContext)
  console.log(user)


  const [userInfo,setUserInfo] = useState({

      password:'',
      email:''

  })

  const [loggedIn , setLoggedIn ] = useState(admin.isLoggedIn);


 



  const onChange = (e) => {
    const value = e.target.value;

    setUserInfo({
        ...userInfo,
        [e.target.name] : value})
}

  const getAdmin = async () => {
    const response = await axios.post('http://localhost:8000/admin/login', userInfo)
    .then(res => {
      logIn(res.data)
      setLoggedIn(true)
    })
    .catch(err => {
      console.log(err.response);
    })
    
    
    

  }


  return (

    <>

    {loggedIn === true ? <Navigate to='/Dashboard'/> :
    
    <div className='btn-div'>
    <p onClick={() => setLogin(false)}> <ArrowBackIosNewIcon  />Go Back</p>
    <TextField required className='mui-btn' color='primary' id="filled-basic" label="Email" variant="outlined" name='email' onChange={onChange} value={userInfo.email}/>
    <TextField required type='password' className='mui-btn' color='primary'id="filled-basic" label="Password" variant="outlined" name='password' onChange={onChange} value={userInfo.password} />    
    <Button onClick={getAdmin} startIcon={<PersonIcon />} className='mui-btn' color='primary' variant='contained' size='large' style={{margin: "10px"}} >
        Login
    </Button>
    </div>

    }

    

    </>
  )
}

export default LoginForm