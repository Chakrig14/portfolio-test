import "../header/header.css"
import {Link} from "react-router-dom"

function Header () {
        return(
            <>
            
            <div className="navbar-lg">
                <ul className="link-tag">
                    <li className="navbar-out">
                        <Link to="/" className="navbar">HOME</Link>
                    </li>
                    <li className="navbar-out">
                        <Link to="/portfolio" className="navbar">PORTFOLIO</Link>
                    </li>
                    <li className="navbar-out">
                        <Link to="/resume" className="navbar">RESUME</Link>
                    </li>
                    <li className="navbar-out">
                        <Link to="/contact" className="navbar">CONTACT</Link>
                    </li>
                </ul>
            </div>
            </>
        )
}

export default Header