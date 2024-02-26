"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const sortItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return a.quantity - b.quantity;
  });

  return (
    <div>
      <button
        className={sortBy === "name" ? "bg-blue-500 " : ""}
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        className={sortBy === "category" ? "bg-blue-500" : ""}
        onClick={() => setSortBy("category")}
      >
        Category
      </button>
    </div>
  );
}
