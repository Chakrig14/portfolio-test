import "../home/home.css"
import avatar from "../home/avatar.jpg"

const Home = () => {
    return(
            <div className="profile-section">
                <div className="profile-card">
                    <img src={avatar} alt="avatar" className="avatar-img"/>
                    <h1 className="profile-name">Manjusha Kesapragada</h1>
                    <p className="profile-desig">Associate Consultant at Capgemini</p>
                </div>
            </div>
    )
}

export default Home