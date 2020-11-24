import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen114909Navigator from '../features/BlankScreen114909/navigator';
import BlankScreen014908Navigator from '../features/BlankScreen014908/navigator';
import BlankScreen114907Navigator from '../features/BlankScreen114907/navigator';
import BlankScreen014810Navigator from '../features/BlankScreen014810/navigator';
import BlankScreen114809Navigator from '../features/BlankScreen114809/navigator';
import BlankScreen114804Navigator from '../features/BlankScreen114804/navigator';
import BlankScreen014786Navigator from '../features/BlankScreen014786/navigator';
import BlankScreen014616Navigator from '../features/BlankScreen014616/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen114909: { screen: BlankScreen114909Navigator },
BlankScreen014908: { screen: BlankScreen014908Navigator },
BlankScreen114907: { screen: BlankScreen114907Navigator },
BlankScreen014810: { screen: BlankScreen014810Navigator },
BlankScreen114809: { screen: BlankScreen114809Navigator },
BlankScreen114804: { screen: BlankScreen114804Navigator },
BlankScreen014786: { screen: BlankScreen014786Navigator },
BlankScreen014616: { screen: BlankScreen014616Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
