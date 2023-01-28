import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

  // const forAddingNewItem = (value) => {
  //   onTheChangeItems(value)
  // }

function ShoppingList({ items, onChangingItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItems] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsInSearch = items.filter((item) => {
    if(searchedItem === "") return true;

    return item.name.toLowerCase().includes(searchedItem) 
  })

  const itemsToDisplay = itemsInSearch.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onChangingItems = {onChangingItems} />
      <Filter 
       onCategoryChange={handleCategoryChange} 
       searchChange = {setSearchedItems} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
           key={item.id} 
           name={item.name} 
           category={item.category} />
        ))}
      </ul>
      <p> searchedItem: {searchedItem} </p>
    </div>
  );
}

export default ShoppingList;
