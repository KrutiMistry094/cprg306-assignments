"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState(" ");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    console.log(item);
    alert(
      `Added Item: ${item.name}, quantity:${item.quantity},category${item.category}`
    );
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className=""
            placeholder="Item Name"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={quantity}
            min="1"
            max="99"
            onChange={(event) => setQuantity(event.target.value)}
            required
           
          />
          <select
            
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value disabled>
              Category
            </option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="HouseHold">HouseHold</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    </main>
  );
}
