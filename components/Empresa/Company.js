import styles from "./Company.module.css";
import Icon from "../Icon/Icon";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Company() {
  return (
    <section className={styles.company} id="company">
      <div className={styles.companyAbout1}>
        <div className={styles.aboutContent}>
          <Icon
            icon={faCircleCheck}
            iconSize="3x"
            iconColor="var(--white)"
            hoverIconColor="green"
          />
          <h2>Desde 2011 no mercado</h2>
          <p>
            A Industrial Service atua no mercado de alpinismo industrial{" "}
            <b>desde 2011</b>, oferecendo serviços seguros e eficientes. Com
            equipe altamente treinada e tecnologia de ponta, a empresa se
            destaca pela qualidade e profissionalismo. Atendendo a diversos
            segmentos, como construção civil, manutenção predial e industrial a
            empresa oferece soluções customizadas para atender às necessidades
            de cada cliente. A missão da Industrial Service é oferecer soluções
            inovadoras,{" "}
            <b>sempre priorizando a segurança e satisfação dos clientes</b>.
          </p>
        </div>
      </div>
      <div className={styles.companyAbout2}>
        <div className={styles.aboutContent}>
          <Icon
            icon={faCircleCheck}
            iconSize="3x"
            iconColor="var(--white)"
            hoverIconColor="green"
          />
          <h2>Equipe qualificada</h2>
          <p>
            A Industrial Service é uma empresa que tem como prioridade a
            qualificação de sua equipe. Nossos colaboradores possuem
            certificações importantes na área de segurança do trabalho, como{" "}
            <b>NR 35, NR 23, NR 33</b>, entre outras. Além disso, possuem
            certificação{" "}
            <b>
              IRATA, ANEAC, ABEND e SPRAT de profissional de acesso por corda
              N1, N2 e N3
            </b>
            , o que atesta a capacidade e o conhecimento avançado na realização
            de trabalhos em altura. Temos orgulho em contar com uma equipe
            altamente capacitada e comprometida em oferecer os melhores serviços
            com segurança, agilidade e eficiência.
          </p>
        </div>
      </div>
      <div className={styles.companyAbout3}>
        <div className={styles.aboutContent}>
          <Icon
            icon={faCircleCheck}
            iconSize="3x"
            iconColor="var(--white)"
            hoverIconColor="green"
          />
          <h2>Segurança garantida</h2>
          <p>
            A Industrial Service utiliza equipamentos de última geração,
            garantindo a segurança e eficiência em todos os serviços de
            alpinismo industrial. Todos os equipamentos passam por rigorosas
            inspeções antes de cada uso, garantindo a segurança de seus
            colaboradores e clientes.{" "}
            <b>Desde sua fundação, nunca houve qualquer acidente de trabalho</b>
            , comprovando a seriedade e comprometimento da empresa com a
            segurança em todas as atividades. A empresa investe constantemente
            em atualizações tecnológicas, para oferecer soluções inovadoras e
            personalizadas a cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
