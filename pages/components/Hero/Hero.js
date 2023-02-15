import styles from './Hero.module.css'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

import { faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
        <div className={styles.socialWrapper}>
          <Icon
            size="62px"
            link="https://www.linkedin.com/company/industrial-service-br/"
            icon={faLinkedinIn}
            iconSize="lg"
            iconColor="var(--red-700)"
          />
          <Icon
            size="62px"
            link="https://www.instagram.com/industrialservicebr/"
            icon={faInstagram}
            iconSize="lg"
            iconColor="var(--red-700)"
          />
          <Icon 
            size="62px"
            link="https://wa.me/5562982880057"
            icon={faWhatsapp}
            iconSize="lg"
            iconColor="var(--red-700)"
          />
        </div>
      </div>
    </section>
  )
}