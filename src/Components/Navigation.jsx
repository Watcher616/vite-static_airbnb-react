
import AirbnLogo from "../img/airbnb-logo.png"
import Hero from "../img/photo-grid.png"
import "./Navigation.css"

function Navigation(){
    return (
        <div className="nav-container">
            <div className="nav-title-container">
                <img className="nav--icon-img"  src={AirbnLogo} alt="" />
                </div>
            <div className="nav--hero">
                <img  className="nav--hero-img" src={Hero} alt="" />
            </div>
        </div>
    )
}

export default Navigation