import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom';

// import the style page
import "./BookRoom.css"


const BookRoom = () => {

  // const navigate = useNavigate();

  const initialState = {
    cardholderName: '',
    cardholderEmail: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardName: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [highlightedField, setHighlightedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Validate numeric values for Expiration Date and CVV
    if ((name === 'expirationDate' || name === 'cvv') && !/^\d*$/.test(value)) {
      return; // Prevent non-numeric values
    }
  
    // Format Expiration Date as MM/YY
    if (name === 'expirationDate') {
      const formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
  
      // Allow entering up to 4 digits and enable backspace functionality
      if (formattedValue.length <= 4) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: formattedValue.replace(/(\d{2})(\d{2,4})/, '$1/$2'),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handlePay = () => {
    // Check for empty fields
    const emptyField = Object.keys(formData).find((key) => formData[key] === '');
    if (emptyField) {
      setHighlightedField(emptyField);
      alert('Please fill in the empty field');
    } else {
      // Perform payment processing logic here

      // After payment is processed, show alert and clear the form
      alert('Payment is successfully !');
      setFormData(initialState);
      setHighlightedField(null);
      window.location.replace("/home");
    }
   
  };

  const getClassName = (fieldName) => {
    return highlightedField === fieldName ? 'form-input highlighted' : 'form-input';
  };

  return (
    <div className="payment-form-background">
    <div className="container">
      <form>
        <label className="form-label">
          Cardholder Name:
          <input
            type="text"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            className={getClassName('cardholderName')}
          />
        </label>
        <label className="form-label">
          Cardholder Email:
          <input
            type="email"
            name="cardholderEmail"
            value={formData.cardholderEmail}
            onChange={handleChange}
            className={getClassName('cardholderEmail')}
          />
        </label>
        <label className="form-label">
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={getClassName('cardNumber')}
          />
        </label>
        <div className="row">
          <label className="form-label" style={{ marginRight: '10px' }}>
            Expiration Date:
            <input
              type="text"
              name="expirationDate"
              placeholder='Month/Date'
              pattern="\d\d/\d\d"
              value={formData.expirationDate}
              onChange={handleChange}
              className={getClassName('expirationDate')}
            />
          </label>
          <label className="form-label">
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className={getClassName('cvv')}
            />
          </label>
        </div>
        <label className="form-label">
          Card Type:
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className={getClassName('cardName')}
          />
        </label>
        <button type="button" onClick={handlePay} className="button-pay">
          Pay
        </button>
      </form>
    </div>
    </div>
  );
};

export default BookRoom
