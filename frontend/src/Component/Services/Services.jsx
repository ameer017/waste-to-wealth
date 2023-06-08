import './Service.scss'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoad = () => {

    setIsLoading(true);

    setTimeout(() => {
    setIsLoading(false);
        navigate('/newservice')
    }, 2000);
  }
  return (
    <div className='service' id='service'>
          <h1>Services.</h1>
          
      <p>At AVOCET, we are dedicated to creating a sustainable future by harnessing the power of Web3 technology to transform waste into valuable resources. Our innovative platform offers a range of services designed to help individuals and businesses maximize the potential of their waste, reduce environmental impact, and contribute to a circular economy.</p>

      <ul>
        <li>Waste Management Solutions</li>
        <li>Resource Recovery and Upcycling</li>
        <li>Tokenized Waste Economy</li>
        <li> Data Analytics and Insights</li>
        <li>Education and Outreach</li>
      </ul>   

      <button className='btn' onClick={handleLoad} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Learn more'}
      </button>
    </div>
  )
}

export default Service