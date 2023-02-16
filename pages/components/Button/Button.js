import styles from './Button.module.css';
import React from 'react';

export default function Button(props) {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  
  const handleMouseLeave = () => {
    setHover(false);
  };
  
  const buttonStyles = {
    backgroundColor: props.bgColor,
    color: props.color,
    border: props.border,
    borderRadius: props.borderRadius,
    padding: props.padding,
    fontWeight: props.fontWeight,

    // Hover styles
    backgroundColor: hover ? props.hoverBgColor : props.bgColor,
    border: hover ? props.hoverBorder : props.border,
    color: hover ? props.hoverColor : props.color,
  };

  return (
    <button type="button" className={styles.btn} style={buttonStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      { props.content }
    </button>
  );
};