import './App.css';
import Main from './containers/Main';
import Dashboard from './containers/Dashboard'
import AdminContextProvider from './contexts/AdminContext';
import UserContextProvider from './contexts/UserContext';
import {  BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {

  return (

    <Router>

      <AdminContextProvider>
      <UserContextProvider>

        <Routes>

          <Route path='/' element={<Main/>} />
          <Route path='/dashboard' element={<Dashboard />} />

        </Routes>

      </UserContextProvider>
      </AdminContextProvider>

    </Router>

  );
}

export default App;
