import React from 'react'
import logo from '../content/ibbs-blue-8.png'
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
  return (
    <div className='dashboard'>

        <div className='nav-bar'>
            <img src={logo} className='nav-logo' />
            <div className='nav-icon-grid'>
                <img src={<PersonIcon />} className='nav-icon' />
                <img src={<PersonIcon />} className='nav-icon' />
                <img src={<PersonIcon />} className='nav-icon' />
            </div>

        </div>

    </div>
  )
}

export default Dashboard