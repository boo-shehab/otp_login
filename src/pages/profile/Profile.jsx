import './Profile.css'
const Profile = () => {
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
            </div>
        </div>
    )
}
export default Profile
