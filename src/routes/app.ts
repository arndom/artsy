import { Create, Home, NotFound } from '../pages';

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  {
    to: '/',
    element: Home,
  },
  {
    to: '/create',
    element: Create,
  },
  {
    to: '*',
    element: NotFound,
  },
];
