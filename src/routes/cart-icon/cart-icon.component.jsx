import {ReactComponent as ShoppingBagIcon}  from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'; // Assuming you have a CSS file for styles
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context'; // Import the CartContext

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon" onClick={toggleCartDropdown}>
            <ShoppingBagIcon className="shopping-bag-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;