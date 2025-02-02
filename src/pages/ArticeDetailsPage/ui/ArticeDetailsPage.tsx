import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './ArticeDetailsPage.module.scss';

interface ArticeDetailsPageProps {
    className?: string;
}

const ArticeDetailsPage = ({ className }: ArticeDetailsPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticeDetailsPage, {}, [className])}>
            Article details
        </div>
    );
};

export default ArticeDetailsPage;
