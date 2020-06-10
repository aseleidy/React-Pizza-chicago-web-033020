import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const pizzaUrl = 'http://localhost:3000/pizzas'
class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      editPizza: '',
    }
  }

  componentDidMount() {
    fetch(pizzaUrl)
      .then(response => response.json())
      .then(pizzas => {
        this.setState({
          pizzas: pizzas
        })
      })
  }

  fillForm = (id) => {
    // console.log("edit pizza", id)
    const selectedPizza = this.state.pizzas.find(pizza => pizza.id === id)
    this.setState({
      editPizza: selectedPizza
    })
  }

  updatePizza = (event) => {
    console.log("callback", event.target.value)
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        [event.target.name]: event.target.value
      }
    })
  }

  updateVeg = (event) => {
    let vegValue = (event.target.value === "Vegetarian") ? true : false
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        vegetarian: vegValue
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const updatedPizza = this.state.editPizza
    
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    }
    console.log("the url", `${pizzaUrl}/${updatedPizza.id}`)
    fetch(`${pizzaUrl}/${updatedPizza.id}`, reqObj)
      .then(response => response.json())
      .then(pizzaObj => {
        const updatedPizzas = this.state.pizzas.map(pizza => {
          if (pizza.id === pizzaObj.id) {
            return pizzaObj
          } else {
            return pizza
          }
        })

        this.setState({
          pizzas: updatedPizzas,
          editPizza: ''
        })
      })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} updatePizza={this.updatePizza} updateVeg={this.updateVeg} handleSubmit={this.handleSubmit} />
        <PizzaList pizzas={this.state.pizzas} fillForm={this.fillForm}/>
      </Fragment>
    );
  }
}

export default App;
