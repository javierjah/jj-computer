import React, { Fragment } from 'react';
import cn from 'classnames';
import { Fade } from 'react-awesome-reveal';
import BuildIcon from '@material-ui/icons/Build';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import styles from './how-it-works.module.css';

type Props = {
  className?: string;
};

type HowItWorksData = Array<{
  title: string;
  text: string;
  icon: React.FC<{ className: string }>;
}>;

const HowItWorks: React.FC<Props> = ({ className = '' }) => {
  const title = '¿Cómo funciona?';
  const howItWorksData: HowItWorksData = [
    {
      title: '1. Recibir',
      text: 'Deja tu dispositivo en nuestra dirección para comenzar un diagnóstico.',
      icon: EmojiTransportationIcon,
    },
    {
      title: '2. Diagnóstico',
      text:
        'Se hace un diagnóstico para verificar tiempo y que servicio. Seras avisado en un maximo de 2 días hábiles.',
      icon: BuildIcon,
    },
    {
      title: '3. Entrega',
      text: 'Seras avisado de que tu dispositivo se encuentra disponible para retirarlo.',
      icon: ContactPhoneIcon,
    },
  ];

  return (
    <Fragment>
      {/* Small View */}
      <div className={cn(styles.howItWorksContainerSmall, className)}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.howRow}>
          {howItWorksData.map(({ title: howItWorksTitle, text, icon: Icon }) => {
            return (
              <div key={howItWorksTitle} className={styles.howColumn}>
                <Fade direction="up" duration={200} triggerOnce>
                  <Icon className={styles.serviceIcon} />
                </Fade>
                <div className={styles.howItWorksTextcontrainer}>
                  <Fade direction="up" duration={200} triggerOnce>
                    <h2 className={styles.title}>{howItWorksTitle}</h2>
                  </Fade>
                  <Fade direction="up" duration={200} triggerOnce>
                    <p className={styles.subTitle}>{text}</p>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Small View */}

      {/* Large View */}
      <div className={cn(styles.howItWorksContainerLarge, className)}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.howRow}>
          {howItWorksData.map(({ title: howItWorksTitle, text, icon: Icon }) => {
            return (
              <div key={howItWorksTitle} className={styles.howColumn}>
                <Fade direction="up" duration={200} triggerOnce>
                  <Icon className={styles.serviceIcon} />
                </Fade>
                <div className={styles.howItWorksTextcontrainer}>
                  <Fade direction="up" duration={200} triggerOnce>
                    <h2 className={styles.title}>{howItWorksTitle}</h2>
                  </Fade>
                  <Fade direction="up" duration={200} triggerOnce>
                    <p className={styles.subTitle}>{text}</p>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Large View */}
    </Fragment>
  );
};

export default HowItWorks;
