import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { ArticleDetailsCommentsReducer } from '@/pages/ArticeDetailsPage/model/slices/articleDetailsCommentsSlice';
import { artticleDetailsReducer } from '@/pages/ArticeDetailsPage/model/slices';
import {
    articleDetailsPageRecomendationsReducer,
} from '@/pages/ArticeDetailsPage/model/slices/articleDetailsPageRecomendationsSlice';
import { articleDetailsReducer } from '../../../../entities/Article/model/slice/articleDetailsSlice';
// import { profileReducer } from '../../../../entities/Profile/model/slice/profileSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    // articleDetailsComments: ArticleDetailsCommentsReducer,
    articlesPage: articleDetailsPageRecomendationsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
