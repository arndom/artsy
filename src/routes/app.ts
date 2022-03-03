import Create from '../pages/Create/Create';
import Home from '../pages/Home/Home';

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
];
