import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAutModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAutModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ea illum voluptatem esse eligendi repudiandae excepturi
                veritatis earum tempora ut et
            </Modal>
        </div>
    );
};
