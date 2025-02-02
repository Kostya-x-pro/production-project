import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';

import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './ArticeDetailsPage.module.scss';

interface ArticeDetailsPageProps {
    className?: string;
}

const ArticeDetailsPage = ({ className }: ArticeDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticeDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticeDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticeDetailsPage;
