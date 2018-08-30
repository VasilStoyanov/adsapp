import CONSTANTS from './home.page.config.constants';
import Home from '../../../pages/home/home.page';

const homePageConfig = Object.create(null);

homePageConfig.url = CONSTANTS.URL;
homePageConfig.pageComponent = Home;

export default homePageConfig;
