import React, { useState } from 'react';
import './TwoStageFormPopup.css'
import CustomButton from '../customButton/CustomButton';

const TwoStageFormPopup = ({ isOpen, onClose }) => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({ 
    qualification: '', 
    description: '', 
    files: [],
    duration: "",
    pricingType: 0,
    price: ""
  });

  const handleNext = () => setStage(stage + 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, files: [...formData.files, e.target.files[0]] });
  };

  const handleSave = (e) => {
    
  }

  if (!isOpen) return null;

  return (
    <div id="popup-overlay">
      <div className="popup-content">
        <div className="header">
            <h2>Create a project</h2>
            <button onClick={onClose} className="close-btn">X</button>
        </div>
        <div className="progress-bar">
          <div className={`progress-segment ${stage >= 1 ? 'active' : ''}`}></div>
          <div className={`progress-segment ${stage >= 2 ? 'active' : ''}`}></div>
        </div>

        {stage === 1 && (
          <form>
            <label>
              Select Required Qualifications
              <select name="qualification" value={formData.qualification} onChange={handleChange} required>
                <option value="">Select option</option>
                <option value="qualification1">Qualification 1</option>
                <option value="qualification2">Qualification 2</option>
              </select>
            </label>

            <label>
              Description
              <textarea
                name="description"
                placeholder="Enter Description for the project"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <div className="spacer" />
            <div className="file-buttons">
              <button type="button" className="file-btn" onClick={() => document.getElementById('mediaUpload').click()}>
                <img src="./image-upload.png" alt="" />
                Media
              </button>
              <button type="button" className="file-btn" onClick={() => document.getElementById('documentUpload').click()}>
              <img src="./document-code.png" alt="" />
                Document
              </button>
              <input id="mediaUpload" type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
              <input id="documentUpload" type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
              <button type="button" onClick={handleNext} className="next-btn">Next &gt;</button>
            </div>

          </form>
        )}
        {stage === 2 && (
            <form>
            <label>
              Description
              <input
                type='text'
                name="duration"
                placeholder="duration of the project"
                value={formData.duration}
                onChange={handleChange}
                required
              ></input>
            </label>
            <label>
                Pricing Type
                <div className='sacred-code'>
                    <button onClick={() => setFormData({ ...formData, ['pricingType']: 1 })}>Per Hour</button>
                    <button onClick={() => setFormData({ ...formData, ['pricingType']: 2 })}>For The Project</button>
                </div>
            </label>
            {formData.pricingType >= 1 && (
                <label>
                    {formData.pricingType === 1? "Price Per Hour" : "Price For The Project"}
                    <input name='price' value={formData.price} onChange={handleChange} type="text" placeholder='Enter price' />
                </label>
            )}
            <div className="spacer" />
                <CustomButton onClick={(handleSave)}>Add Project +</CustomButton>
            </form>
        )}
      </div>
    </div>
  );
};

export default TwoStageFormPopup;
