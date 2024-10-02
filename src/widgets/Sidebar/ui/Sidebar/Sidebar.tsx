import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button/Button';

import * as styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => setCollapsed((prev) => !prev);
    
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('Тоглер') }
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
