import { useState } from "react";
import RegisterContainer from "../../components/RegisterContainer/RegisterContainer";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './register.css'
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import OtpComponent from "../../components/OtpComponent/OtpComponent";

const Register = () => {
    const [accountType, setAccountType] = useState(null);
    const [stage, setStage] = useState(1);
    const [value, setValue] = useState()

    return (
        <>
            <RegisterContainer>
                <div className="Account-type">
                    <div className="steps">
                    <span className="done"></span>
                    <span></span>
                    <span></span>
                    </div>
                    <div>
                        <h1>Let’s Get started!</h1>
                        <p>How do you plan to use this platform</p>
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

                                <button type="button" onClick={() => {setStage(2)
                                }} disabled={accountType === null}>next</button>
                            </>
                        )}
                        
                        {stage === 2 && (
                            <PhoneNumberInput handleNext={() => setStage(3)} />
                        )}
                        {stage === 3 && (
                            <OtpComponent />
                        )}
                    </div>
                </div>
            </RegisterContainer>
        </>
    )
}

export default Register;