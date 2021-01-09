import React, { Fragment, useEffect, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ActionButton from '../../components/action-button';
import Header from '../../components/header';
import JJMap from '../../components/jj-map';
import styles from './contact.module.css';

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
type Inputs = {
  name: string;
  email: string;
  phone: string;
  services: string;
  description: string;
  service?: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, errors, setValue, reset } = useForm<Inputs>();
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const emailContactProdUrl = process.env.REACT_APP_EMAIL_SENDER_URL_PROD_URL || '';
  const emailContactUrl =
    process.env.NODE_ENV === 'production' ? emailContactProdUrl : 'http://localhost:3002/api/v1/email/contact';

  async function handleFormSubmit(data: Inputs) {
    try {
      setLoading(true);

      const contactForm = {
        userName: data.name,
        companyName: 'JJ Computación',
        email: data.email,
        companyEmail: 'javier.palacios.h@gmail.com',
        phoneNumber: `+569 ${data.phone}`,
        description: data.description,
        template: 'serviceContactEmail',
        subject: 'Servicio Técnico',
        service: data.service,
      };

      await axios.post(emailContactUrl, contactForm);
      reset();
      setValue('service', '');
      setService('');
      setOpen(true);
    } catch (error) {
      reset();
      setValue('service', '');
      setService('');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.toString().slice(0, 8);
  };

  const services: Array<{ value: string; label: string }> = [
    {
      value: 'Otro',
      label: 'Otro',
    },
    {
      value: 'Computadores',
      label: 'Computadores',
    },
    {
      value: 'Notebooks',
      label: 'Notebooks',
    },
    {
      value: 'Impresoras',
      label: 'Impresoras',
    },
  ];

  function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue('service', event.target.value);
    setService(event.target.value);
  }

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    register('service');
  }, [register]);

  return (
    <Fragment>
      <Header className={styles.header} logoWhite showProgress={false} />
      <div className={styles.contact}>
        <JJMap />
        <div className={styles.contactInfoCard}>
          <form className={styles.emailform} noValidate autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={styles.emailFormtitle}>
              <h2>Escríbenos</h2>
              <MailOutlineIcon className={styles.emailIcon} />
            </div>
            <div className={styles.formRow}>
              <TextField
                required
                id="name"
                name="name"
                label="Tu Nombre"
                className={styles.inputField}
                helperText={errors.name?.message}
                error={Boolean(errors.name?.message)}
                inputRef={register({ required: 'El nombre es requerido' })}
              />
              <TextField
                required
                id="email"
                type="email"
                name="email"
                label="Email"
                className={styles.inputField}
                helperText={errors.email?.message}
                error={Boolean(errors.email?.message)}
                inputRef={register({
                  required: 'El email es requerido',
                  pattern: {
                    value: emailPattern,
                    message: 'Ingresa un email valido',
                  },
                })}
              />
            </div>
            <div className={styles.formRow}>
              <TextField
                required
                id="phone"
                name="phone"
                type="number"
                inputRef={register({
                  required: 'El telefono también es requerido',
                  minLength: {
                    value: 8,
                    message: 'Mínimo 8 números',
                  },
                  maxLength: {
                    value: 8,
                    message: 'Máximo 8 números',
                  },
                })}
                label="Telefono"
                error={Boolean(errors.phone?.message)}
                onInput={handlePhoneChange}
                className={styles.inputField}
                helperText={errors.phone?.message || '+569 XXXX XXXX'}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+569 </InputAdornment>,
                }}
              />
              <TextField
                select
                id="service"
                name="service"
                label="Servicio (opcional)"
                value={service}
                onChange={handleSelectChange}
                className={styles.inputField}
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
                multiline
                rowsMax={4}
                id="description"
                name="description"
                label="Descripción"
                error={Boolean(errors.description?.message)}
                className={cn(styles.inputField, styles.descriptionField)}
                helperText={errors.description?.message || 'Describenos que problemas presenta tu dispotivo'}
                inputRef={register({
                  required: 'La descripciónes requerida, por favor cuentanos un poco del problema',
                })}
              />
            </div>
            <ActionButton
              type="submit"
              text="Enviar"
              className={styles.actionButton}
              disabled={loading}
              loading={loading}
            />
          </form>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactInfoTitle}>Contáctanos</h2>
            <div className={styles.infoRow}>
              <LocationOnIcon className={styles.contactIcon} />
              <span>Av. Pablo Neruda #035. Villa España, Melipilla.</span>
            </div>
            <div className={styles.infoRow}>
              <SmartphoneIcon className={styles.contactIcon} />
              <a href="tel:+56978477250">+569 7847 7250</a>
            </div>
            <div className={styles.infoRow}>
              <EmailIcon className={styles.contactIcon} />
              <a href="mailto: gmomel@gmail.com">gmomel@gmail.com</a>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="El email ha sido enviado con éxito"
            TransitionComponent={(props: TransitionProps) => <Slide {...props} direction="up" />}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
