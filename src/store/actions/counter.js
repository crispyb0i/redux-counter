import * as actionTypes from './actionTypes'

export const incrementCounter = () => {
  return {
    type: actionTypes.INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: actionTypes.DECREMENT_COUNTER
  }
}

export const incrementAmount = (num) => {
  return {
    type: actionTypes.INCREMENT_AMOUNT,
    payload: num
  }
}

export const changeTotal = (num) => {
  return {
    type: actionTypes.CHANGE_TOTAL,
    payload: num
  }
}
