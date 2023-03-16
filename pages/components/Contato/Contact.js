import styles from "./Contact.module.css";
import Input from "../Input/Input";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
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

    const services = [
        "Acesso por cordas",
        "Resgate em altura e espaço confinado",
        "Treinamentos",
        "Manutenção predial",
        "Manutenção industrial"
    ]

    const howFinded = [
        "Indicação",
        "Facebook",
        "Instagram",
        "Google",
        "Linkedin",
        "Outros"
    ]

    const contactReason = [
        "Orçamento",
        "Tirar dúvidas",
        "Quero conhecer a empresa, mas sem pretenção de contrato",
        "Outros"
    ]

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
                    <label htmlFor="comOne">Orçamento</label>
                    <input
                        onClick={(e) => {
                            toggleForm(e);
                        }}
                        type="radio"
                        name="switcher"
                        id="comTwo"
                    ></input>
                    <label htmlFor="comTwo">Trabalhe conosco</label>
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
                                labelContent="Telefone"
                                inputID="telephone"
                                type="text"
                                inputRequired="required"
                                inputPlaceholder="(99) 99999-9999"
                                keyboardType="numeric"
                            />
                            <Input
                                labelContent="Empresa"
                                inputID="company"
                                type="text"
                                inputRequired="required"
                            />

                            <Select 
                                labelContent="Serviço desejado"
                                selectID="services"
                                selectRequired="required"
                                itens={services}
                            />
                        </div>
                        <div className={styles.col}>
                            <Input
                                labelContent="E-mail corporativo ou comum"
                                inputID="email"
                                type="email"
                                inputRequired="required"
                            />

                            <Select 
                                labelContent="Como encontrou a Industrial Service?"
                                selectID="howFinded"
                                selectRequired="required"
                                itens={howFinded}
                            />

                            <Select 
                                labelContent="Motivo do contato"
                                selectID="contactReason"
                                selectRequired="required"
                                itens={contactReason}
                            />
                        </div>
                        <div className={styles.textArea}>
                            <TextArea
                                labelContent="Mensagem"
                                textAreaID="message"    
                                textAreaPlaceholder="Se desejar, descreva com mais detalhes o que precisa."
                                maxLength="500"
                            />
                        </div>
                    </form>
                    <form
                        className={`${styles.workForm} ${isVisible.id === "comTwo"
                            ? `comTwo`
                            : "comTwo" && styles.noDisplay
                            }`}
                    >
                        <div className={styles.col}>
                            <Input
                                labelContent="Nome completo"
                                inputID="name"
                                type="text"
                                inputRequired="required"
                            />

                            <Input
                                labelContent="Telefone"
                                inputID="telephone"
                                type="text"
                                inputRequired="required"
                                inputPlaceholder="(99) 99999-9999"
                                keyboardType="numeric"
                            />
                        </div>
                        <div className={styles.col}>
                            <Input
                                labelContent="E-mail"
                                inputID="email"
                                type="email"
                                inputRequired="required"
                            />
                            <Input
                                labelContent="Link do perfil no Linkedin"
                                inputID="linkedinProfile"
                                type="url"
                            />
                        </div>
                        <div className={styles.curriculumDiv}>
                            <Input
                                className={styles.curriculum}
                                labelContent="Anexar currículo (PDF, DOC, DOCX)"
                                inputID="curriculum"
                                type="file"
                                accept=".pdf, .doc, .docx"
                                inputRequired="required"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
