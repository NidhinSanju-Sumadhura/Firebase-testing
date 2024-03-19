import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Visitors',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Projects',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Reports',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'User Management',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Logs',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
