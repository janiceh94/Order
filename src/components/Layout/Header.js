import styles from "./Header.module.css";
import { Fragment } from "react";
// Allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props){
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Food Orders</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles[`main-image`]}>
                <img src={mealsImage} alt="Table filled with food"/>
            </div>
        </Fragment>
    )
}