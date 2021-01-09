import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './action-button.module.css';

type Props = {
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  to?: string;
  onClick?: (args: any) => void;
};

const ActionButton: React.FC<Props> = ({
  text = 'Cotiza Aquí',
  className = '',
  type = 'button',
  to = '/contacto',
  onClick = null,
}) => {
  const linkButton = onClick ? (
    <Button type={type} variant="contained" onClick={onClick} className={cn(styles.actionButton, className)} data-qa="">
      {text}
    </Button>
  ) : (
    <Link to={to} className={styles.buttonLink}>
      <Button type={type} variant="contained" className={cn(styles.actionButton, className)}>
        {text}
      </Button>
    </Link>
  );
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {type === 'submit' ? (
        <Button type={type} variant="contained" className={cn(styles.actionButton, className)}>
          {text}
        </Button>
      ) : (
        linkButton
      )}
    </motion.div>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
  to: PropTypes.string,
};

export default ActionButton;
