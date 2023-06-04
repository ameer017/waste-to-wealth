import React, {useState} from 'react'
import './Frontpage.scss'
import {GiWaterBottle, GiEcology} from 'react-icons/gi'
import {BiLeaf} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


const Frontpage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const loadPage = () => {

        setIsLoading(true);

        setTimeout(() => {
        setIsLoading(false);
            navigate('/herosection')
        }, 2000);
    }


  return (
    <div className='front'>
        <div className='logo-bottle'>
            {<GiWaterBottle/>}
        </div>
        <div className='left'>
            <h1>How can we save the ecology?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <button className='btn' onClick={loadPage} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Get Started'}
            </button>
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