import styles from "./Partners.module.css";
import Image from "next/image";
import angloAmericanLogo from "../../public/partners/angloAmericanLogo.svg";
import VotorantimLogo from "../../public/partners/votorantimLogo.svg";
import itafosLogo from "../../public/partners/itafosLogo.svg";
import fcLogo from "../../public/partners/fcLogo.svg";
import lafargeLogo from "../../public/partners/lafargeLogo.svg";
import jallesLogo from "../../public/partners/jallesLogo.svg";
import albiomaLogo from "../../public/partners/albiomaLogo.svg";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <h4>
        <b>Empresas e colaboradores</b> que confiam na Industrial Service
      </h4>
      <div className={styles.logos}>
        <ul>
          <li>
            <Image src={angloAmericanLogo} alt="Anglo American" />
          </li>
          <li>
            <Image src={VotorantimLogo} alt="Votorantim" />
          </li>
          <li>
            <Image src={itafosLogo} alt="Itafos" />
          </li>
          <li>
            <Image src={fcLogo} alt="FC Incorporadora" />
          </li>
          <li>
            <Image src={lafargeLogo} alt="Lafarge Holcim" />
          </li>
          <li>
            <Image src={jallesLogo} alt="Jalles Machado" />
          </li>
          <li>
            <Image src={albiomaLogo} alt="Albioma" />
          </li>
        </ul>
      </div>
    </section>
  );
}
