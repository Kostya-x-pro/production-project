import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecomendationsReducer } from './articleDetailsPageRecomendationsSlice';

export const artticleDetailsReducer = combineReducers<ArticleDetailsPageSchema>({
    recomendations: articleDetailsPageRecomendationsReducer,
    comments: ArticleDetailsCommentsReducer,
});
