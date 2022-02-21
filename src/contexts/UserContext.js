import React, {createContext , useState, useEffect} from 'react'
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [user,setUser] = useState([])

    const getUser = async () => {
        const response = await axios.get('http://localhost:8000/user')
        .then( res => {
            setUser(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    }


    useEffect(()=>{
        getUser()
    },[])



  return (
    <UserContext.Provider value={{user}} >
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider