import { Outlet } from "react-router-dom"
import Navbar from "./src/Component/Navbar/Navbar"


const Layout = () => {

  return (
    <div className='container'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout