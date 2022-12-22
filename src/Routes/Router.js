import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import About from '../Pages/About'
import SignIn from '../Pages/Auth/SignIn';
import SignUp from '../Pages/Auth/SignUp';
import HomePage from '../Pages/Home'
import Service from '../Pages/Service'


const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< HomePage />} />
          <Route exact path='/about' element={< About />} />
          <Route exact path='/services' element={< Service />} />
          <Route exact path='/login' element={< SignIn />} />
          <Route exact path='/register' element={< SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default Routers