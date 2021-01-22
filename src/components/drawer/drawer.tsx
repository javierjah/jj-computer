import React, { Fragment, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';

import logo from '../../assets/jj-logo.png';
import logoOnly from '../../assets/jj-only-logo.png';
import styles from './drawer.module.css';

type Props = {
  className?: string;
};

type NavItems = {
  id: number;
  label: string;
  icon: JSX.Element;
};
const navItems: NavItems[] = [
  {
    id: 0,
    label: 'Inicio',
    icon: <HomeIcon className={styles.emailIcon} />,
  },
  {
    id: 1,
    label: 'Contacto',
    icon: <MailOutlineIcon className={styles.emailIcon} />,
  },
];

const DrawerComponent: React.FC<Props> = ({ className = '' }) => {
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);

  function toggleDrawer(open: boolean): void {
    setDrawer(open);
  }

  function handleListitemClick(text: string): void {
    history.push(`/${text}`);
  }

  return (
    <Fragment>
      <Button
        data-qa="drawer-toggle-button"
        onClick={() => toggleDrawer(true)}
        variant="outlined"
        className={className}
      >
        <MenuIcon />
      </Button>
      <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
          data-qa="drawer-item"
          className={styles.drawer}
        >
          <div className={styles.drawerHeader}>
            <img src={logo} alt="BJ logo" className={styles.logo} />
          </div>
          <List className={styles.list}>
            {navItems.map(({ id, label, icon }) => (
              <ListItem button key={id} onClick={() => handleListitemClick(label)} data-qa="drawer-list=item">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText className={styles.listItemText} primary={label} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className={styles.drawerFooter}>
            <img src={logoOnly} alt="BJ logo only" className={styles.logoOnly} />
            <p className={styles.infoRow}>
              <LocationOnIcon className={styles.contactIcon} />
              <span>Av. Pablo Neruda #035. Villa España, Melipilla.</span>
            </p>
            <p className={styles.infoRow}>
              <SmartphoneIcon className={styles.contactIcon} />
              <a href="tel:+56978477250">+569 7847 7250</a>
            </p>
            <p className={styles.infoRow}>
              <EmailIcon className={styles.contactIcon} />
              <a href="mailto: gmomel@gmail.com">gmomel@gmail.com</a>
            </p>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
};
export default DrawerComponent;
