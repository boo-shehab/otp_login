import './registerContainer.css'
const RegisterContainer = ({children}) => {
    return (
        <div className="register-container">
            <div className="left">
                <h1>Welcome to Your Freelancing Hub!</h1>
                <p>We’re thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!</p>
                <div>
                    <img src="./Vector4.png" alt="" />
                    <img src="./Vector5.png" alt="" />
                </div>
            </div>
            <div className="right">
                {children}
            </div>
        </div>
    )
}

export default RegisterContainer;