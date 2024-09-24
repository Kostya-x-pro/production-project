import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import * as styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}


export const Navbar = ({className}: NavbarProps) => {
  return (
     <div className={classNames(styles.navbar, {}, [])}> 
        <div className={styles.links}>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>Главная страница</AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
  );
};
