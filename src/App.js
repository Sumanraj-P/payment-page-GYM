import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure this file contains your styles

const App = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Credit-card');

  useEffect(() => {
    // Set initial display based on default payment method
    document.querySelectorAll('.payment-info form').forEach(form => {
      form.style.display = 'none';
    });
    document.getElementById(selectedPaymentMethod).style.display = 'block';
  }, [selectedPaymentMethod]);

  const showShape = (shapeId) => {
    setSelectedPaymentMethod(shapeId);
  };

  return (
    <div>
      <div className="title">
        <div className="payment-title">
          <h1>PAYMENTS</h1>
          <div className="choose-text">
            <p>CHOOSE PAYMENT METHOD BELOW</p>
          </div>
        </div>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.jpeg`} alt="logo" />
        </div>
      </div>

      <div className="options">
        <div></div>
        <div className="credit-card option" onClick={() => showShape('Credit-card')}>
          <p>
            <span className="svg-bank">
              <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#e8eaed">
                <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/>
              </svg>
            </span>
            <p className="opt-txt">Pay with credit card</p>
          </p>
        </div>
        <div className="upi option" onClick={() => showShape('Upi')}>
          <h1>UPI</h1>
          <p className="opt-txt">Pay with UPI</p>
        </div>
        <div className="net-banking option" onClick={() => showShape('Net-banking')}>
          <p>
            <span className="svg-bank">
            <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#e8eaed">
  <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/>
</svg>

            </span>
            <p className="opt-txt">Pay with Net Banking</p>
          </p>
        </div>
        <div></div>
      </div>

      <div className="billing">
        <form action="#">
          <div className="billing-info">
            <div className="billing-text">
              <h1>1. BILLING INFO</h1>
            </div>
            <div className="name">
              <label htmlFor="fullname">NAME</label><br/>
              <input type="text" required placeholder="Enter your name" id="fullname" />
            </div>
            <div className="address">
              <label htmlFor="address">ADDRESS</label><br/>
              <input type="text" required placeholder="Enter your address" id="address" />
            </div>
            <div className="city-state">
              <div className="city">
                <label htmlFor="city">CITY</label><br/>
                <input type="text" required id="city" placeholder="City" />
              </div>
              <div className="state">
                <label htmlFor="state">STATE</label><br/>
                <input type="text" required id="state" placeholder="State" />
              </div>
            </div>
          </div>
        </form>

        <div className="payment-info">
          {selectedPaymentMethod === 'Credit-card' && (
            <form id="Credit-card">
              <div className="credit-info">
                <div className="Credit-text">
                  <h1>2. CREDIT CARD INFO</h1>
                  <div className="holder-name">
                    <label htmlFor="Holder-name">CARD HOLDER NAME</label><br/>
                    <input type="text" required placeholder="Card Holder Name" id="Holder-name" />
                  </div>
                  <div className="card-number">
                    <label htmlFor="Card-number">CARD NUMBER</label><br/>
                    <input type="number" required placeholder="1234-5678-9101" id="Card-number" />
                  </div>
                  <div className="exp">
                    <div className="exp-month">
                      <label htmlFor="Month">EXP MONTH</label><br/>
                      <input type="number" required id="Month" placeholder="Exp month" />
                    </div>
                    <div className="exp-year">
                      <label htmlFor="Year">EXP YEAR</label><br/>
                      <input type="number" required id="Year" placeholder="Exp year" />
                    </div>
                  </div>
                  <div className="cvv">
                    <label htmlFor="CVV">CVV</label><br/>
                    <input type="number" name="Cvv" id="CVV" placeholder="CVV" />
                  </div>
                </div>
              </div>
            </form>
          )}

          {selectedPaymentMethod === 'Upi' && (
            <form id="Upi">
              <div className="upi-option">
                <h1>2. CHOOSE AN UPI APP</h1>
                <div className="upi-options">
                  <div className="phone-pay">
                    <input type="radio" name="upi-app" id="phone-pay" />
                    <label htmlFor="phone-pay">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/phone-pay.png`} alt="Phone Pay" />
                    </label>
                  </div>
                  <div className="G-pay">
                    <input type="radio" name="upi-app" id="g-pay" />
                    <label htmlFor="g-pay">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/Gpay.png`} alt="GPay" />
                    </label>
                  </div>
                  <div className="paytm">
                    <input type="radio" name="upi-app" id="paytm" />
                    <label htmlFor="paytm">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/paytm.png`} alt="Paytm" />
                    </label>
                  </div>
                  <div className="amazon-pay">
                    <input type="radio" name="upi-app" id="amazon-pay" />
                    <label htmlFor="amazon-pay">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/amazon-pay.png`} alt="Amazon Pay" />
                    </label>
                  </div>
                </div>
                <div className="upi-id">
                  <h1>3. UPI ID</h1>
                  <div className="upi-id-enter">
                    <label htmlFor="UPI_ID">Enter Your UPI ID</label><br/>
                    <input type="text" id="UPI_ID" placeholder="Enter UPI ID" />
                  </div>
                </div>
              </div>
            </form>
          )}

          {selectedPaymentMethod === 'Net-banking' && (
            <form id="Net-banking">
              <div className="net-bank">
                <h1>2. CHOOSE YOUR BANK</h1>
                <div className="bank">
                  <div className="sbi">
                    <input type="radio" name="bank" id="sbi" />
                    <label htmlFor="sbi">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/sbi.png`} alt="SBI" />
                    </label>
                  </div>
                  <div className="axis">
                    <input type="radio" name="bank" id="axis" />
                    <label htmlFor="axis">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/axis.png`} alt="Axis" />
                    </label>
                  </div>
                  <div className="hdfc">
                    <input type="radio" name="bank" id="hdfc" />
                    <label htmlFor="hdfc">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/hdfc.jpeg`} alt="HDFC" />
                    </label>
                  </div>
                  <div className="icici">
                    <input type="radio" name="bank" id="icici" />
                    <label htmlFor="icici">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/icici.png`} alt="ICICI" />
                    </label>
                  </div>
                  <div className="unknownbank">
                    <input type="radio" name="bank" id="unknownbank" />
                    <label htmlFor="unknownbank">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/bank.png`} alt="Unknown Bank" />
                    </label>
                  </div>
                  <div className="kvb">
                    <input type="radio" name="bank" id="kvb" />
                    <label htmlFor="kvb">
                      <img src={`${process.env.PUBLIC_URL}/pay_image/kvb.png`} alt="KVB" />
                    </label>
                  </div>
                </div>
                <div className="other-bank">
                  <select name="other-bank" id="banks">
                    <option value="others">Others</option>
                    <option value="iob">IOB</option>
                    <option value="ib">IB</option>
                    <option value="none">NONE</option>
                  </select>
                </div>
              </div>
            </form>
          )}

          <div className="pay-now">
            <p>₹3500</p>
            <button>PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
