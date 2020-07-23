import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './store/actions/counter'

function App(props) {

  const handleIncrement = () => {
    props.increment()
  }

  const handleDecrement =() => {
    props.decrement()
  }

  const handleChange = (e) => {

    props.incrementAmount(parseInt(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeTotal(props.amount)
  }

  return (
    <div className="App">
      <h1>REDUX COUNTER APP</h1>
      <p>{props.count}</p>
      <button className="incdec" onClick={handleIncrement}>+</button>
      <button className="incdec" onClick={handleDecrement}>-</button>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="number" placeholder="enter number"/>
        <button className="submit" type="submit">submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter,
    amount: state.amount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(actions.incrementCounter()),
    decrement: () => dispatch(actions.decrementCounter()),
    incrementAmount: (num) => dispatch(actions.incrementAmount(num)),
    changeTotal: (num) => dispatch(actions.changeTotal(num))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
