import { HeaderOnly } from '~/components/Layout';

import { Home, Following, Update, Search } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/update', component: Update, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
