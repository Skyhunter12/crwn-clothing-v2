import { Fragment } from "react";
import CategoryPreview from "../category-preview/category-preview.component"; // Import the CategoryPreview component
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../routes/store/category/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../utils/spinner/spinner.component"; // Import the Spinner component

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log("category preview", categoriesMap);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          console.log(title, " ==", products);
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={Array.isArray(products) ? products : []}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
