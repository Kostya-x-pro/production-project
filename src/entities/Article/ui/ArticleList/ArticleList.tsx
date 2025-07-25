import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text, TextSize } from '@/shared/ui/Text';
// import { PAGE_ID } from '@/widgets/Page';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListitem } from '../ArticleListitem/ArticleListitem';
import { ArticleListitemSkeleton } from '../ArticleListitem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 5)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListitemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation('article');
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.map((item) => (
                <ArticleListitem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
// Компонент с виртуализацией virtualized TO DO чуть позже переедем на react-window
// import { HTMLAttributeAnchorTarget, memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import {
//     AutoSizer, List, ListRowProps, WindowScroller,
// } from 'react-virtualized';
// import { classNames } from '@/shared/lib/classNames/classNames';

// import { Text, TextSize } from '@/shared/ui/Text/Text';
// import { PAGE_ID } from '@/widgets/Page/Page';
// import { ArticleView } from '../../model/consts/consts';
// import { Article } from '../../model/types/article';
// import cls from './ArticleList.module.scss';
// import { ArticleListitem } from '../ArticleListitem/ArticleListitem';
// import { ArticleListitemSkeleton } from '../ArticleListitem/ArticleListItemSkeleton';

// interface ArticleListProps {
//     className?: string;
//     articles: Article[];
//     isLoading?: boolean;
//     view?: ArticleView,
//     target?: HTMLAttributeAnchorTarget;
//     virtualized?: boolean
// }

// const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 5)
//     .fill(0)
//     .map((item, index) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <ArticleListitemSkeleton className={cls.card} key={index} view={view} />
//     ));

// export const ArticleList = memo((props: ArticleListProps) => {
//     const { t } = useTranslation('article');
//     const {
//         className,
//         articles,
//         isLoading,
//         view = ArticleView.SMALL,
//         target,
//         virtualized = true,
//     } = props;

//     const isBig = view === ArticleView.BIG;

//     const itemsPerRow = isBig ? 1 : 5;
//     const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

//     const rowRender = (props: ListRowProps) => {
//         const {
//             // eslint-disable-next-line react/prop-types
//             index, isScrolling, key, style,
//         } = props;

//         const items = [];
//         const fromIndex = index * itemsPerRow;
//         const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

//         for (let i = fromIndex; i < toIndex; i += 1) {
//             items.push(<ArticleListitem
//                 article={articles[index]}
//                 view={view}
//                 className={cls.card}
//                 target={target}
//                 key={`str${i}`}
//             />);
//         }

//         return (
//             <div
//                 key={key}
//                 style={style}
//                 className={cls.row}
//             >
//                 {items}
//             </div>
//         );
//     };

//     if (!isLoading && !articles.length) {
//         return (
//             <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
//                 <Text size={TextSize.L} title={t('Статьи не найдены')} />
//             </div>
//         );
//     }

//     return (
//         <WindowScroller
//             scrollElement={document.getElementById(PAGE_ID) as Element}
//         >
//             {({
//                 width,
//                 height,
//                 registerChild,
//                 onChildScroll,
//                 scrollTop,
//                 isScrolling,
//             }) => (
//                 <div
//                     ref={registerChild}
//                     className={classNames(cls.ArticleList, {}, [className, cls[view]])}
//                 >
//                     {virtualized ? (
//                         <List
//                             height={height ?? 700}
//                             rowCount={rowCount}
//                             rowHeight={isBig ? 700 : 330}
//                             rowRenderer={rowRender}
//                             width={width ? width - 80 : 700}
//                             autoHeight
//                             onScroll={onChildScroll}
//                             isScrolling={isScrolling}
//                             scrollTop={scrollTop}
//                         />
//                     ) : (
//                         articles.map((item) => (
//                             <ArticleListitem
//                                 article={item}
//                                 view={view}
//                                 target={target}
//                                 key={item.id}
//                                 className={cls.card}
//                             />
//                         ))
//                     )}
//                     {isLoading && getSkeletons(view)}
//                 </div>
//             )}
//         </WindowScroller>
//     );
// });
