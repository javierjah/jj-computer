import React, { Fragment } from 'react';
import cn from 'classnames';
import { Slide, Fade } from 'react-awesome-reveal';

import { ReactComponent as OldPc } from '../../assets/old_pc.svg';
import styles from './service-info.module.css';

const defaultText = (
  <div>
    Computadores de todo tipo: Antiguos y nuevos. Actualizamos <strong>memoria RAM</strong>, <strong>disco duro</strong>{' '}
    y <strong>Procesadores.</strong>
  </div>
);
type Props = {
  title?: string;
  text?: string;
  imagePosition?: string;
  className?: string;
  image?: React.ComponentType;
};

const ServiceInfo: React.FC<Props> = ({
  title = 'Computación',
  text = defaultText,
  imagePosition = 'right',
  image = OldPc,
  className = '',
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
          <Fade direction="up" duration={200} triggerOnce>
            <p className={styles.subTitle}>{text}</p>
          </Fade>
        </div>
        <Fade className={styles.slide} triggerOnce>
          <Image className={styles.serviceIcon} />
        </Fade>
      </div>
      {/* Small View */}
      {/* Large View */}
      <div className={cn(styles.serviceInfoContainerLarge, className)}>
        {imagePosition === 'left' && (
          <Slide className={styles.slide} direction="left" triggerOnce>
            <Image className={styles.serviceIcon} />
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
            <Image className={styles.serviceIcon} />
          </Slide>
        )}
      </div>
      {/* Large View */}
    </Fragment>
  );
};

export default ServiceInfo;
