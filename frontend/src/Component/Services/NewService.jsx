import React, {useState} from 'react'
import './Service.scss'
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
        <h4>Avocet: Tokenizing Waste through web3</h4>
        <h1>Our Service</h1>
        <p>At AVOCET, we are dedicated to creating a sustainable future by harnessing the power of Web3 technology to transform waste into valuable resources. Our innovative platform offers a range of services designed to help individuals and businesses maximize the potential of their waste, reduce environmental impact, and contribute to a circular economy.</p>

        <ul>
            <h3>Waste Management Solutions.</h3>
            <li>
            We provide comprehensive waste management solutions tailored to meet the unique needs of our clients. Our expert team employs advanced technologies and data-driven approaches to optimize waste collection, sorting, and disposal processes. By implementing efficient waste management strategies, we help businesses minimize waste generation, reduce landfill usage, and improve overall sustainability performance.
            </li>
        </ul>

        <ul>
            <h3>Resource Recovery and Upcycling.</h3>
            <li>
            We specialize in resource recovery and upcycling, enabling the conversion of waste into valuable resources and products. Our platform connects waste generators with innovative entrepreneurs and businesses that can creatively repurpose waste materials, transforming them into high-quality products with commercial value. By unlocking the hidden potential in waste, we contribute to a circular economy where resources are continuously reused and repurposed.
            </li>
        </ul>

        <ul>
            <h3>Tokenized Waste Economy.</h3>
            <li>
            As a Web3 platform, we leverage blockchain technology and smart contracts to create a tokenized waste economy. Through our platform, waste generators can tokenize their waste streams, creating digital assets that represent the value of their waste materials. These tokens can be traded, invested in, and used to access various services within our ecosystem. By introducing tokenization, we aim to incentivize waste reduction, promote responsible waste management practices, and reward participants for their contributions to a more sustainable future.
            </li>
        </ul>

        <ul>
            <h3>Data Analytics and Insights.</h3>
            <li>
            We believe in the power of data to drive informed decision-making and optimize waste management processes. Our platform collects and analyzes data from waste streams, providing valuable insights to our clients. These insights help identify areas for waste reduction, optimize recycling efforts, and measure sustainability performance. Through real-time analytics and customizable reports, we empower our users to make data-driven decisions that improve their waste management practices and contribute to a more efficient circular economy.
            </li>
        </ul>

        <ul>
            <h3>Education and Outreach.</h3>
            <li>
            At AVOCET, we are committed to raising awareness about the importance of waste management and sustainable practices. We offer educational resources, workshops, and webinars to individuals, businesses, and communities. By fostering knowledge and understanding, we aim to inspire behavior change and encourage active participation in the waste-to-wealth movement. Together, we can create a greener, more sustainable future for generations to come.
            </li>
        </ul>

        <p className='last'>Contact us today to learn more about our services and join the waste-to-wealth revolution! Together, we can make a positive impact on the environment while unlocking the economic potential of waste materials.</p>

        <button className='btn' onClick={handleLoad} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Home'}
      </button>
    </div>
  )
}

export default NewAbout