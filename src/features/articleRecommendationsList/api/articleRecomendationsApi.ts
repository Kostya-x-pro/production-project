import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recomendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecomendationsReducer: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});
export const useArticleRecomendationsList = recomendationsApi.useGetArticleRecomendationsReducerQuery;
