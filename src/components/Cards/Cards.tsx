import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import "./Cards.css";

import axios from "axios";

type Recipe = {
  id: number;
  title: string;
  timeToPrepare: string;
  ingredients: [];
  preparationMethod: [];
};

type RecipeBook = {
  recipes: Recipe[];
};

export const Cards = () => {
  const [recipes, setRecipes] = useState<[] | Recipe[]>([]);

  async function getRecipes(): Promise<Recipe[]> {
    const url = "https://mocki.io/v1/7a7dc599-ebda-4f84-94a4-40a30209a3bc";
    const response = await axios.get<RecipeBook>(url);
    return response.data.recipes;
  }

  useEffect(() => {
    (async () => {
      const recipes = await getRecipes();
      setRecipes(recipes);
    })();
  }, []);

  return (
    <div>
      <ul className="recipies">
        {recipes.map((recipie: Recipe) => (
          <Card
            key={recipie.id}
            title={recipie.title}
            time={recipie.timeToPrepare}
            preparation={recipie.preparationMethod}
            ingredients={recipie.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          />
        ))}
      </ul>
    </div>
  );
};
