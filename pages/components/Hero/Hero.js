import styles from './Hero.module.css'
import Button from '../Button/Button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>
          Transformando <strong>segurança</strong> em <strong>produtividade</strong>
          <br></br>
          a solução da Industrial Service.
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
        <Button />
      </div>
    </section>
  )
}