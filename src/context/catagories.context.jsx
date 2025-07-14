import { useEffect, useState, createContext } from "react";
import SHOP_DATA from "../utils/shop-data";
import {
  addCollectionAndDocuments,
  getcatalogAndDocuments,
} from "../utils/firebase/firebaseauth"; // Import your firebase functions if needed

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    getDocuments();
  }, []);
  const getDocuments = async () => {
    return await getcatalogAndDocuments("products")
      .then((catalog) => {
        console.log("catalog", catalog);

        // If products are found, set them to state
        setCategoriesMap(catalog);
      })
      .catch((error) => {
        console.error("Error fetching catalog:", error);
      });
  };

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
