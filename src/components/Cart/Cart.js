import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

export default function Cart(props){
    const cartContext = useContext(CartContext);
    const cartItems = (
        <ul className={styles[`cart-items`]}>
            {cartContext.items.map((item) => (
                    <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>Total</span>
            </div>
            <div className={styles.actions}>
                <button 
                    className={styles[`button--alt`]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}