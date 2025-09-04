import '../css/footer.css'
import logo from '../assets/img/logo.png'

function Footer() {
    return (
        <footer>
            <div className="logo">
                <a href="#"><img src={logo} alt="logo IMC" /></a>
            </div>
            <div className="social-links">
                <a href="https://www.instagram.com/smk_dmz" target='_blank'><i className='fa-brands fa-instagram'></i></a>
                <a href="https://www.linkedin.com/in/samuel-monteiro-5b0184325" target='_blank'><i className='fa-brands fa-linkedin-in'></i></a>
                <a href="https://github.com/SamuelEDMonteiro" target='_blank'><i className='fa-brands fa-github'></i></a>
            </div>
            <p>IMC &copy;2025 - Todos os direitos reservados. <a href="https://www.linkedin.com/in/samuel-monteiro-5b0184325" target='_blank'>Samuel Monteiro</a></p>
        </footer>
    )
}

export default Footer