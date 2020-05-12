import React from 'react';

const PopupAge = ({ closePopupEnter, closePopupExit }) => (
  <div className="popup">
    <div className="popup-content">
      <p>By clicking enter, I certify that I am in age to drink</p>
      <div className="button-div">
        <div>
          <button type="button" onClick={closePopupEnter} className="modal-button">Enter</button>
        </div>
        <div>
          <button type="button" onClick={closePopupExit} className="modal-button">Exit</button>
        </div>
      </div>
      <p>
        Alcohol abuse can seriously damage your health.
        <br />
        Consume with moderation!
      </p>
    </div>
  </div>
);

export default PopupAge;
