import { Component } from 'react';

class Denomination extends Component{
constructor(props){
    super(props)
    this.state = {
        money: '',
        tokens: {
            "twoHundreds": {
                "amount": 200,
                "quantity": 0
            },
            "oneHundreds": {
                "amount": 100,
                "quantity": 0
            },
            "fifty": {
                "amount": 50,
                "quantity": 0
            },
            "twenty": {
                "amount": 20,
                "quantity": 0
            },
            "ten": {
                "amount": 10,
                "quantity": 0
            },
            "five": {
                "amount": 5,
                "quantity": 0
            },
            "one": {
                "amount": 1,
                "quantity": 0
            }
        },
    }

    this.handleChange = this.handleChange.bind(this)
}

handleChange(e){
    let { value } = e.target
    const { tokens } = this.state

    for(const token in tokens){
        if(value >= tokens[token].amount){
            let stateCopy = Object.assign({}, this.state)
            stateCopy.tokens[token].quantity = Math.floor(value / tokens[token].amount)
            this.setState(stateCopy)
    
            value = value % tokens[token].amount
        }
    }
}
  render(){
      const { tokens } = this.state

      const listTokens = Object.keys(tokens).map((keyName, i) => (
      <li key={i}>Number of {tokens[keyName].amount} tokens : {tokens[keyName].quantity}</li>
      ))

    return(
      <div>
          <h1>Send Money !</h1>
          <label>
              Enter your money to get change
              <input type="number" onChange={this.handleChange}/>
          </label>
            {listTokens}
      </div>
    )
  }
}
export default Denomination;
