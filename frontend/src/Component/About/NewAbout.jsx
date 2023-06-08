import React, {useState} from 'react'
import './About.scss'
import { useNavigate } from 'react-router-dom'

const NewAbout = () => {
    const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoad = () => {

    setIsLoading(true);

    setTimeout(() => {
    setIsLoading(false);
        navigate('/')
    }, 2000);
  }
  return (
    <div className='about'>
       <h1 className='one'>Welcome to AVOCET.</h1>

        <p>Your premier web3 waste to wealth platform. We are dedicated to revolutionizing waste management and promoting a circular economy by harnessing the power of blockchain technology and decentralized finance.</p>

        <p>At AVOCET, we believe that waste is not simply a problem but an opportunity. Our platform provides a secure and transparent marketplace where waste materials can be efficiently exchanged, transformed, and repurposed into valuable resources. By connecting waste generators, recyclers, and buyers in a decentralized ecosystem, we create a sustainable and profitable solution for all stakeholders.
        <br/>
        Our mission is to tackle the global waste crisis head-on and drive positive environmental and social impact. Through our innovative platform, we enable individuals, businesses, and communities to actively participate in the waste management process, empowering them to turn waste into wealth.
        </p>


        <ul>
            <h3>Key Features of AVOCET:</h3>

            <li>
                Decentralized Marketplace: Our platform utilizes blockchain technology to establish a secure and transparent marketplace. Waste generators can list their available materials, while recyclers and buyers can browse and purchase these resources directly, eliminating intermediaries and reducing transaction costs.
            </li>

            <li>
                Smart Contracts and Tokenization: We leverage smart contracts to automate and streamline the entire waste management process. Transactions are executed seamlessly, ensuring trust, efficiency, and accuracy. Additionally, we have our native utility token, [Token Name], which provides incentives, rewards, and governance capabilities within the platform.
            </li>

            <li>
                Traceability and Transparency: With blockchain's immutable nature, our platform offers complete traceability of waste materials from their origin to their final destination. This transparency enhances accountability, ensures compliance with regulations, and builds trust among all participants.
            </li>

            <li>
                Data Analytics and Insights: We provide advanced data analytics tools to empower our users with valuable insights into waste generation, recycling rates, and market trends. By leveraging this data, businesses and individuals can make informed decisions to optimize their waste management practices and maximize their profits.
            </li>

            <li>
                Community Collaboration: We believe in the power of collaboration. Our platform fosters a strong community where waste management experts, environmental enthusiasts, and technology enthusiasts come together to share knowledge, exchange ideas, and collaborate on innovative solutions.
            </li>
        </ul>

            <div className='last'>
                <p>Join us at AVOCET and become a part of the waste to wealth revolution. Together, let's build a sustainable future where waste is seen as a valuable resource, and every action contributes to a greener planet. <br/>
                AVOCET - Tokenizing waste through web3.</p>
            </div>

            <button className='btn' onClick={handleLoad} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Home'}
            </button>

    </div>
  )
}

export default NewAbout