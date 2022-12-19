import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import About from '../Pages/About'
import SignIn from '../Pages/Auth/SignIn';
import SignUp from '../Pages/Auth/SignUp';
import Contacts from '../Pages/Contacts'
import Support from '../Pages/Help'
import HomePage from '../Pages/Home'
import Service from '../Pages/Service'


const Routers = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={< HomePage />} />
          <Route exact path='/about' element={< About />} />
          <Route exact path='/support' element={< Support />} />
          <Route exact path='/contacts' element={< Contacts />} />
          <Route exact path='/services' element={< Service />} />
          <Route exact path='/login' element={< SignIn />} />
          <Route exact path='/register' element={< SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default Routers