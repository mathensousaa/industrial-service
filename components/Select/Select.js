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
            <label htmlFor={props.selectID}>{props.labelContent}{isRequired()}</label>
            <select defaultValue={'DEFAULT'} id={props.selectID} required={props.selectRequired} placeholder={props.inputPlaceholder}>\
                <option value="DEFAULT" disabled>Selecione...</option>
                {props.itens?.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}