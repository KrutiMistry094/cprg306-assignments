"use client";
import { useState } from "react";

export default function NewItem(onAddItem) {
  const [name, setName] = useState(" ");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    // const newItem = { id, name, quantity, category };
    // onAddItem(newItem);
    onAddItem({ id, name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };
  const newId = Math.floor(Math.random() * 1000000);

  return (
    <main class="flex justify-center">
      <form onSubmit={handleSubmit} className="m-4 p-4 bg-slate-800 text-black">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Item Name"
            required
            className="text-black m-4 inline-block border rounded-md font-medium p-3 shadow-xl pr-32"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="number"
            value={quantity}
            min="1"
            max="99"
            onChange={(event) => setQuantity(event.target.value)}
            required
            className="text-black m-4  inline-block border rounded-md font-medium p-3 shadow-xl"
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="text-black m-4  inline-block border rounded-md font-medium p-3 shadow-xl"
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
        <button
          type="submit"
          className="bg-blue-400 border pl-36 pr-36 flex p-1 rounded-md m-6"
        >
          +
        </button>
      </form>
    </main>
  );
}
