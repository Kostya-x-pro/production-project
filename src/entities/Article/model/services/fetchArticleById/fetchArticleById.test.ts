import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { fetchArticleById } from './fetchArticleById';
import { Article } from '../../types/article';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchArticleById', () => {
    const articleId = '1';
    const article: Article = {
        id: '1',
        title: 'Test Article',
        subtitle: 'Test Subtitle',
        img: 'https://workspace.ru/upload/iblock/3ef/py2ql4xlsx0lzialp58p1mr27rjlqpcd/0.jpg',
        views: 1500,
        createdAt: '15.05.2025',
        type: [],
        blocks: [],
    };

    let dispatch: Dispatch;
    let getState: jest.Mock;
    let extra: { api: typeof mockedAxios };

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        extra = { api: mockedAxios };
    });

    test('sucsses response, return article', async () => {
        mockedAxios.get.mockResolvedValue({ data: article });

        const action = fetchArticleById(articleId);
        const result = await action(dispatch, getState, extra);

        expect(mockedAxios.get).toHaveBeenCalledWith(`/articles/${articleId}`);
        expect(result.payload).toEqual(article);
        expect(result.type.endsWith('fulfilled')).toBe(true);
    });

    test('server can\'t return data, should called rejectWithValue', async () => {
        mockedAxios.get.mockResolvedValue({ data: null });

        const action = fetchArticleById(articleId);
        const result = await action(dispatch, getState, extra);

        expect(result.type.endsWith('rejected')).toBe(true);
        expect(result.payload).toBe('error');
    });

    test('error API, should calls rejectWithValue', async () => {
        mockedAxios.get.mockRejectedValue(new Error('Network Error'));

        const action = fetchArticleById(articleId);
        const result = await action(dispatch, getState, extra);

        expect(result.type.endsWith('rejected')).toBe(true);
        expect(result.payload).toBe('error');
    });
});
