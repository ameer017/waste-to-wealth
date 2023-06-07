import React, {useState, useEffect} from 'react'
import Herosection from '../Herosection/Herosection'
import About from '../About/About'
import Service from '../Services/Services'
import Faqs from '../Faqs/Faqs'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Empty from '../../../Empty/Empty'
import Navbar from '../Navbar/Navbar'


const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
}, [])

  return (
    <div>
    {isLoading? 
      <Empty/>
      :

        <>
          <Navbar/>
          <Herosection/>
          <About/>
          <Service/>
          <Faqs/>
          <Contact/>
          {/* <Footer/> */}
        </>
    }
    </div>
  )
}

export default MainPage