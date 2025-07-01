import CategoryItem from "../category/category.component";
import './directory.style.scss';

const Directory = ({ categories }) => {
    return (
    <div className='directories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;