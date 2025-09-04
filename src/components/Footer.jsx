import '../css/footer.css'
import logo from '../assets/img/logo.png'

function Footer() {
    return (
        <footer>
            <div className="logo">
                <a href="#"><img src={logo} alt="logo IMC" /></a>
            </div>
            <div className="social-links">
                <a href="" target='_blank'><i className='fa-brands fa-instagram'></i></a>
                <a href="" target='_blank'><i className='fa-brands fa-linkedin-in'></i></a>
                <a href="" target='_blank'><i className='fa-brands fa-github'></i></a>
            </div>
            <p>IMC &copy;2025 - Todos os direitos reservados. <a href="" target='_blank'>Samuel Monteiro</a></p>
        </footer>
    )
}

export default Footer