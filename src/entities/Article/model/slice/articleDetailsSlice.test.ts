import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/article';

describe('articleDetailsSlice', () => {
    const article: Article = {
        id: '1',
        title: 'Test Article',
        subtitle: 'Test Subtitle',
        img: 'https://workspace.ru/upload/iblock/3ef/py2ql4xlsx0lzialp58p1mr27rjlqpcd/0.jpg',
        views: 1500,
        createdAt: '15.05.2025',
        user: {
            id: '1',
            username: 'admin',
        },
        type: [],
        blocks: [],
    };

    test('should return initial state', () => {
        const state = undefined;
        const action = { type: '' };

        const newState = articleDetailsReducer(state, action);

        expect(newState).toEqual({
            isLoading: false,
            error: undefined,
            data: undefined,
        });
    });

    test('should procces fetchArticleById.pending', () => {
        const state: articleDetailsSchema = {
            isLoading: false,
            error: 'error',
            data: undefined,
        };

        const newState = articleDetailsReducer(state, fetchArticleById.pending('', ''));

        expect(newState).toEqual({
            isLoading: true,
            error: undefined,
            data: undefined,
        });
    });

    test('should procces fetchArticleById.pending', () => {
        const state: articleDetailsSchema = {
            isLoading: false,
            error: 'error',
            data: undefined,
        };

        const newState = articleDetailsReducer(state, fetchArticleById.pending('', ''));

        expect(newState).toEqual({
            isLoading: true,
            error: undefined,
            data: undefined,
        });
    });

    test('should procces fetchArticleById.fulfilled', () => {
        const state: articleDetailsSchema = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const newState = articleDetailsReducer(state, fetchArticleById.fulfilled(article, '', ''));

        expect(newState).toEqual({
            isLoading: false,
            error: undefined,
            data: article,
        });
    });

    test('should procces fetchArticleById.rejected', () => {
        const state: articleDetailsSchema = {
            isLoading: true,
            error: undefined,
            data: undefined,
        };

        const errorPayload = 'error';

        const newState = articleDetailsReducer(state, fetchArticleById.rejected(null, '', '', errorPayload));

        expect(newState).toEqual({
            isLoading: false,
            error: errorPayload,
            data: undefined,
        });
    });
});
