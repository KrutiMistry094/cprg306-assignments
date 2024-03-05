"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items }) {
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
        <p>Sort by:</p>
        <button
          className="onclick: bg-blue-500 hover:bg-blue-500  focus:bg-yellow-500 "
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="onclick: bg-blue-500 hover:bg-blue-500 focus:bg-yellow-500"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <div>
        <ul>
          <li>
            {sortItems.map((item) => (
              <Item key={item} {...item} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
