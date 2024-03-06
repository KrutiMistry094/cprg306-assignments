"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItem] = useState(itemsData);

  const handleNewItem = (newItem) => {
    setItem([...items, newItem]);
  };

  return (
    <div>
      <h1 className="m-3 text-white font-bold text-3xl ">Shopping List</h1>
      <NewItem onAddItem={handleNewItem} className="flex-col items-start" />
      <ItemList items={items} />
    </div>
  );
}
