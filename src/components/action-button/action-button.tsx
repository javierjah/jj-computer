import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import cn from 'classnames';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './action-button.module.css';

type Props = {
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  to?: string;
  onClick?: (args: any) => void;
  disabled?: boolean;
  loading?: boolean;
};

const ActionButton: React.FC<Props> = ({
  text = 'Cotiza Aquí',
  className = '',
  type = 'button',
  to = '/contacto',
  onClick = null,
  disabled = false,
  loading = false,
}) => {
  const linkButton = onClick ? (
    <Button
      type={type}
      variant="contained"
      onClick={onClick}
      className={cn(styles.actionButton, className)}
      data-qa="action-button"
      disabled={disabled}
    >
      {text}
    </Button>
  ) : (
    <Link to={to} className={styles.buttonLink}>
      <Button type={type} variant="contained" className={cn(styles.actionButton, className)} disabled={disabled}>
        {text}
      </Button>
    </Link>
  );
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      className={styles.actionButtonContainer}
    >
      {type === 'submit' ? (
        <Button type={type} variant="contained" className={cn(styles.actionButton, className)} disabled={disabled}>
          {text}
        </Button>
      ) : (
        linkButton
      )}
      {loading && <CircularProgress size={24} className={styles.buttonProgress} />}
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
