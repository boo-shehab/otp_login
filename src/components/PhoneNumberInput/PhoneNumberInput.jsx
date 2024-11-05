import { useEffect, useState } from 'react';
import Select from 'react-select';
import ReactCountryFlag from 'react-country-flag';
import './phoneNumberInput.css'

const countries = [
  { value: '+964', label: 'Iraq', code: 'IQ' },
  { value: '+1', label: 'United States', code: 'US' },
  { value: '+44', label: 'United Kingdom', code: 'GB' },
  // Add more countries as needed
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: 100,
    border: '1px solid #e0e0e0',
    borderRadius: '8px 0 0 8px',
    padding: '0px 8px',
  }),
  option: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
  singleValue: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
};

const PhoneNumberInput = ({handleNext}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState('');
  const [accountType, setAccountType] = useState(null)

  const handleCountryChange = (selectedOption) => {
    
    setSelectedCountry(selectedOption);
  };

  useEffect(() => {
    if(phone.length === 10){
        setAccountType(true)
    }
    
  }, [phone])

  return (
    <div className='phone-container'>
        <div className="phone-input-wrapper">
        <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countries.map((country) => ({
            value: country.value,
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                    width: '20px',
                    height: '15px',
                    marginRight: '8px',
                    }}
                />
                {country.value}
                </div>
            ),
            code: country.code,
            }))}
            styles={customStyles}
            isSearchable={false}
        />
        <input
            type="text"
            className="phone-number-input"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        </div>
        
        <button type="button" onClick={() => {handleNext()}} disabled={accountType === null}>next</button>
    </div>
  );
};

export default PhoneNumberInput;
