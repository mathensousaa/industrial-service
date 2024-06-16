import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Services } from "../../data/Services";
import Icon from "../Icon/Icon";
import styles from "./Accordion.module.css";

function AccordionServices() {
  const [activeItem, setActiveItem] = useState("0"); // Estado para controlar o item ativo

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Services.findIndex(
        (service) => service.id === activeItem
      );
      const nextIndex = (currentIndex + 1) % Services.length;
      setActiveItem(Services[nextIndex].id);
    }, 7000);

    return () => {
      clearInterval(timer); // Limpar o temporizador ao desmontar o componente
    };
  }, [activeItem]);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <Accordion
      activeKey={activeItem}
      defaultActiveKey="0"
      className={styles.Accordion}
    >
      {Services.map((service) => (
        <Accordion.Item
          key={service.id}
          eventKey={service.id}
          className={styles.accordionItem}
        >
          <Accordion.Header
            onClick={() => handleItemClick(service.id)}
            className={styles.accordionHeader}
          >
            <Icon
              size="40px"
              bgColor={
                activeItem === service.id ? "var(--red-400)" : "var(--white)"
              }
              icon={service.icon}
              iconSize="lg"
              iconColor={
                activeItem === service.id ? "var(--white)" : "var(--red-400)"
              }
              hoverBgColor="var(--red-400)"
              hoverIconColor="var(--white)"
            />
            <span>{service.title}</span>
          </Accordion.Header>
          <Accordion.Body>{service.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionServices;
