import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { articleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ScrollPosRestoreShema } from '@/features/ScrollPosRestore';
import {
    ArticleDetailsPageSchema,
} from '@/pages/ArticeDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticePage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ScrollPosRestore: ScrollPosRestoreShema;

  // Асинхронные редюссеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: articleDetailsSchema;
  // articleDetailsPage - совмещает в себе эти две схемы
  // articleDetailsComments?: ArticleDetailsCommentSchema;
  // articleDetailsRecomendations?: ArticleDetailsRecomendationsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  // RTK Query
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;
// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectWithValue: any;
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
