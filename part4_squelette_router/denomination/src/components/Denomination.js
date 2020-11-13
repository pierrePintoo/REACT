import { Component } from 'react';

class Denomination extends Component{
constructor(props){
    super(props)
    this.state = {
        money: '',
        message: '',
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
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(e){
    this.setState({money: e.target.value})
}

handleSubmit(e){
    const { tokens, money } = this.state
    let value = money
    
    if(value >= 1 && value % 1 === 0){
        for(const token in tokens){
            tokens[token].quantity = 0
            if(value >= tokens[token].amount){
                let stateCopy = Object.assign({}, this.state)
                stateCopy.tokens[token].quantity = Math.floor(value / tokens[token].amount)
                this.setState(stateCopy)
        
                value = value % tokens[token].amount
            }
        }
    } else {
        this.setState({message: 'Vous n\'avez pas entrer un nombre'})
        setTimeout(() => {
            this.setState({message: ''})
        }, 2000)
    }
    e.preventDefault()
}
  render(){
      const { tokens, message } = this.state
      const listTokens = Object.keys(tokens).map((keyName, i) => (
      <li key={i}>Number of {tokens[keyName].amount} tokens : {tokens[keyName].quantity}</li>
      ))

    return(
      <div>
          <h1>Send Money !</h1>
          <p>{message}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
                Enter your money to get change
                <input onChange={this.handleChange}/>
            </label>
            <button type="submit">Give the money</button>
          </form>
            {listTokens}
      </div>
    )
  }
}
export default Denomination;
