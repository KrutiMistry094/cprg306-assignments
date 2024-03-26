"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  function mealDisplay() {
    if (meals === null || ingredient === "") {
      return (
        <li>
          <p>Select an item to see meal ideas</p>
        </li>
      );
    } else {
      return meals.map((meal) => (
        <li key={meal.idMeal}>
          <p>{meal.strMeal}</p>
        </li>
      ));
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2> Meal Ideas</h2>
      <div>
        <ul>{mealDisplay()}</ul>
      </div>
    </div>
  );
}
