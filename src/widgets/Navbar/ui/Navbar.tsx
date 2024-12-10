import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { Modal } from 'shared/ui/Modal/Modal';

import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAutModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAutModal}
                onClose={onCloseModal}
            />
            {/* <Modal isOpen={isAutModal} onClose={onCloseModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ea illum voluptatem esse eligendi repudiandae excepturi
                veritatis earum tempora ut et
            </Modal> */}
        </div>
    );
};
