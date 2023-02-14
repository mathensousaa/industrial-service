import styles from './Hero.module.css'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { FaLinkedinIn } from "react-icons/fa";

import LinkedinIcon from '../../../public/icons/linkedin-in.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
import WhatsappIcon from '../../../public/icons/whatsapp.svg';

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
            src={LinkedinIcon}
            alt="Linkedin"
            width={20}
            height={20}
          />
          <Icon
            size="62px"
            link="https://www.instagram.com/industrialservicebr/"
            src={InstagramIcon}
            alt="Instagram"
            width={20}
            height={20}
          />
          <Icon 
            size="62px"
            link="https://wa.me/5562982880057"
            src={WhatsappIcon}
            alt="Whatsapp"
            width={20}
            height={20}
          />
        </div>
      </div>
    </section>
  )
}