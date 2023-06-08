import React, {useState} from 'react'
import './Contact.scss'
import reactLogo from '../../assets/image/avocet-high-resolution-logo-color-on-transparent-background.png'
import { useNavigate } from 'react-router-dom'

const Contact = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(true)

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(email))
        navigate('/success')
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        setEmail(props.e.target.value)
    }
  return (
    <div className='contact' id='contact'>        
        <div className='text'>
            <h1>Stay updated!</h1>
            <p>Subcribe to our newsletter</p>

            <form>
                <input type='name' placeholder='your name here..'/>
                <input type='email' placeholder='yourname@email.com' onChange={handleInputChange}/>

                <button type='submit' onClick={validateEmail} className='btn'>Send</button>
            </form>

        </div>
        <div className='image'>
            <img src={reactLogo} alt='image'/>
        </div>
    </div>
  )
}

export default Contact