import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';
import './masonylayout.css'


const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonryLayout = ({ pins }) => {

  return (
    <Masonry className='Masonry' breakpointCols={breakpointObj}>
      {pins?.map((pin) => <Pin key={Pin._id} pin={pin}/>)}

    </Masonry>
  )
}

export default MasonryLayout