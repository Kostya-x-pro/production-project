import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetaisData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetaisLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetaisError = (state: StateSchema) => state.articleDetails?.error;
