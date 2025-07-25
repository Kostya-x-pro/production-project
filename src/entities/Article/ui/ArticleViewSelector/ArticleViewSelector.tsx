import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Icon } from '@/shared/ui/Icon';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewTypes) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewTypes.view)}
                    key={viewTypes.view}
                >
                    <Icon
                        Svg={viewTypes.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewTypes.view !== view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
