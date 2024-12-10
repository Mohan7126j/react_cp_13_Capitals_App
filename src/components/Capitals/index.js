import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    selectedCapital: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({
      selectedCapital: event.target.value,
    })
  }

  getCapital = () => {
    const {selectedCapital} = this.state
    const filteredItem = countryAndCapitalsList.filter(
      item => item.id === selectedCapital,
    )
    console.log(selectedCapital)
    return [filteredItem[0].country, filteredItem[0].id]
  }

  render() {
    const [country, id] = this.getCapital()
    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="input-container">
            <select value={id} id="captial" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
