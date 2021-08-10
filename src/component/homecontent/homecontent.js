import {useState} from "react"
import Home from "../home/home"
import  Header from "../header/header"
import BackDrop from "../backdrop/backdrop"
import Modal from "../modalmenu/modal"
import MenuIcon from '@material-ui/icons/Menu';

const HomeContent = () => {
    const [sideNav,setSideNav] = useState(false);
    const menuIcon = () => {
        setSideNav(prevState => ({sideNav:!prevState.sideNav}))
    }
    const closeSideModal = () => {
        setSideNav(false)
    }
    if(sideNav.sideNav === true){
        return(
        <div className="bg-home">
        <Modal value={closeSideModal} state={sideNav}/>
        <BackDrop />
        <Home />
        </div>
        )
    }
    else{
        return(
            <div className= "bg-home">
            <div>
            <button className="menu-icon" onClick={menuIcon}>
            <MenuIcon />                
            </button>
            </div>
            <Header /> 
            <Home />
            </div>
        )
    }
}

export default HomeContent