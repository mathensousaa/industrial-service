import AccordionServices from "../Accordion/Accordion";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <div className={styles.servicesWrapper}>
          <div className={styles.servicesItens}>
            <h2 className={styles.servicesTitle}>Nossos Serviços</h2>
            <p>
              Oferecemos soluções completas e personalizadas em segurança e
              manutenção industrial e predial
            </p>
            <AccordionServices />
          </div>
          <div className={styles.servicesImage}>
            {/* <p>Image</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
