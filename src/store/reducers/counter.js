import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
  counter: 0,
  amount: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.INCREMENT_AMOUNT:
      return {
        ...state,
        amount: action.payload
      }
    case actionTypes.CHANGE_TOTAL:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    default:
      return state
  }
}

export default reducer
