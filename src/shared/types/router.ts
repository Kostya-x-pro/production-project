import { RouteProps } from 'react-router-dom';
// TODO
// eslint-disable-next-line kostya-x-pro-production-project-plugin/layer-imports
import { UserRoles } from '@/entities/User';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};
