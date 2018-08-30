import CONSTANTS from './home.page.route.config.constants';
import createRouteFor from '../../../utils/route-builder/route-builder';

const createRouteForHomePageUsing = createRouteFor(CONSTANTS.NAME);

const homePageConfig = createRouteForHomePageUsing({
  url: CONSTANTS.URL,
  folderName: CONSTANTS.FOLDER_NAME,
  entryFile: CONSTANTS.HOME_PAGE_MAIN_FILE,
  props: {
    path: CONSTANTS.URL,
    exact: true,
  },
});

export default homePageConfig;
