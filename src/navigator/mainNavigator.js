import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen016419Navigator from '../features/BlankScreen016419/navigator';
import BlankScreen116414Navigator from '../features/BlankScreen116414/navigator';
import CopyOfBlankScreen1816412Navigator from '../features/CopyOfBlankScreen1816412/navigator';
import BlankScreen2016411Navigator from '../features/BlankScreen2016411/navigator';
import BlankScreen1916384Navigator from '../features/BlankScreen1916384/navigator';
import BlankScreen1816367Navigator from '../features/BlankScreen1816367/navigator';
import BlankScreen1716348Navigator from '../features/BlankScreen1716348/navigator';
import BlankScreen1616331Navigator from '../features/BlankScreen1616331/navigator';
import BlankScreen1516211Navigator from '../features/BlankScreen1516211/navigator';
import BlankScreen1416159Navigator from '../features/BlankScreen1416159/navigator';
import BlankScreen1316094Navigator from '../features/BlankScreen1316094/navigator';
import BlankScreen1216056Navigator from '../features/BlankScreen1216056/navigator';
import BlankScreen1115980Navigator from '../features/BlankScreen1115980/navigator';
import BlankScreen915944Navigator from '../features/BlankScreen915944/navigator';
import BlankScreen815872Navigator from '../features/BlankScreen815872/navigator';
import BlankScreen715835Navigator from '../features/BlankScreen715835/navigator';
import BlankScreen615803Navigator from '../features/BlankScreen615803/navigator';
import BlankScreen515766Navigator from '../features/BlankScreen515766/navigator';
import BlankScreen415725Navigator from '../features/BlankScreen415725/navigator';
import BlankScreen315711Navigator from '../features/BlankScreen315711/navigator';
import BlankScreen215691Navigator from '../features/BlankScreen215691/navigator';
import BlankScreen115655Navigator from '../features/BlankScreen115655/navigator';
import BlankScreen915606Navigator from '../features/BlankScreen915606/navigator';
import BlankScreen815605Navigator from '../features/BlankScreen815605/navigator';
import BlankScreen715596Navigator from '../features/BlankScreen715596/navigator';
import BlankScreen615568Navigator from '../features/BlankScreen615568/navigator';
import BlankScreen515519Navigator from '../features/BlankScreen515519/navigator';
import BlankScreen415503Navigator from '../features/BlankScreen415503/navigator';
import BlankScreen315487Navigator from '../features/BlankScreen315487/navigator';
import BlankScreen215447Navigator from '../features/BlankScreen215447/navigator';
import BlankScreen115319Navigator from '../features/BlankScreen115319/navigator';
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
BlankScreen016419: { screen: BlankScreen016419Navigator },
BlankScreen116414: { screen: BlankScreen116414Navigator },
CopyOfBlankScreen1816412: { screen: CopyOfBlankScreen1816412Navigator },
BlankScreen2016411: { screen: BlankScreen2016411Navigator },
BlankScreen1916384: { screen: BlankScreen1916384Navigator },
BlankScreen1816367: { screen: BlankScreen1816367Navigator },
BlankScreen1716348: { screen: BlankScreen1716348Navigator },
BlankScreen1616331: { screen: BlankScreen1616331Navigator },
BlankScreen1516211: { screen: BlankScreen1516211Navigator },
BlankScreen1416159: { screen: BlankScreen1416159Navigator },
BlankScreen1316094: { screen: BlankScreen1316094Navigator },
BlankScreen1216056: { screen: BlankScreen1216056Navigator },
BlankScreen1115980: { screen: BlankScreen1115980Navigator },
BlankScreen915944: { screen: BlankScreen915944Navigator },
BlankScreen815872: { screen: BlankScreen815872Navigator },
BlankScreen715835: { screen: BlankScreen715835Navigator },
BlankScreen615803: { screen: BlankScreen615803Navigator },
BlankScreen515766: { screen: BlankScreen515766Navigator },
BlankScreen415725: { screen: BlankScreen415725Navigator },
BlankScreen315711: { screen: BlankScreen315711Navigator },
BlankScreen215691: { screen: BlankScreen215691Navigator },
BlankScreen115655: { screen: BlankScreen115655Navigator },
BlankScreen915606: { screen: BlankScreen915606Navigator },
BlankScreen815605: { screen: BlankScreen815605Navigator },
BlankScreen715596: { screen: BlankScreen715596Navigator },
BlankScreen615568: { screen: BlankScreen615568Navigator },
BlankScreen515519: { screen: BlankScreen515519Navigator },
BlankScreen415503: { screen: BlankScreen415503Navigator },
BlankScreen315487: { screen: BlankScreen315487Navigator },
BlankScreen215447: { screen: BlankScreen215447Navigator },
BlankScreen115319: { screen: BlankScreen115319Navigator },
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
