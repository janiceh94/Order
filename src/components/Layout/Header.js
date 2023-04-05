import styles from "./Header.module.css";
import { Fragment } from "react";
// Allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM

export default function Header(props){
    return (
        <Fragment>
            <header>
                <h1>Food Orders</h1>
                <button>Cart</button>
            </header>
            <div>
                <img />
            </div>
        </Fragment>
    )
}