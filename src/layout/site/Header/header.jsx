
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
return (
   <nav>
    <div className="logo">
        <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /> <span>COURSE</span>
    </div>
    <div className="cent">
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'basket'}>Baset</Link></li>
                <li><Link to={'/admin/add'}>Add</Link></li>
                <li>ELEMENTS</li>
                <li>NEWS</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className="lefft">
        <i class="fa-solid fa-phone"></i><span>+43 4566 7788 2457</span>
        </div>
   </nav>
)
}

export default Header
                            