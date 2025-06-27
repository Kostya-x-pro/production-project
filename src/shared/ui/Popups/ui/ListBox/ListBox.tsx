import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import { mapDirectionClasses } from '../styles/consts';
import cls from './ListBox.module.scss';
import popupsCls from '../styles/popups.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[],
    className?: string
    value?: string,
    defaultValue?: string;
    onChange?: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection,
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className, items, value, defaultValue, onChange, readonly, direction = 'bottom left', label,
    } = props;

    const optionsClasses = [mapDirectionClasses[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(popupsCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListbox.Button
                    aria-disabled={readonly}
                    className={popupsCls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={readonly}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [popupsCls.active]: active,
                                        [popupsCls.disabled]: item.disabled,
                                    },
                                )}
                                >
                                    {selected && '✔️'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}
