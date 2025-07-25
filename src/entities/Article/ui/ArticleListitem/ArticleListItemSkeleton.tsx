import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';

import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListitem.module.scss';

interface ArticleListitemSkeletonProps {
    className?: string;
    view: ArticleView
}

export const ArticleListitemSkeleton = memo((props: ArticleListitemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListitem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />

                    <Skeleton height={200} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListitem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width="85%" height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
