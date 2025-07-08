import React, { useContext } from 'react';
import { ProductsContext } from '../../context/product.context'; // Import the ProductContext
import ProductCard from '../product-card/product-card.component';
import './shop.styles.scss'; // Import the styles for the shop component
const Shop = ({}) => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
