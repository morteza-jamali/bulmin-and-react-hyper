import { helpers } from '@moraj/react-hyper';

const { nav, ul, li, a } = helpers;

const Breadcrumb = () =>
  nav(
    { 'aria-label': 'breadcrumbs' },
    ul([
      ...Array(3).fill(li(a({ href: '#' }, 'Item'))),
      li(a({ href: '#', 'aria-current': 'page' }, 'Breadcrumb')).class(
        'is-active'
      ),
    ])
  ).class(['Fz(1rem)']);

export default Breadcrumb;
