import styles from './Hero.module.css'
import Button from '../Button/Button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>Transformando <strong>segurança</strong> em <strong>produtividade</strong>: a solução da Industrial Service.</h1>
        <h3><strong>Manutenção predial</strong>: tudo isso na Industrial Service.</h3>
      </div>
    </section>
  )
}