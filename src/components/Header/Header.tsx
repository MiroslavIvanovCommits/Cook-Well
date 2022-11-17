import { useState, useEffect } from "react";
import "./Header.css";

import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

type Ingredient = {
  id: number;
  name: string;
};

type Ingredients = {
  ingredients: Ingredient[];
};

export const Header = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  async function getIngredients(): Promise<Ingredient[]> {
    const url = "https://mocki.io/v1/7a7dc599-ebda-4f84-94a4-40a30209a3bc";
    const response = await axios.get<Ingredients>(url);
    return response.data.ingredients;
  }

  useEffect(() => {
    (async () => {
      const ingredients = await getIngredients();
      const ingredientsArr: string[] = [];
      ingredients.map(({ name }) =>
        ingredientsArr.push(name[0].toUpperCase() + name.substring(1))
      );
      setIngredients(ingredientsArr);
    })();
  }, []);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-logo">
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 23.7C47.6 35.25 37.175 45 24.575 45C11.975 45 0.800002 34.65 2.075 23.175C3.875 7.05 15.8 6 24.575 6C29.9 6 45.65 1.35 47 23.7Z"
              fill="#EF4D3C"
            />
            <path
              d="M8.75 20.25C13.4 13.05 21.35 15.15 23.45 12.45C23.45 17.625 27.2 15.075 29.075 17.4C31.475 20.4 32.375 25.725 35.225 26.775C32.45 20.85 36.95 21.075 30.65 13.125C34.025 15.225 35.75 13.125 40.325 15C36.35 8.7 30.125 10.5 30.125 10.5C30.125 10.5 34.025 6.9 37.325 8.775C33.875 3.675 23.9 10.125 23.9 10.125C23.9 10.125 19.775 3.075 10.925 10.5C16.1 8.4 21.8 10.5 21.8 10.5C21.8 10.5 12.425 8.175 8.75 20.25Z"
              fill="#8CC63E"
            />
            <path
              d="M8.75 20.25C8.75 20.25 14.225 10.125 23.675 11.025C15.35 7.2 8.75 15.3 8.75 20.25Z"
              fill="#64892F"
            />
            <path
              d="M10.925 10.5C10.925 10.5 17.825 5.325 23.9 10.5C22.1 4.2 12.875 7.125 10.925 10.5M25.4 11.175C34.55 15.375 31.475 20.175 35.225 26.925C32.675 21.3 38.975 11.175 25.4 11.175"
              fill="#64892F"
            />
            <path
              d="M21.8 10.5C21.8 10.5 23.9 7.35 24.65 3.45C24.725 2.925 26.975 3 26.9 3.525C26.15 8.55 28.175 11.325 28.175 11.325C28.175 11.325 26.6 11.85 24.65 11.85C22.7 11.925 21.8 10.5 21.8 10.5"
              fill="#64892F"
            />
            <path
              d="M25.775 3.9C26.3963 3.9 26.9 3.69853 26.9 3.45C26.9 3.20147 26.3963 3 25.775 3C25.1537 3 24.65 3.20147 24.65 3.45C24.65 3.69853 25.1537 3.9 25.775 3.9Z"
              fill="#8CC63E"
            />
          </svg>
          <div className="nav-logo-text">
            <p className="nav-logo-top-text">CookWell</p>
            <p className="nav-logo-bottom-text">by Devexperts</p>
          </div>
        </li>
        <li className="nav-search">
          <Multiselect
            className="search-bar"
            isObject={false}
            options={ingredients}
            hideSelectedList={true}
            showCheckbox
            placeholder="Filter Ingridients"
          />
        </li>
      </ul>
    </nav>
  );
};
