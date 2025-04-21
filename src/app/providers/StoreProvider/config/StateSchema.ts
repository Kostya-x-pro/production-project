import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { addCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ScrollPosRestoreShema } from 'features/ScrollPosRestore';
import { ArticleDetailsCommentSchema } from 'pages/ArticeDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticePage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ScrollPosRestore: ScrollPosRestoreShema;

  // Асинхронные редюссеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: articleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentSchema;
  addCommentForm?: addCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован false - демонтирован
  getMountedReducers: () => MountedReducers ;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectWithValue: any;
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
