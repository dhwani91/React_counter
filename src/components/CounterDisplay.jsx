import React from 'react';

const CounterDisplay = (props) => {

  return (
    <div className="counter-display-container row">
      <div className="col-md-12 text-center">
        <div id="clockdiv">
          <div className="mr-2">
            <span className="hours">00</span>
            <span className="colon"> : </span>
            <div className="smalltext">HH</div>
          </div>
          <div className="mr-2">
            <span className="minutes">00</span>
            <span className="colon"> : </span>
            <div className="smalltext">MM</div>
          </div>
          <div className="mr-2">
            <span className="seconds">00</span>
            <div className="smalltext">SS</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CounterDisplay;

