"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="flex m-6 gap-6">
        <p className="font-bold text-xl pt-2">Sort by:</p>
        <button
          className="onclick: bg-blue-500 hover:bg-blue-500  focus:bg-yellow-500 rounded-md p-2 font-bold text-xl"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="onclick: bg-blue-500 hover:bg-blue-500 focus:bg-yellow-500 rounded-md p-2 font-bold text-xl "
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <div>
        <ul>
          {sortItems.map((item, id) => (
            <div key={item.id}>
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                groupedCategory={item.category}
                onSelect={() => onItemSelect(item)}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
