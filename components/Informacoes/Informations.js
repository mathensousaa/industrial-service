import {
  faEnvelope,
  faHashtag,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Informations.module.css";
import Icon from "../Icon/Icon";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../Button/Button";

const infos = [
  {
    title: "Endereço",
    icon: faLocationDot,
    content:
      "Rua 17, nº 377 Sala 06 – Setor Pôr do Sol, 76385-015 – Goianésia, Goiás",
    actionTitle: "Rota",
    action: () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const destination = "Rua+17,+377+-+Goianésia,+GO,+76380-000";
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
            window.open(googleMapsUrl, "_blank");
          },
          (error) => {
            console.error("Error obtaining geolocation:", error);
            alert(
              "Não foi possível obter a localização. Verifique as permissões do navegador."
            );
          }
        );
      } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
      }
    },
  },
  {
    title: "Telefone",
    type: "tel",
    icon: faPhone,
    content: "(62) 3353-1033",
    actionTitle: "Ligar",
  },
  {
    title: "E-mail",
    type: "mail",
    icon: faEnvelope,
    content: "industrialservicebr@industrialservicebr.com",
    actionTitle: "Enviar e-mail",
  },
  {
    title: "Social",
    icon: faHashtag,
    buttons: [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/industrial-service-br/",
        icon: faLinkedinIn,
      },
      {
        title: "Instagram",
        link: "https://www.instagram.com/industrialservicebr/",
        icon: faInstagram,
      },
      {
        title: "WhatsApp",
        link: "https://wa.me/5562982880057",
        icon: faWhatsapp,
      },
    ],
  },
];

export default function Informations() {
  return (
    <section className={styles.informations} id="informations">
      <div className={styles.infosContainer}>
        <h2>Nossas informações</h2>
        <div className={styles.infosRow}>
          <div className={styles.infoColumn}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.9620356291737!2d-49.1264546948137!3d-15.32636096134891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935cc22106725519%3A0x48480ceb2c4db1e8!2sR.%2017%2C%20377%20-%20Goian%C3%A9sia%2C%20GO%2C%2076380-000!5e0!3m2!1spt-BR!2sbr!4v1718578076125!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
          </div>
          <div className={styles.infoColumn}>
            {infos.map((info) => (
              <div key={info.title} className={styles.infoItem}>
                <div className={styles.infoItemHeader}>
                  <div className={styles.infoItemTitleWrapper}>
                    <Icon
                      size="32px"
                      icon={info.icon}
                      iconSize="sm"
                      iconColor="var(--red-400)"
                      border="1px solid var(--red-400)"
                    />
                    <h6>{info.title}</h6>
                  </div>
                  <div className={styles.infoItemContent}>
                    {info.content && <p>{info.content}</p>}
                    {(info.action || info.type) && (
                      <div className={styles.infoItemActionsWrapper}>
                        <Button
                          isLink={!!info.type}
                          link={
                            info.type && info.type === "mail"
                              ? `mailto:${info.content}`
                              : info.type === "tel"
                              ? `tel:${info.content}`
                              : ""
                          }
                          bgColor="var(--red-400)"
                          hoverBgColor="transparent"
                          color="var(--white)"
                          border="2px solid var(--red-400)"
                          hoverBorder="2px solid var(--red-400)"
                          hoverColor="var(--red-400)"
                          borderRadius="9999px"
                          padding="4px 16px"
                          onClick={info.action && info.action}
                          content={info.actionTitle}
                        />
                        <Button
                          bgColor="var(--red-400)"
                          hoverBgColor="transparent"
                          color="var(--white)"
                          border="2px solid var(--red-400)"
                          hoverBorder="2px solid var(--red-400)"
                          hoverColor="var(--red-400)"
                          borderRadius="9999px"
                          padding="4px 16px"
                          onClick={() =>
                            navigator.clipboard.writeText(info.content)
                          }
                          content="Copiar"
                        />
                      </div>
                    )}
                  </div>
                  {info.buttons && (
                    <div className={styles.socialButtons}>
                      {info.buttons.map((button) => (
                        <Icon
                          isLink
                          key={button.title}
                          onClick={button.action}
                          className={styles.socialButton}
                          icon={button.icon}
                          iconSize="lg"
                          iconColor="var(--white)"
                          bgColor="var(--red-400)"
                          link={button.link}
                          size="40px"
                          hoverBgColor="transparent"
                          hoverIconColor="var(--red-400)"
                        >
                          {button.title}
                        </Icon>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
