import React, { useState } from 'react';
import { OtpInput } from 'reactjs-otp-input';
import './OtpComponent.css';

const OtpComponent = () => {
  const [otp, setOtp] = useState('');
  const [accountType, setAccountType] = useState(null)

  const handleChange = (value) => {
    setOtp(value);
  };

  return (
    <div className="otp-wrapper">
        <div>
        <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>&nbsp;</span>}
            inputStyle="otp-input"
            isInputNum={true}
        />
        <div className="timer">00:59</div>
        <p className="resend-text">
            Didn't receive a message? <span className="resend-link">Resend</span>
        </p>
        </div>
        <button type="button" onClick={() => {console.log('clicked');
        }} disabled={accountType === null}>next</button>
    </div>
  );
};

export default OtpComponent;
