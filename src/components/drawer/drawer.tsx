import React, { Fragment, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';

import styles from './drawer.module.css';

type Props = {
  className?: string;
};

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
          <List>
            {['Inicio', 'Contacto'].map(text => (
              <ListItem button key={text} onClick={() => handleListitemClick(text)} data-qa="drawer-list=item">
                <ListItemIcon>
                  <InboxIcon className={styles.drawerIcon} />
                </ListItemIcon>
                <ListItemText className={styles.listItemText} primary={text} />
              </ListItem>
            ))}
            <Divider />
          </List>
        </div>
      </Drawer>
    </Fragment>
  );
};
export default DrawerComponent;
