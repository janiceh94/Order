//added to public-index.html-line 31
// allows developers to render their elements outside the React hierarch tree without compromisong the parent-child relationship between components
import styles from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
    return (
        <div 
            className={styles.backdrop}
            onClick={props.onClose}
        >
        </div>
    )
}
const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}
const portalElement = document.getElementById("overlays");

export default function Modal(props){
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}