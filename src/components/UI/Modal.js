import React from "react"
import ReactDOM from 'react-dom'
import Button from "./Button"
import Card from "./Card"
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onclearModal}></div>
}
const ModalOverLay = props =>{
    return(
        <Card className={classes.modal}>
            <header className={classes.header}> 
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onclearModal}>Okay</Button>
            </footer>
        </Card>
    )
}
const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onclearModal={props.onclearModal}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverLay onclearModal={props.onclearModal} title={props.title} message={props.message}/>,document.getElementById('modal-root'))}
        </React.Fragment>
    )
}
export default Modal