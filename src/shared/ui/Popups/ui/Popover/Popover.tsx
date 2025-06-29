import { useTranslation } from 'react-i18next';
import { Popover as HPopover } from '@headlessui/react';

import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { mapDirectionClasses } from '../styles/consts';
import popupsCls from '../styles/popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection,
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className, trigger, children, direction = 'bottom right',
    } = props;
    const { t } = useTranslation();

    const menuClasses = [mapDirectionClasses[direction]];

    return (
        <HPopover className={classNames(popupsCls.popup, {}, [className])}>
            <HPopover.Button as="div" className={popupsCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
