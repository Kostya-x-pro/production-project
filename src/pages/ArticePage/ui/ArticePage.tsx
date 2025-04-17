import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './ArticePage.module.scss';
import { articlePageReducer, articlesPageActions, getArticles } from '../model/slices/articlePageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageIsError,
    getArticlesPageIsLoading,
    getArticlesPageIsView,
} from '../model/selectors/articlesPageSelectors';

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
    const isError = useSelector(getArticlesPageIsError);
    const view = useSelector(getArticlesPageIsView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    return (
        (
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.ArticePage, {}, [className])}>
                    <ArticleViewSelector view={view} onViewClick={onChangeView} />
                    <ArticleList
                        isLoading={isLoading}
                        view={view}
                        articles={articles}
                    />
                </div>
            </DynamicModuleLoader>

        )
    );
};

export default memo(ArticePage);
