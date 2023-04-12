import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props){
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;
    
    const handleCartItemRemove= (id) => {

    };
    const handleCartItemAdd= (item) => {

    };

    const cartItems = (
        <ul className={styles[`cart-items`]}>
            {cartContext.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        // bind pre-configures a function for future execution and basically allows you to pre-configure the argument that function will receive when it is being executed
                        // onRemove={handleCartItemRemove.bind(null, item.id)}
                        // onAdd={handleCartItemAdd.bind(null. item)}
                    />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button 
                    className={styles[`button--alt`]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}