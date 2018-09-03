import MODULE_CONSTS from './home.page.route.config.constants';

export default Object.freeze({
  name: MODULE_CONSTS.NAME,
  url: MODULE_CONSTS.URL,
  module: MODULE_CONSTS.MODULE,
  props: Object.freeze({
    path: MODULE_CONSTS.URL,
    exact: true,
  }),
});
