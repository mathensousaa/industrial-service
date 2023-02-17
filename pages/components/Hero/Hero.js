import styles from './Hero.module.css'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>
          Transformando <strong>segurança</strong> em <strong>produtividade</strong>
        </h1>
        <div className={styles.textWrapper}>
          <h3> aqui você encontra</h3>
          <div className={styles.rotatingText}>
            <span>Manutenção predial</span>
            <span>Manutenção industrial</span>
            <span>Acesso por cordas</span>
            <span>Treinamentos</span>
            <span>Manutenção predial</span>
          </div>
        </div>
        <Button 
          content="Quero fazer um orçamento"
          bgColor="transparent"
          color="var(--red-700)"
          border="2px solid var(--red-700)"
          borderRadius="100px"
          padding="1rem 5rem"
          fontWeight="700"

          hoverBgColor="var(--red-400)"
          hoverBorder="2px solid var(--red-400)"
          hoverColor="var(--white)"
        />
        <div className={styles.socialWrapper}>
          <Icon
            size="62px"
            bgColor="var(--white)"
            link="https://www.linkedin.com/company/industrial-service-br/"
            icon={faLinkedinIn}
            iconSize="xl"
            iconColor="var(--red-700)"

            hoverBgColor="var(--red-400)"
            hoverIconColor="var(--white)"
          />
          <Icon
            size="62px"
            bgColor="var(--white)"
            link="https://www.instagram.com/industrialservicebr/"
            icon={faInstagram}
            iconSize="xl"
            iconColor="var(--red-700)"

            hoverBgColor="var(--red-400)"
            hoverIconColor="var(--white)"
          />
          <Icon 
            size="62px"
            bgColor="var(--white)"
            link="https://wa.me/5562982880057"
            icon={faWhatsapp}
            iconSize="xl"
            iconColor="var(--red-700)"

            hoverBgColor="var(--red-400)"
            hoverIconColor="var(--white)"
          />
        </div>
      </div>
      <div className={styles.arrowWrapper}>
        <span className={styles.arrowText}> Conheça a Industrial Service</span>
        <div className={`${styles.arrow} ${styles.bounce}`}>
          <a href="#partners">
            <FontAwesomeIcon icon={faArrowDown} size="md" color="var(--white)" />
          </a>
        </div>
      </div>
    </section>
  )
}