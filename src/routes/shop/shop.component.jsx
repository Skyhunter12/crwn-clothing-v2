import "./shop.styles.scss"; // Import the styles for the shop component
import { Route, Routes } from "react-router-dom";
import Category from "../catagory/(title).component";
import CategoriesPreview from "../../categories-preview/categories-preview.component"; // Import the CategoriesPreview component
import { useEffect } from "react";
import { setCategoriesStart } from "../store/category/category.action";
import { useDispatch } from "react-redux";
// Import the Category component

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":title" element={<Category />} />
    </Routes>
  );
};

export default Shop;
