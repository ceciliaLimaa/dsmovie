import { ReactComponent as GithubIcon } from 'assets/img/github.svg'; //importa a imagem que esta na pasta assets
import './styles.css'; //sem esse import a class styles.css n funciona
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">

                    <h1> DSMovie </h1>

                    <a href="https://github.com/ceciliaLimaa" target="_blank " rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon /> {/* Transforma a imagem em um tag html */}
                            <p className="dsmovie-contact-link"> /Ana Cecília </p>
                            
                        </div>
                    </a>
                </div >
            </nav>
        </header >
    );
}
export default Navbar;