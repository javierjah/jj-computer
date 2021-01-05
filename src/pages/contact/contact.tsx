import React, { Fragment, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import cn from 'classnames';

import ActionButton from '../../components/action-button';
import Header from '../../components/header';
import JJMap from '../../components/jj-map';
import styles from './contact.module.css';

const Contact: React.FC = () => {
  const [service, seService] = useState('');

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('123123', 123123);
    e.preventDefault();
  }

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    seService(event.target.value);
  };
  const services: Array<{ id: number; value: string; label: string }> = [
    {
      id: 0,
      value: 'Otro',
      label: 'Otro',
    },
    {
      id: 1,
      value: 'Computadores',
      label: 'Computadores',
    },
    {
      id: 2,
      value: 'Notebooks',
      label: 'Notebooks',
    },
    {
      id: 3,
      value: 'Impresoras',
      label: 'Impresoras',
    },
  ];

  return (
    <Fragment>
      <Header className={styles.header} logoWhite showProgress={false} />
      <div className={styles.contact}>
        <JJMap />
        <div className={styles.contactInfoCard}>
          <form className={styles.emailform} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            <div className={styles.emailFormtitle}>
              <h2>Escríbenos</h2>
              <MailOutlineIcon className={styles.emailIcon} />
            </div>
            <div className={styles.formRow}>
              <TextField className={styles.inputField} required id="name" label="Tu Nombre" />
              <TextField className={styles.inputField} required id="email" label="Email" type="email" />
            </div>
            <div className={styles.formRow}>
              <TextField
                id="phone"
                required
                type="number"
                className={styles.inputField}
                label="Telefono"
                helperText="+569 XXXX XXXX"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.value = e.target.value.toString().slice(0, 8);
                }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+569 </InputAdornment>,
                }}
              />
              <TextField
                id="services-select"
                select
                className={styles.inputField}
                label="Servicio"
                value={service}
                onChange={handleServiceChange}
                helperText="Selecciona el tipo de servicio que buscas"
              >
                {services.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles.formRow}>
              <TextField
                id="description"
                className={cn(styles.inputField, styles.descriptionField)}
                label="Descripción"
                multiline
                rowsMax={4}
                helperText="Describenos que problemas presenta tu dispotivo"
                // value={value}
                // onChange={handleChange}
              />
            </div>
            <ActionButton type="submit" text="Enviar" className={styles.actionButton} />
          </form>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactInfoTitle}>Contáctanos</h2>
            <div className={styles.infoRow}>
              <LocationOnIcon className={styles.contactIcon} />
              <span>Av. Pablo Neruda #035. Villa España, Melipilla.</span>
            </div>
            <div className={styles.infoRow}>
              <SmartphoneIcon className={styles.contactIcon} />
              <span>+569 7847 7250</span>
            </div>
            <div className={styles.infoRow}>
              <EmailIcon className={styles.contactIcon} />
              <span>gmomel@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
