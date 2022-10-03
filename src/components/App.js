import React from 'react'
import Courses from './Courses'
import { Header, Logo, BreadCrumb } from './Styles'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
      <Header>
        <Logo></Logo>
      </Header>
      <Router>
        <BreadCrumb>
          <Link to="/">HULT/courses</Link>
          </BreadCrumb>
          <Routes>
            <Route exact path="/" element={<Courses />} />
          </Routes>
      </Router>
    </div>
  )
}
export default App
