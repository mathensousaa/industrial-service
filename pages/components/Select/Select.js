import styles from './Select.module.css';

export default function Select (props) {

    function isRequired () {
        if (props.selectRequired == "required" && props.labelContent != " ")
            return (
                <small className={styles.req} > *</small>
            )
    }
    return (
        <div className={styles.select}>
            <label for={props.selectID}>{props.labelContent}{isRequired()}</label>
            <select id={props.selectID} required={props.selectRequired} placeholder={props.inputPlaceholder}>\
                <option value="" disabled selected>Selecione...</option>
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}