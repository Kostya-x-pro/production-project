import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

// Компонент для тестирования ошибки и ErrorBundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrowError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            style={{ marginRight: '20px' }}
            onClick={onThrowError}
        >
            {t('throw error')}
        </Button>
    );
};
