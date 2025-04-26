import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticePage.module.scss';
import { articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { getArticlesPageIsLoading, getArticlesPageIsView } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticePageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer,
};

const ArticePage = ({ className }: ArticePageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageIsView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        (
            <DynamicModuleLoader
                reducers={reducers}
                removeAfterUnmount={false}
            >
                <Page
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ArticePage, {}, [className])}
                >
                    <ArticlesPageFilters />
                    <ArticleList
                        isLoading={isLoading}
                        view={view}
                        articles={articles}
                        className={cls.list}
                    />
                </Page>
            </DynamicModuleLoader>

        )
    );
};

export default memo(ArticePage);
