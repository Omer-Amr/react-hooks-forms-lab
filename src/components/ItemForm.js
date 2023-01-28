import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubject(event){
    const handledName = event.target.value
    setItemName(handledName)
  }

  function handleCategory(event) {
    const handledCategory = event.target.value
    setItemCategory(handledCategory)
  }

  function handleSubmit(event){
    event.preventDefault();
    const data = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(data)
  }



  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName} 
          onChange={handleSubject} />
      </label>

      <label>
        Category:
        <select 
            name="category"
            onChange={handleCategory} 
            value={itemCategory} >
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
