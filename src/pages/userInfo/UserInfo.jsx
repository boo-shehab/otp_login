import { useState } from "react";
import CustomButton from "../../components/customButton/CustomButton";
import RegisterContainer from "../../components/RegisterContainer/RegisterContainer";
import './UserInfo.css';

const UserInfo = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [userInfo, setUserInfo] = useState({
        password: '',
        email: '',
        name: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [id]: value,
        }));

        validateInputs(id, value);
    };

    const validateInputs = (id, value) => {
        let emailError = '';
        let passwordError = '';

        if (id === 'email' && value) {
            emailError = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        }

        if (id === 'password' && value) {
            passwordError = value.length >= 8 ? '' : 'Password must be at least 8 characters long.';
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            email: emailError,
            password: passwordError
        }));

        setIsDisabled(
            !(
                userInfo.name &&
                emailRegex.test(userInfo.email) &&
                userInfo.password.length >= 8
            )
        );
    };

    const handleUserInfo = () => {
        const storedData = JSON.parse(localStorage.getItem('userInfo'));
    
        const newData = storedData || {};
        newData.userInfo = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password
        };
    
        localStorage.setItem('userInfo', JSON.stringify(newData));
    
        console.log("User Info Submitted:", newData);
    };

    return (
        <>
            <RegisterContainer>
                <div className="userInfoContainer">
                    <div className="steps">
                        <span className="done"></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <h1>Let’s Get Started!</h1>
                        <p>How do you plan to use this platform?</p>
                    </div>
                    <div className="form">
                        <div className="type">
                            <label htmlFor="name">
                                <p>Name</p>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    value={userInfo.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label htmlFor="email">
                                <p>Email</p>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Enter your Email Address"
                                    value={userInfo.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </label>
                            <label htmlFor="password">
                                <p>Password</p>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={userInfo.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </label>
                        </div>
                        <CustomButton onClick={handleUserInfo} disabled={isDisabled}>
                            Complete Registration
                        </CustomButton>
                    </div>
                </div>
            </RegisterContainer>
        </>
    );
};

export default UserInfo;
