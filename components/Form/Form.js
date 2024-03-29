import styles from './Form.module.scss'
import React from 'react';

export default function Form () {

    const services = [
        'Acesso por cordas',
        'Resgate em altura e espaço confinado',
        'Treinamentos',
        'Manutenção predial',
        'Manutenção industral'
    ]

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [service, setService] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [howFinded, setHowFinded] = React.useState('');
    const [message, setMessage] = React.useState('');

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
                <form className={`${styles.budgetForm} ${isVisible.id === "comOne" ? `comOne` : "comOne" && styles.noDisplay}`} onSubmit={() => {}}>
                    
                </form>
                <form className={`${styles.workForm} ${isVisible.id === "comTwo" ? `comTwo` : "comTwo" && styles.noDisplay}`}>
                    Trabalhe conosco
                </form>
            </div>
        </div>
    )
}