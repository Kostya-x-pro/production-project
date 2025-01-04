import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Sidebaritem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebaritemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const Sidebaritem = ({ item, collapsed }: SidebaritemProps) => {
    const { t } = useTranslation();

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
