import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import cls from './Sidebaritem.module.scss';

interface SidebaritemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const Sidebaritem = ({ item, collapsed }: SidebaritemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span>{t(item.text)}</span>
        </AppLink>
    );
};
