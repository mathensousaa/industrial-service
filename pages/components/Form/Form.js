import styles from './Form.module.scss'
import React from 'react';

export default function Form () {
    const [isVisible, setIsVisible] = React.useState({
        id: "comOne",
    });

    const toggleForm = (e) => {
        setIsVisible({
            id: e.target.id,
        });
    }
    return (
        <div className={styles.container}>
            <fieldset className={styles.formSwitch}>
                <input onClick={(e) => {toggleForm(e)}} type='radio' name='switcher' id='comOne'></input>
                <label for='comOne'>Orçamento</label>
                <input onClick={(e) => {toggleForm(e)}} type='radio' name='switcher' id='comTwo'></input>
                <label for='comTwo'>Trabalhe conosco</label>
            </fieldset>
            <div className={styles.formContainer}>
                <form className={`${styles.budgetForm} ${isVisible.id === "comOne" ? `comOne` : "comOne" && styles.noDisplay}`}>
                    <div className={styles.col}>
                        <label for='name'>Nome<small className={styles.req}>*</small></label>
                        <input type='text' id='name' required></input>

                        <label for='company'>Empresa<small className={styles.req}>*</small></label>
                        <input type='text' id='company' required></input>

                        <label for='services'>Serviço desejado<small className={styles.req}>*</small></label>
                        <select name='services' id='services' required>
                            <option value="value1">Acesso por cordas</option>
                        </select>
                    </div>
                    <div className={styles.col}>
                    <label for='email'>E-mail corporativo ou comum<small className={styles.req}>*</small></label>
                        <input type='email' id='email' required></input>

                        <label for='address'>Endereço da empresa à realizar o serviço<small className={styles.req}>*</small></label>
                        <input type='text' id='company' required></input>

                        <label for='howFinded'>Como encontrou a Industrial Service?<small className={styles.req}>*</small></label>
                        <select name='howFinded' id='howFinded' required>
                            <option value="value1">Facebook</option>
                        </select>
                    </div> 
                </form>
                <form className={`${styles.workForm} ${isVisible.id === "comTwo" ? `comTwo` : "comTwo" && styles.noDisplay}`}>
                    Trabalhe conosco
                </form>
            </div>
        </div>
    )
}