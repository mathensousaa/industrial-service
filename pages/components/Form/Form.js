import styles from './Form.module.scss'
import React from 'react';

export default function Form () {
    const [showBudget, setShoBudget] = React.useState(false);
    const [showWork, setShowWork] = React.useState(true);

    return (
        <div>
            <fieldset className={styles.formSwitch}>
                <input type='radio' name='switcher' id='budget' checked="checked"></input>
                <label for='budget'>Orçamento</label>
                <input type='radio' name='switcher' id='workWithUS'></input>
                <label for='workWithUS'>Trabalhe conosco</label>
            </fieldset>
            <div>
                {
                    showBudget && 
                    <form className={styles.budgetForm}>
                        Orçamento
                    </form>
                }
                {
                    showWork && 
                    <form className={styles.workForm}>
                        Trabalhe conosco
                    </form>
                }
            </div>
        </div>
    )
}