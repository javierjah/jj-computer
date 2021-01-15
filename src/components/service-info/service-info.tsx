import React, { Fragment } from 'react';
import cn from 'classnames';
import { Slide, Fade } from 'react-awesome-reveal';

// import { ReactComponent as OldPc } from '../../assets/old_pc.svg';
import { ReactComponent as OldPc } from '../../assets/note-bug.svg';

import styles from './service-info.module.css';

const defaultText = (
  <div>
    Venta de computadores. Instalación y actualización de software y hardware. Eliminación de software malicioso.
    Formateo, Optimización y Recuperación de sistemas operativos. Actualización de <strong>memoria RAM</strong>,{' '}
    <strong>disco duro</strong> y <strong>Procesadores.</strong>
  </div>
);
type Props = {
  title?: string;
  text?: string;
  imagePosition?: string;
  className?: string;
  image?: React.ComponentType;
  imgClassName?: string;
};

const ServiceInfo: React.FC<Props> = ({
  title = 'Computación',
  text = defaultText,
  imagePosition = 'right',
  image = OldPc,
  className = '',
  imgClassName = '',
}) => {
  const Image = image;
  return (
    <Fragment>
      {/* Small View */}
      <div className={cn(styles.serviceInfoContainerSmall, className)}>
        <div className={styles.serviceInfoTextcontrainer}>
          <Fade direction="up" duration={200} triggerOnce>
            <h1 className={styles.title}>{title}</h1>
          </Fade>
          <Fade className={styles.slide} triggerOnce>
            <Image className={cn(styles.serviceIcon, imgClassName)} />
          </Fade>
          <Fade direction="up" duration={200} triggerOnce>
            <p className={styles.subTitle}>{text}</p>
          </Fade>
        </div>
      </div>
      {/* Small View */}
      {/* Large View */}
      <div className={cn(styles.serviceInfoContainerLarge, className)}>
        {imagePosition === 'left' && (
          <Slide className={styles.slide} direction="left" triggerOnce>
            <Image className={cn(styles.serviceIcon, imgClassName)} />
          </Slide>
        )}
        <div className={styles.serviceInfoTextcontrainer}>
          <Fade direction="up" duration={200} triggerOnce>
            <h1 className={styles.title}>{title}</h1>
          </Fade>
          <Fade direction="up" duration={200} triggerOnce>
            <p className={styles.subTitle}>{text}</p>
          </Fade>
        </div>

        {imagePosition === 'right' && (
          <Slide className={styles.slide} direction="right" triggerOnce>
            <Image className={cn(styles.serviceIcon, imgClassName)} />
          </Slide>
        )}
      </div>
      {/* Large View */}
    </Fragment>
  );
};

export default ServiceInfo;
