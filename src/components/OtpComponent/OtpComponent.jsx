import React, { useEffect, useState } from 'react';
import { OtpInput } from 'reactjs-otp-input';
import './OtpComponent.css';
import CustomButton from '../customButton/CustomButton';

const OtpComponent = ({handleNext}) => {
  const [otp, setOtp] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [timer, setTimer] = useState(10);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const handleChange = (value) => {
    setOtp(value);
  };

  useEffect(() => {
    setIsValid(otp.length === 6);
  }, [otp]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    setOtp(''); 
    setTimer(59);
    setIsResendDisabled(true);
    console.log('Resend OTP');
  };

  const handleOTP = () => {
    const otpValue = localStorage.getItem('otp');
    if(otp === otpValue){
        handleNext()
    }
  }

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
        <div className="timer">00:{timer < 10 ? `0${timer}` : timer}</div>
        <p className="resend-text">
          Didn't receive a message?{' '}
          <span
            className={`resend-link ${isResendDisabled ? 'disabled' : ''}`}
            onClick={!isResendDisabled ? handleResend : null}
            style={{ color: isResendDisabled ? '#ccc' : '#007bff', cursor: isResendDisabled ? 'not-allowed' : 'pointer' }}
          >
            Resend
          </span>
        </p>
      </div>
      <CustomButton onClick={handleOTP} disabled={!isValid}>
        Verify
      </CustomButton>
    </div>
  );
};

export default OtpComponent;
