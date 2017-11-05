import React from 'react';
import PropTypes from 'prop-types';

const CounterInput = (props) =>{
  console.log("props",props.error)
  const {error} = props;
  return (
    <div className="counter-input-container">
      <form onSubmit={props.checkValidation} className="row">
        <div className="form-row align-items-center">
          <div className="form-group col">
            <label for="Start time" className="label">Start Time </label>
            <input type="time" className="form-control" id="startTime" step="1" required />
          </div>
          <div className="form-group col">
            <label className="label"  for="End time">End Time</label>
            <input type="time" className="form-control" id="endTime" step="1" required/>

          </div>
          <div className="form-group col">
            <button className="btn btn-danger btn-block" value="start" type="submit">Start Counter</button>
          </div>
          <div className="">
            {props.error &&
            <div className="feedback">
              {error}
            </div>
            }
          </div>
        </div>
      </form>
    </div>
  )
}
CounterInput.propTypes = {
  error: PropTypes.string,
  checkValidation : PropTypes.function

};
export default CounterInput;

