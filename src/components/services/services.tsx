import React from 'react';
import cn from 'classnames';

import { ReactComponent as printImage } from '../../assets/printer2.svg';
import { ReactComponent as pcImage } from '../../assets/old_pc.svg';
import { ReactComponent as notebookImage } from '../../assets/note-working.svg';

import ActionButton from '../action-button';

import styles from './services.module.css';

const descriptionPrint =
  'Venta de impresoras de tinta y láser, sistema continuo, multifuncionales y portátiles. Asistencia a los usuarios cuando se presentan problemas de software y hardware';
const descriptionComputer = (
  <div>
    Venta de computadores. Instalación y actualización de software y hardware. Eliminación de software malicioso.
    Formateo, Optimización y Recuperación de sistemas operativos. Actualización de <strong>memoria RAM</strong>,{' '}
    <strong>disco duro</strong> y <strong>Procesadores.</strong>
  </div>
);
const descriptionNotebook =
  'Reparaciones, reemplazos de repuestos y venta notebooks nuevos y usados. Configuración de impresoras y dispositivos de hardware y otros periféricos';

const ImagePrint = printImage;
const ImagePc = pcImage;
const ImageNotebook = notebookImage;
const Services: React.FC = () => {
  return (
    <div className={styles.containerServices}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.wrapperServices}>
        <div className={styles.service}>
          <h3 className={styles.name}>Impresoras</h3>
          <div className={styles.containerImage}>
            <ImagePrint className={styles.image} />
          </div>
          <div className={styles.wrappText}>
            <h3 className={styles.nameLarge}>Impresoras</h3>
            <div className={styles.descriptionText}>{descriptionPrint}</div>
            <ActionButton className={styles.actionButton} />
          </div>
        </div>
        <div className={cn(styles.service, styles.pcService)}>
          <h3 className={styles.name}>Computación</h3>
          <div className={styles.containerImage}>
            <ImagePc className={cn(styles.image, styles.pcImage)} />
          </div>
          <div className={styles.wrappText}>
            <h3 className={styles.nameLarge}>Computación</h3>
            <div className={styles.descriptionText}>{descriptionComputer}</div>
            <ActionButton className={styles.actionButton} />
          </div>
        </div>
        <div className={styles.service}>
          <h3 className={styles.name}>Notebooks</h3>
          <div className={styles.containerImage}>
            <ImageNotebook className={styles.image} />
          </div>
          <div className={styles.wrappText}>
            <h3 className={styles.nameLarge}>Notebooks</h3>

            <div className={styles.descriptionText}>{descriptionNotebook}</div>
            <ActionButton className={styles.actionButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
