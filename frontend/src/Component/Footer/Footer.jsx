import React from 'react'
import './Footer.scss'
import { useNavigate } from 'react-router-dom'
import {ImFacebook, ImTwitter, ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const About = () => {
    const items = [
  
        {
          icon: <ImFacebook />,
          link: 'https://web.facebook.com/akin.raji'
        },
        {
          icon: <BsInstagram />,
          link: 'https://www.instagram.com/a.rajiabdullahi'
        },
        {
          icon: <ImTwitter />,
          link: 'https://twitter.com/alAmeer170'
        },
        {
          icon: <ImWhatsapp />,
          link: 'https://wa.link/jyty4h'
        },
        
      ]
    const navigate = useNavigate()
    // const toUp = () => {
    //     navigate('/mainpage')
    // }
  return (
    <>

    <div className='footer'>
        <div className='left'>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p>Alias ex ullam exercitationem quod aspernatur voluptas?</p>
            <p>Alias ex ullam exercitationem quod aspernatur voluptas?</p>
            <p>Alias ex ullam exercitationem quod aspernatur voluptas?</p>
        </div>
        <div className='right'>
            
            <ul className="socialBtns">
                {items.map(({icon, link}) => (
                <a href={link}>
                    <li className='socialBtn'>{icon}</li>
                </a>
                ))}
          </ul>
        </div>

    </div>
        <div className='footer_text'>
          <p>Designed by <a href='Linkto:rajiabdullahi907@gmail.com'>Abdullah Al Ameer</a></p>
        </div>
    </>
  )
}

export default About