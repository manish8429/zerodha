import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Feed, PinDetail, CreatePin, Search } from '../components';
import './Pins.css'

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='Pins_top_div'>
      <div className="Pins_top_second_div">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}/>
      </div>
      <div className='Pins_Routes'>
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/category/:categoryId' element={<Feed />}/>
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user} />}/>
          <Route path='/create-pin' element={<CreatePin user={user} />}/>
          <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins;