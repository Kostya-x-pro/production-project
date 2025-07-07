import { rtkApi } from '@/shared/api/rtkApi';
import { IRating } from '@/entities/Rating';

interface GetArticleRatingArg {
  articleId: string;
  userId: string;
}

interface setArticleRatingArg {
    articleId: string;
    userId: string;
    rate: string;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<IRating[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRating: build.mutation<void, setArticleRatingArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useSetRatingArticle = articleRatingApi.useSetArticleRatingMutation;
