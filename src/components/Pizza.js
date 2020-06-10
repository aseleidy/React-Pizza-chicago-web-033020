import React from "react"

const Pizza = (props) => {
  const {id, topping, size, vegetarian } = props.pizza

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={() => props.fillForm(id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
