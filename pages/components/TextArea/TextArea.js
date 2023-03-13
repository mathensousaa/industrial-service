import styles from './TextArea.module.css'

export default function TextArea (props) {

    function isRequired () {
        if (props.textAreaRequired == "required" && props.labelContent != " ")
            return (
                <small className={styles.req} > *</small>
            )
    }

    return (
        <div className={styles.textArea}>
            <label for={props.textAreaID}>{props.labelContent}{isRequired()}</label>
            <textarea id={props.textAreaID} required={props.textAreaRequired} placeholder={props.textAreaPlaceholder} maxLength={props.maxLength}></textarea>
        </div>
    )
}