import { Link, NavLink } from "react-router-dom";
import "./Header.css"
import { useState } from "react";
const Header = () => {
    const [isOpenNotification, setIsOpenNotification] = useState(false)
    const [newNotification, setNewNotification] = useState(true)
    const todayNotifications = [
        {
            img: './profile_image.svg',
            name: 'Zainab Saad',
            type: 'comment on your project',
            time: '2h'
        },{
            img: './profile_image.svg',
            name: 'Zainab Saad',
            type: 'comment on your project',
            time: '2h'
        },{
            img: './profile_image.svg',
            name: 'Zainab Saad',
            type: 'comment on your project',
            time: '2h'
        }
    ]
    const thisWeekNotifications = [
        {
            img: './profile_image.svg',
            name: 'Zainab Saad',
            type: 'comment on your project',
            time: '2d'
        },{
            img: './profile_image.svg',
            name: 'Zainab Saad',
            type: 'comment on your project',
            time: '2d'
        },{
            img: './profile_image.svg',
            name: 'Zainab Saad',
            type: 'comment on your project',
            time: '2d'
        }
    ]
    const openNotification = () => {
        setIsOpenNotification(!isOpenNotification);
        setNewNotification(false);
    }

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
                    <button onClick={openNotification} className={`${ newNotification? 'have-messages' : ''}`}>
                        <img src={`${isOpenNotification? 'notification-active.png': './notification.png'}`} alt="" />
                    </button>
                </div>
            </div>
            {isOpenNotification && (
                <div className="notifications">
                    <h3>notification</h3>
                    <p>You Have 3 Notification Today !</p>
                    <ul>

                        <p style={{fontSize: '18px', padding: '16px 0px 0px 0px'}}>Today</p>
                        {todayNotifications.map((today) => (
                            <li key={today.name}>
                                <span className="marker"></span>
                                <div>
                                    <img src={today.img} alt="" />
                                    <p><span style={{color: '#3C97AF'}}>{today.name}</span> {today.type} <span style={{color: '#999999'}}>{today.time}</span></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul>

                        <p style={{fontSize: '18px', padding: '16px 0px 0px 0px'}}>this week</p>
                        {thisWeekNotifications.map((today) => (
                            <li key={today.name} style={{border: 'none', padding: '12px 0px'}}>
                                <div>
                                    <img src={today.img} alt="" />
                                    <p><span style={{color: '#3C97AF'}}>{today.name}</span> {today.type} <span style={{color: '#999999'}}>{today.time}</span></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Header;