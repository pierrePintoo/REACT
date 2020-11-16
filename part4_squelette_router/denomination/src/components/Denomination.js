import { Component } from 'react';

import styled from 'styled-components'
class Denomination extends Component{
constructor(props){
    super(props)
    this.state = {
        money: '',
        message: '',
        tokens: [
            {
                "amount": 200,
                "quantity": 0
            },
            {
                "amount": 100,
                "quantity": 0
            },
            {
                "amount": 50,
                "quantity": 0
            },
            {
                "amount": 20,
                "quantity": 0
            },
            {
                "amount": 10,
                "quantity": 0
            },
            {
                "amount": 5,
                "quantity": 0
            },
            {
                "amount": 1,
                "quantity": 0
            }
        ],
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
        for(let i = 0; i < tokens.length; i++){
            tokens[i].quantity = 0
            if(value >= tokens[i].amount){
                let stateCopy = Object.assign({}, this.state)
                stateCopy.tokens[i].quantity = Math.floor(value / tokens[i].amount)
                this.setState(stateCopy)
        
                value = value % tokens[i].amount
            }
        }
    } else {
        this.setState({message: 'Vous n\'avez pas entrer un nombre entier'})
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

        const Pre = styled.h1`
            color: palevioletred;
            font-size: 1em;
        `;



    return(
      <div>
          <h1>Send Money !</h1>
          <p>{message}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
                <Pre>Enter your money to get change</Pre>
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
