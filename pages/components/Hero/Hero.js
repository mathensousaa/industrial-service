import styles from './Hero.module.css'
import Button from '../Button/Button'
import Social from '../Social/Social'
import { FaLinkedinIn } from "react-icons/fa";


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
          <Social/>
          <Social/>
          <Social/>
        </div>
      </div>
    </section>
  )
}