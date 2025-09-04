import '../css/header.css'
import logo from '../assets/img/logo.png'

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="#"><img src={logo} alt="logo IMC" /></a>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li><a href="#"><i className='fa-regular fa-house'></i>Home</a></li>
                        <li><a href="https://www.linkedin.com/in/samuel-monteiro-5b0184325" target='_blank'><i className='fa-brands fa-linkedin-in'></i> Linkedin</a></li>
                        <li><a href="https://github.com/SamuelEDMonteiro" target='_blank'><i className='fa-brands fa-github'></i> GitHub</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header