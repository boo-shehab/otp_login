import { useState } from "react"
import CustomButton from "../../components/customButton/CustomButton"
import Post from "../../components/post/Post"
import Rate from "../../components/rate/Rate"
import TwoStageFormPopup from "../../components/TwoStageFormPopup/TwoStageFormPopup"
import "./Home.css"
const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleNewProject = () =>{
        setIsPopupOpen(true)
    }
    return (
        <div id="home-container">
            <div className="left-side">
                <div className="sheet">
                    <div className="profile">
                        <img src="./profile_image.svg" alt="" />
                        <h4>Mustafa Emad</h4>
                        <Rate rate="10.0" />
                        <CustomButton>Edit Profile</CustomButton>
                    </div>
                </div>
                <div className="sheet">
                    <div className="about">
                        <div className="header">
                            <h4>About</h4>
                            <img src="./edit.svg" alt="" />
                        </div>
                        <p className="content">
                            GreenTech Solutions Inc.
                            Renewable Energy & Technology
                            San Francisco, California, with operations in North America and Europe
                        </p>
                    </div>
                </div>
                <div className="sheet">
                    <div className="projects-history">
                        <div className="header">
                            <h4>Projects History</h4>
                            <div className="action">
                                <img src="./edit.svg" alt="" />
                                <div className="add-button">+</div>
                            </div>
                        </div>
                        <div className="project-container">
                            <div className="side-line">
                            <span></span>
                            <span></span>
                            </div>
                            <div className="project">
                                <div className="title">
                                    project Name
                                </div>
                                <div className="sub-title">
                                    22 Jan 2024 - 11 May  2024. 
                                </div>
                                <div className="content">
                                    Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mid">
                <div className="sheet">
                    <div className="new-post">
                        <img src="./profile_image.svg" alt="" />
                        <div className="post">
                            <input type="text" onClick={handleNewProject} placeholder="Mustafa Let’s Create a Project !" />
                            <CustomButton onClick={handleNewProject} className="new-post-button">+</CustomButton>
                        </div>
                    </div>
                </div>
                <Post />
            </div>
            <div className="right-side">
                <div className="sheet">
                    <div className="recent-projects">
                        <div className="header">
                            <h3>Your Recent Project</h3>
                            <p className="button">see all projects</p>
                        </div>
                        <div className="project bottom-border">
                            <div className="project-header">
                                <div className="header-info">
                                    <img src="./company_card.png" alt="" />
                                    <div className="header-content">
                                        <h4>Web Design Project</h4>
                                        <p>10$/Hour</p>
                                    </div>
                                </div>
                                <img src="./button_see_more.png" alt="" />
                            </div>
                            <div className="content">This Project Involves implementing both frontend and back-end functionalities ,as  well as integrating with third-party Apls.</div>
                        </div>
                    </div>
                </div>
                <div className="sheet">
                    <div className="freelancers">
                        <div className="header">
                            <h3>Freelancers You Worked With</h3>
                            <p className="button">See All</p>
                        </div>
                        <div className="freelancers-users">
                            <div className="user">
                                <div className="info">
                                    <img src="./profile_image.svg" alt="" />
                                    <div>
                                        <h5>Zena saad</h5>
                                        <p>2 months ago</p>
                                    </div>
                                </div>
                                <Rate rate="8.0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TwoStageFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
    )
}

export default Home