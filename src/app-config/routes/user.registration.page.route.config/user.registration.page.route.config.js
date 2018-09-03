import MODULE_CONSTANTS from './user.registration.page.route.config.constants';

export default Object.freeze({
  name: MODULE_CONSTANTS.NAME,
  url: MODULE_CONSTANTS.URL,
  module: MODULE_CONSTANTS.MODULE,
  props: Object.freeze({
    path: MODULE_CONSTANTS.URL,
    exact: true,
  }),
});
