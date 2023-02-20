// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatBanana = () => {
    this.setState(prev => ({count1: prev.count1 + 1}))
  }

  eatMango = () => {
    this.setState(prev => ({count2: prev.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <h1>
            Bob ate {count2} mangoes {count1} bananas
          </h1>
          <div className="vs-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mang"
                alt="mango"
              />
              <br />
              <button onClick={this.eatMango}>Eat Mango</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banan"
                alt="banana"
              />
              <br />
              <button onClick={this.eatBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
