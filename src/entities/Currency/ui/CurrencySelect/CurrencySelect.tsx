import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?:boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Currency);
        }
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
});
