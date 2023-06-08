import React, {useState} from 'react'
import './About.scss'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoad = () => {

    setIsLoading(true);

    setTimeout(() => {
    setIsLoading(false);
        navigate('/newabout')
    }, 2000);
  }

  return (
    <div className='about' id='about'>  
      <h1>About Us.</h1>
      <p>Welcome to AVOCET, your premier web3 waste to wealth platform. We are dedicated to revolutionizing waste management and promoting a circular economy by harnessing the power of blockchain technology and decentralized finance. <br/>

      At AVOCET, we believe that waste is not simply a problem but an opportunity. Our platform provides a secure and transparent marketplace where waste materials can be efficiently exchanged, transformed, and repurposed into valuable resources. By connecting waste generators, recyclers, and buyers in a decentralized ecosystem, we create a sustainable and profitable solution for all stakeholders.

      Our mission is to tackle the global waste crisis head-on and drive positive environmental and social impact. Through our innovative platform, we enable individuals, businesses, and communities to actively participate in the waste management process, empowering them to turn waste into wealth.</p>
      
      <button className='btn' onClick={handleLoad} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Learn more'}
      </button>
    </div>
  )
}

export default About