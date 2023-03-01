import styles from './Contact.module.css'
import Form from '../Form/Form'

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contactColumn}>
                <h2>Empresas líderes sabem a importância da segurança e da manutenção em suas instalações.</h2>
                <p>Os nossos treinamentos de segurança do trabalho são formas de orientar os colaboradores para que eles exerçam suas atividades de forma segura. Isso ajuda a <b>evitar riscos</b> e permite que os profissionais ajam de forma adequada em situações adversas ou perigosas. Os treinamentos <b>deixam a empresa em dia com suas obrigações legais e reduz o risco das pessoas se machucarem durante a execução de suas atividades</b>.</p>
                <p>Com nosso serviço de manutenção <b>ajudamos as empresas a manter seus recursos</b> enquanto controlam tempo e custos para <b>garantir a máxima eficiência</b> do processo de fabricação, das concessionárias e das instalações relacionadas.</p>
            </div>
            <div className={styles.contactColumn}>
                <h2>Converse conosco</h2>
                <Form />
            </div>
        </section>
    )
}