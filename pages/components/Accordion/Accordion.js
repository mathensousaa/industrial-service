import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Services } from '../Servicos/ServicesArray';
import Icon from '../Icon/Icon';
import styles from './Accordion.module.css';

function AccordionIndustrial() {
  const [activeItem, setActiveItem] = useState('0'); // Estado para controlar o item ativo

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Services.findIndex((service) => service.id === activeItem);
      const nextIndex = (currentIndex + 1) % Services.length;
      setActiveItem(Services[nextIndex].id);
    }, 8000);

    return () => {
      clearInterval(timer); // Limpar o temporizador ao desmontar o componente
    };
  }, [activeItem]);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <Accordion activeKey={activeItem} defaultActiveKey="0">
      {Services.map((service) => (
        <Accordion.Item key={service.id} eventKey={service.id}>
          <Accordion.Header onClick={() => handleItemClick(service.id)}>
            <Icon
              size="32px"
              bgColor={activeItem === service.id ? 'var(--red-400)' : 'transparent'}
              icon={service.icon}
              iconSize="sm"
              iconColor={activeItem === service.id ? 'var(--white)' : 'var(--red-400)'}
              hoverBgColor="var(--red-400)"
              hoverIconColor="var(--white)"
            />
            {service.title}
          </Accordion.Header>
          <Accordion.Body>{service.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionIndustrial;