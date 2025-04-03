import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticePage } from 'pages/ArticePage';
import { ArticleDetailsPage } from 'pages/ArticeDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  PROFILE = 'profile',

  // last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // +: id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // +: id

    // Для не найденной страницы (ставить последним)
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticePage />,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
