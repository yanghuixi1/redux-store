import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { QUERY_CATEGORIES } from "../../utils/queries";
import {
  updateCategories,
  updateCurrentCategory,
} from "../../redux/slices/storeSlice";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.shop);
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch(updateCategories(categoryData.categories));
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch(updateCategories(categories));
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch(updateCurrentCategory(id));
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
