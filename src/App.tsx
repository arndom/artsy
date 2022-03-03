import { ThemeProvider } from '@emotion/react';
import { theme } from './themes/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { appRoutes, AppRouteType } from './routes/app';
import NotFound from './pages/NotFound/NotFound';
import { Navbar } from './components';

const renderRoute = (route: AppRouteType, index: number): JSX.Element => {
  return <Route key={index} path={route.to} element={<route.element />} />;
};

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Routes>
          {appRoutes.map((route, index) => renderRoute(route, index))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
