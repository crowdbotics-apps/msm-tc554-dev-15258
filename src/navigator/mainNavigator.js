import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315487Navigator from '../features/BlankScreen315487/navigator';
import BlankScreen215447Navigator from '../features/BlankScreen215447/navigator';
import BlankScreen115319Navigator from '../features/BlankScreen115319/navigator';
import BlankScreen015258Navigator from '../features/BlankScreen015258/navigator';
import BlankScreen315257Navigator from '../features/BlankScreen315257/navigator';
import BlankScreen115187Navigator from '../features/BlankScreen115187/navigator';
import BlankScreen015182Navigator from '../features/BlankScreen015182/navigator';
import BlankScreen815125Navigator from '../features/BlankScreen815125/navigator';
import BlankScreen715119Navigator from '../features/BlankScreen715119/navigator';
import BlankScreen615106Navigator from '../features/BlankScreen615106/navigator';
import BlankScreen515089Navigator from '../features/BlankScreen515089/navigator';
import BlankScreen415080Navigator from '../features/BlankScreen415080/navigator';
import BlankScreen314986Navigator from '../features/BlankScreen314986/navigator';
import BlankScreen214978Navigator from '../features/BlankScreen214978/navigator';
import BlankScreen114935Navigator from '../features/BlankScreen114935/navigator';
import BlankScreen114911Navigator from '../features/BlankScreen114911/navigator';
import BlankScreen114909Navigator from '../features/BlankScreen114909/navigator';
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
BlankScreen315487: { screen: BlankScreen315487Navigator },
BlankScreen215447: { screen: BlankScreen215447Navigator },
BlankScreen115319: { screen: BlankScreen115319Navigator },
BlankScreen015258: { screen: BlankScreen015258Navigator },
BlankScreen315257: { screen: BlankScreen315257Navigator },
BlankScreen115187: { screen: BlankScreen115187Navigator },
BlankScreen015182: { screen: BlankScreen015182Navigator },
BlankScreen815125: { screen: BlankScreen815125Navigator },
BlankScreen715119: { screen: BlankScreen715119Navigator },
BlankScreen615106: { screen: BlankScreen615106Navigator },
BlankScreen515089: { screen: BlankScreen515089Navigator },
BlankScreen415080: { screen: BlankScreen415080Navigator },
BlankScreen314986: { screen: BlankScreen314986Navigator },
BlankScreen214978: { screen: BlankScreen214978Navigator },
BlankScreen114935: { screen: BlankScreen114935Navigator },
BlankScreen114911: { screen: BlankScreen114911Navigator },
BlankScreen114909: { screen: BlankScreen114909Navigator },
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
