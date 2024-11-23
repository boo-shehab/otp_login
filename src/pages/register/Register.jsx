import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterContainer from "../../components/RegisterContainer/RegisterContainer";
import 'react-phone-number-input/style.css'
import './register.css'
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import OtpComponent from "../../components/OtpComponent/OtpComponent";
import CustomButton from "../../components/customButton/CustomButton";

const Register = () => {
    const [accountType, setAccountType] = useState(null);
    const [stage, setStage] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handlePhoneNumber = (phone) => {
        setPhoneNumber(phone)
        console.log('otp: 000000');
        
        setStage(3)
    }
    
    const handleOTP = async() => {
        const userInfo = {
            phoneNumber,
            accountType,
            userInfo: null,
        };
        await localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(localStorage.getItem('userInfo'));
        
        navigate('/user-info')
    }

    return (
        <>
            <RegisterContainer>
                <div className="Account-type">
                    <div className="steps">
                    <span className="done"></span>
                    <span className={`${stage === 2? 'half-done': stage === 3? 'done': ''}`}></span>
                    <span></span>
                    </div>
                    <div>
                        {stage === 1 ? (
                            <>
                                <h1>Let’s Get started!</h1>
                                <p>How do you plan to use this platform</p>
                            </>
                        ) : (
                            <>
                                <h1>Enter Your Phone Number</h1>
                                <p>Enter your phone number to verify your identity and the validity of your number to safely activate your account on the platform.</p>
                            </>
                            
                        )}
                    </div>
                    <div className="form">
                        {stage === 1 && (
                            <>
                                <div className="type">
                                <label onClick={() =>setAccountType(1)} className={`${accountType === 1? 'active': ''}`}>
                                    <img src="./freelance_icon.png" alt="" />
                                    <h2>freelance</h2>
                                    <p>I’m a freelancer ready to work for projects</p>
                                <input type="type" name="type" id="freelance" value={1} style={{display: "none"}} />
                                </label>

                                <label onClick={() => setAccountType(2)} className={`${accountType === 2? 'active': ''}`}>
                                    <img src="./client_icon.png" alt="" />
                                    <h2>client</h2>
                                    <p>I’m a freelancer ready to work for projects</p>
                                    <input type="type" name="type" id="client" value={2} style={{display: "none"}} />
                                </label>
                                </div>

                                <CustomButton onClick={() => {setStage(2)}} disabled={accountType === null}>next &gt;</CustomButton>
                            </>
                        )}
                        
                        {stage === 2 && (
                            <PhoneNumberInput handleNext={(phone) => handlePhoneNumber(phone)} />
                        )}
                        {stage === 3 && (
                            <OtpComponent handleNext={() => handleOTP()} />
                        )}
                    </div>
                </div>
            </RegisterContainer>
        </>
    )
}

export default Register;