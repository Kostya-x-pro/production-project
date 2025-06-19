import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbidenPage = () => {
    const { t } = useTranslation('');

    return (
        <Page>
            {t('Доступ запрещен')}
        </Page>
    );
};

export default ForbidenPage;
