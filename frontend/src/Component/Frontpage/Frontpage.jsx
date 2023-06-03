import React from 'react'
import './Frontpage.scss'
import {GiWaterBottle, GiEcology} from 'react-icons/gi'
import {BiLeaf} from 'react-icons/bi'
import {CiLink} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const Frontpage = () => {
    const navigate = useNavigate

    const handleLoad = () => {
        navigate('/herosection');
    }

  return (
    <div className='front'>
        <div className='logo-bottle'>
            {<GiWaterBottle/>}
        </div>
        <div className='left'>
            <h1>How can we save the ecology?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <button className='btn' onClick={handleLoad}>Get Started <CiLink/></button>
        </div>
        <div className='right'>
            <GiEcology/>
        </div>

        <div className='logo-leaf'>
            {<BiLeaf/>}
        </div>
        
    </div>
  )
}

export default Frontpage