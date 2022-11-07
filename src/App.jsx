import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Blog_Single from './Components/Blog_Single/Blog_Single'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog/:id' element={<Blog_Single />} />
        {/* <Route exact path='/Show/:productId' element={<ShowDetail />} /> */}

      </Routes>
    </>
  )
}

export default App