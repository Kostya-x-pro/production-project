import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import * as cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                type="text"
                placeholder={t('Введите имя')}
                className={cls.input}
            />
            <Input type="text" placeholder={t('Введите пароль')} className={cls.input} />
            <Button className={cls.LoginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
