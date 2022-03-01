import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ handleFormSubmit }) {

  const [name, setName] = useState("")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleFormSubmit(
      {
        id: uuid(),
        name,
        // category,
      }

    )
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input value={name} onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
