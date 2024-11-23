import DonutChart from '../../components/charts/DonutChart'
import Post from '../../components/post/Post'
import './Profile.css'
const Profile = () => {

  const infoItems = [
    { icon: './freelance_icon.png', label: "freelancer worked with", value: 8 },
    { icon: './like.svg', label: "Given Likes", value: 32 },
    { icon: './task-done.png', label: "Project Posted", value: 14 },
  ];
    return (
        <div id="profile">
            <div className="sheet">
                <div className="user-info sacred-code">
                    <div className="info sacred-code">
                        <img src="./profile_image.svg" alt="" />
                        <div>
                            <h3>Mustafa Emad</h3>
                            <p>Business scope</p>
                        </div>
                    </div>
                    <img src="./edit.svg" alt="" />
                </div>

                <div className="about">
                    <div className="header">
                        <h3>About</h3>
                        <img src="./edit.svg" alt="" />
                    </div>
                    <p>As a software manager with a passion for technology and team development, I specialize in guiding projects from concept to completion. With a strong focus on collaboration and clear communication, I work closely with clients and developers to ensure we deliver high-quality solutions that meet our stakeholders' needs. My goal is to bridge the gap between technical expertise and client vision, helping teams create innovative software that drives results and keeps pace with industry demands.... See More</p>
                </div>
                
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
                <div className="posts">
                    <div className="header">
                        <h4>Your Activity</h4>
                        <div className="action">
                            <img src="./edit.svg" alt="" />
                            <div className="add-button">+</div>
                        </div>
                    </div>
                    <Post />
                </div>
            </div>
            <div>
                <div className="sheet">
                    <h3>Your Activity</h3>
                    <span style={{margin: 'auto'}}>
                        <DonutChart />
                    </span>
                    <div className="sacred-code" style={{paddingTop: '24px', borderBottom: '1px solid #eee', paddingBottom: '24px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                            <div className="dot" style={{backgroundColor: '#d3d3d3', width: '14px', height: '14px', borderRadius:'50%'}}></div>
                            <p style={{fontSize: '12px'}}>Posted projects</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                            <div className="dot" style={{backgroundColor: '#FFD700', width: '14px', height: '14px', borderRadius:'50%'}}></div>
                            <p style={{fontSize: '12px'}}>Pending projects</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                            <div className="dot" style={{backgroundColor: '#32CD32', width: '14px', height: '14px', borderRadius:'50%'}}></div>
                            <p style={{fontSize: '12px'}}>Completed projects</p>
                        </div>
                    </div>
                    <div className="info-list">
                    {infoItems.map((item, index) => (
                        <div className="info-item" key={index}>
                            <img src={item.icon} alt={`${item.label} icon`} className="icon" />
                            <div className="label">{item.label}</div>
                            <div className="value">{item.value}</div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile
