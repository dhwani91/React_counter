import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as Actions from '../actions/action_counter.js';
import CounterInput from '../components/CounterInput.jsx';
import CounterDisplay from '../components/CounterDisplay.jsx';

class HeroContainer extends Component {
  constructor(props) {
    super(props)
    this.checkValidation = this.checkValidation.bind(this);
    this.counter = this.counter.bind(this);
    this.clearCounter=this.clearCounter.bind(this);
  }
  counter(endTime, startTime,flag) {
    let diffTime = endTime - startTime,
      duration = moment.duration(diffTime + 1000, 'milliseconds'),
      interval = 1000;
    let clock = document.getElementById('clockdiv'),
      hoursSpan = clock.querySelector('.hours'),
      minutesSpan = clock.querySelector('.minutes'),
      secondsSpan = clock.querySelector('.seconds');

    if (diffTime <= 0) {
      clearInterval(startCounter);
    } else
      var startCounter = setInterval(function () {
        duration = moment.duration(duration - interval, 'milliseconds');
        if (duration._milliseconds <= 0 || flag === false) {
          clearInterval(startCounter);
        }
        hoursSpan.innerHTML = ('0' + duration.hours()).slice(-2);
        minutesSpan.innerHTML = ('0' + duration.minutes()).slice(-2);
        secondsSpan.innerHTML = ('0' + duration.seconds()).slice(-2);
      }, interval);
  }
  clearCounter(){
    for (var i = 1; i < 99999; i++)
      window.clearInterval(i);
  }
  checkValidation(e) {
    e.preventDefault();
    let start_time = document.getElementById('startTime').value,
      end_time = document.getElementById('endTime').value,
      end = Date.parse('1970-01-01T' + end_time + 'Z'),
      start = Date.parse('1970-01-01T' + start_time + 'Z');
      this.clearCounter();
    if (end >= start) {
      this.props.startCounter(start,end)
      this.counter(end, start,true);
    }
    else {
      this.props.validationError("End Date should be greater than Start Date");
      this.counter(end,start,false)
      this.clearCounter();
    }
  }
  render() {
    return (
      <div className="container homepage-hero">
        <CounterDisplay  />
        <CounterInput checkValidation={this.checkValidation} error={this.props.error}/>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.counter.error,
    start: state.counter.start,
    end: state.counter.end
  };
};
export default connect(mapStateToProps, Actions)(HeroContainer);

