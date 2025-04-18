import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

import { classNames } from 'shared/lib/classNames/classNames';

import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '../../../entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from '../../../entities/User/model/slice/userSlice';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAutModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogOut}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            { isAutModal && (
                <LoginModal
                    isOpen={isAutModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
