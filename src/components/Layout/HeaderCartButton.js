import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartButton(props){
    return (
        <button>
            <span>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span>
                Item Count
            </span>
        </button>
    )
}