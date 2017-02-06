
export default {
  path: '/',
  children: [
    require('./home').default,
    require('./about').default,
    require('./notFound').default,
  ],
  async action({ next }) {
    const route = await next();

    route.title = `${route.title || 'Untitled Page'} - boxlinker.com`;
    route.description = route.description || '';

    return route;
  }
}
