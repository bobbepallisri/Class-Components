import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  oneDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="pargraph">{count}</p>
        <div className="buttonconatiner">
          <button className="button" onClick={this.onIncrement}>
            increase
          </button>
          <button className="button" onClick={this.oneDecrement}>
            decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
