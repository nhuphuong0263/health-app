import TopPage from '~/pages/TopPage';
import MyRecord from '~/pages/MyRecord';
import CollumPage from '~/pages/CollumPage';
import { HeaderOnlyLayout } from '~/components/Layout';

// public routes
const publicRoutes = [
  { path: '/', component: TopPage, layout: HeaderOnlyLayout },
  { path: '/myrecord', component: MyRecord, layout: HeaderOnlyLayout },
  { path: '/collumnpage', component: CollumPage, layout: HeaderOnlyLayout },
  // { path: '/defaultlayout', component: TopPage },
  // { path: '/example', component: MyRecord, layout: null },
];

// after login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
