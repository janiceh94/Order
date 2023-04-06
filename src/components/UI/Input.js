import styles from "./Input.module.css";
// allows parent components pass down (i.e forward) refs to their children
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input ref={ref}{...props.input}/>
        </div>
    )
})