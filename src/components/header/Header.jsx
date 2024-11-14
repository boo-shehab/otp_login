import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div id="header">
            <div className="content">
                <NavLink to="/" className="logo">Freelancer platform</NavLink>
                <nav className="nav-menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/setting">Settings</NavLink>
                </nav>
                <div className="nav-bar">
                    <div className="search">
                        <img src="./search.png" alt="" />
                        <input type="text" placeholder="Search..." />
                    </div>
                    <button className="have-messages">
                        <img src="./notification.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header;