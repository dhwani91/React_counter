export const RESET_COUNTER = 'RESET_COUNTER';
export const START_COUNTER = 'START_COUNTER';
export const STOP_COUNTER = 'STOP_COUNTER';
export const VALIDATION_ERROR = 'VALIDATION_ERROR';

export const validationError = (errorMessage) => {
  return {
    type: VALIDATION_ERROR,
    payload: errorMessage
  }

}
export const resetCounter = () => {
  return {
    type: RESET_COUNTER
  }
}
export const startCounter = (startTime,endTime) => {
  return {
    type: START_COUNTER,
    payload:{start:startTime,end:endTime}
  }
}
