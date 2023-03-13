import styles from './Input.module.css';

export default function Input (props) {

    function isRequired () {
        if (props.inputRequired == "required" && props.labelContent != " ")
            return (
                <small className={styles.req} >*</small>
            )
    }
    return (
        <div className={styles.input}>
            <label for={props.inputID}>{props.labelContent}{isRequired()}</label>
            <input type={props.type} id={props.inputID} required={props.inputRequired} placeholder={props.inputPlaceholder}></input>
        </div>
    )
}