import React, {createContext , useState, useEffect} from 'react'

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [admin,setAdmin] = useState({
        username:'',
        password:'',
        email:'',
        isLoggedIn:false
    })

    const logIn = (response) => {
        setAdmin({
            username: response.name,
            password: response.password,
            email:response.email,
            isLoggedIn: true
        })
    }

    const logOut = () => {
        setAdmin({
            username: '',
            password: '',
            isLoggedIn: false
        })
    }

    useEffect(()=>{
        setAdmin(admin)
    },[admin])



  return (
    <AdminContext.Provider value={{admin , logIn, logOut}} >
        {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider