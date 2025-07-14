import "./category.styles.scss";

const CategoryItem = ({ category }) => {
  let { title, imageUrl, subtitle } = category;
  return (
    <div className="directory-item-container">
      <img
        style={{ borderRadius: "5px" }}
        className="category-image"
        src={imageUrl}
        alt={title}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
