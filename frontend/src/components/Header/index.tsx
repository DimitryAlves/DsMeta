import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />

                <h1>DsMeta</h1>

                <p>Desenvolvido por
                    <a href="https://www.instagram.com/dimitryyalves/"> @devsuperior.ig</a>
                </p>
            </div>
        </header>
    )
}

export default Header