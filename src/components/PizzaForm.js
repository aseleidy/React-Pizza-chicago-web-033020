import React from "react"

const PizzaForm = (props) => {
  console.log(props)
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(event) => props.updatePizza(event)}
            name="topping"
            type="text" 
            className="form-control" 
            placeholder="Pizza Topping" 
            value={props.editPizza.topping}/>
        </div>
        <div className="col">
          <select onChange={(event) => props.updatePizza(event)} value={props.editPizza.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(event) => props.updateVeg(event)} className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={props.editPizza.vegetarian} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(event) => props.updateVeg(event)} className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={!props.editPizza.vegetarian} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
