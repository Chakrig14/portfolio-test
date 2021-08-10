import "../modalmenu/modal.css"
import {Link} from "react-router-dom"

const Modal = props => {
    const {value,state} = props
    let drawerClass = 'sidenav-md';
    if(state.sideNav === true){
        drawerClass='sidenav-md open'
    }
        return(
        <div className={drawerClass}>
            <button onClick={value}>Close</button>
            <ul className="nav-list">
                <li className="main-sidenav">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="main-sidenav">
                    <Link to="/portfolio" className="link">Portfolio</Link>
                </li>
                <li className="main-sidenav">
                    <Link to="/resume" className="link">Resume</Link>
                </li>
                <li className="main-sidenav">
                    <Link to="/contact" className="link">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Modal