import styles from "./Contact.module.css";
import Input from "../Input/Input"
import React from "react";

export default function Contact() {
    const [isVisible, setIsVisible] = React.useState({
        id: "comOne",
    });

    const toggleForm = (e) => {
        setIsVisible({
            id: e.target.id,
        });
    };

    return (
        <section className={styles.contact}>
            <div className={styles.contactColumn}>
                <h2>
                    Empresas líderes sabem a importância da segurança e da manutenção em
                    suas instalações.
                </h2>
                <p>
                    Os nossos treinamentos de segurança do trabalho são formas de orientar
                    os colaboradores para que eles exerçam suas atividades de forma
                    segura. Isso ajuda a <b>evitar riscos</b> e permite que os
                    profissionais ajam de forma adequada em situações adversas ou
                    perigosas. Os treinamentos{" "}
                    <b>
                        deixam a empresa em dia com suas obrigações legais e reduz o risco
                        das pessoas se machucarem durante a execução de suas atividades
                    </b>
                    .
                </p>
                <p>
                    Com nosso serviço de manutenção{" "}
                    <b>ajudamos as empresas a manter seus recursos</b> enquanto controlam
                    tempo e custos para <b>garantir a máxima eficiência</b> do processo de
                    fabricação, das concessionárias e das instalações relacionadas.
                </p>
            </div>
            <div className={styles.contactColumn}>
                <h2>Converse conosco</h2>
                <fieldset className={styles.formSwitch}>
                    <input
                        onClick={(e) => {
                            toggleForm(e);
                        }}
                        type="radio"
                        name="switcher"
                        id="comOne"
                    ></input>
                    <label for="comOne">Orçamento</label>
                    <input
                        onClick={(e) => {
                            toggleForm(e);
                        }}
                        type="radio"
                        name="switcher"
                        id="comTwo"
                    ></input>
                    <label for="comTwo">Trabalhe conosco</label>
                </fieldset>
                <div className={styles.formsContainer}>
                    <form
                        className={`${styles.budgetForm} ${isVisible.id === "comOne"
                            ? `comOne`
                            : "comOne" && styles.noDisplay
                            }`}
                        onSubmit={() => { }}
                    >
                        <div className={styles.col}>
                            <Input
                                labelContent="Nome"
                                inputID="name"
                                type="text"
                                inputRequired="required"
                            />
                            <Input
                                labelContent="Empresa"
                                inputID="company"
                                type="text"
                                inputRequired="required"
                            />

                            <label for='services'>Serviço desejado<small className={styles.req}>*</small></label>
                            <select name='services' id='services' required>
                                <option value="value1">Acesso por cordas</option>
                            </select>
                        </div>
                        <div className={styles.col}>
                            <Input
                                labelContent="E-mail corporativo ou comum"
                                inputID="email"
                                type="text"
                                inputRequired="required"
                            />

                            <label for='howFinded'>Como encontrou a Industrial Service?<small className={styles.req}>*</small></label>
                            <select name='howFinded' id='howFinded' required>
                                <option value="value1">Facebook</option>
                            </select>
                        </div>
                    </form>
                    <form
                        className={`${styles.workForm} ${isVisible.id === "comTwo"
                            ? `comTwo`
                            : "comTwo" && styles.noDisplay
                            }`}
                    >
                        Trabalhe conosco
                    </form>
                </div>
            </div>
        </section>
    );
}
