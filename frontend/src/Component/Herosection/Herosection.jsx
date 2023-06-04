import React from 'react'
import './Herosection.scss'
import {BiLeaf} from 'react-icons/bi'
import reactLogo from '../../assets/image/water-bottle-svgrepo-com.svg'

const Herosection = () => {
  return (
    <div className='hero'>
      <div className='title'>
        <h1>Welcome to Avocet.</h1>
        <p>Let us help you monetize your plastic wastes and save the planet together</p>
      </div>

      <div className='right'>
        <img src={reactLogo} />
      </div>

      <div className='logo-leaf'>
            {<BiLeaf/>}
        </div>
    </div>
  )
}

export default Herosection