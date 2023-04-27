import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Tweets } from 'pages/Tweets/Tweets';
import { Error } from 'pages/Error/Error';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
