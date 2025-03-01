import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './ArticePage.module.scss';

interface ArticePageProps {
    className?: string;
}

const ArticePage = ({ className }: ArticePageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticePage, {}, [className])}>
            Article Page
        </div>
    );
};

export default memo(ArticePage);
