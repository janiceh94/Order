import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem(props) {
    const cartContext = useContext(CartContext);
    //Only use 2 decimal places
    const price = `$${props.price.toFixed(2)}`
    const handleAddToCart = amount => {
        // .addItem - called from CartProvider.js
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm 
                    id={props.id}
                    onAddToCart={handleAddToCart}
                />
            </div>
        </li>
    )
}