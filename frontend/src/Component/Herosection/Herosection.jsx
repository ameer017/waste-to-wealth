import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Herosection.scss'
import {BiLeaf} from 'react-icons/bi'
import reactLogo from '../../assets/image/avocet-high-resolution-logo-color-on-transparent-background.png'

const Herosection = () => {
  const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleLoad = () => {

        setIsLoading(true);

        setTimeout(() => {
        setIsLoading(false);
            navigate('/signup')
        }, 2000);
    }
   

  return (
    <div className='hero'>
        <div className='title'>
            <h1>Welcome to Avocet.</h1>
            <p>Let us help you monetize your plastic wastes and save the planet together.</p>


            <h2>Wondering how we can save the ecology??</h2>

            <button className='btn' onClick={handleLoad} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Get Started'}
            </button>
        </div>

        <div className='right'>
          <img src={reactLogo} id='show'/>
          <img src='/src/assets/image/white.png' className='none'/>
        </div>


       <div className='logo-leaf'>
            {<BiLeaf/>}
        </div>
    </div>
  )
}

export default Herosection