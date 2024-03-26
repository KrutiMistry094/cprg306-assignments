"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-services";
import { useUserAuth } from "../_utils/auth-context";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItem] = useState([]);
  
  const handleNewItem = (item) => {
    let cleanedItem;
    if (item.name.includes(",")) {
      cleanedItem = item.name.replace(/,.*/, "");
    } else {
      const regexEmoji = /[\u{1F300}-\u{1F9FF}]/gu;
      cleanedItem = item.name.replace(regexEmoji, "");
    }
    if (cleanedItem) {
      setSelectedItemName(cleanedItem);
    } else {
      console.error("Error: Unable to extract meal name from selected item.");
    }
  };

  useEffect(() => {
    if (user) {
      loadItems(user.uid, setItem);
    }
  }, []);

  const loadItems = async (userId, setItem) => {
    try {
      const itemData = await getItems(userId);
      setItem(itemData);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const newID = await addItem(user.uid, newItem);
      if (newID) {
        newItem.id = newID;
        setItem([...items, newItem]);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="m-3 text-white font-bold text-3xl ">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} className="flex-col items-start" />
        <ItemList items={items} onItemSelect={handleNewItem} />
      </div>
      {/* <div>
        <h1>Meal Ideas</h1>
        <h1 className="text-3xl font-bold">Meal Ideas</h1>
        {selectedItemName ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <p className="m-2 p-2 bg-slate-800">
            Click an item to get meal ideas.
          </p>
        )}
      </div> */}
    </div>
  );
}
