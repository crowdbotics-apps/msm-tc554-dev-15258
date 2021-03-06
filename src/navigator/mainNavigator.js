import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen16518243Navigator from '../features/BlankScreen16518243/navigator';
import BlankScreen16418241Navigator from '../features/BlankScreen16418241/navigator';
import BlankScreen16318198Navigator from '../features/BlankScreen16318198/navigator';
import BlankScreen16218196Navigator from '../features/BlankScreen16218196/navigator';
import BlankScreen16118190Navigator from '../features/BlankScreen16118190/navigator';
import BlankScreen16018188Navigator from '../features/BlankScreen16018188/navigator';
import BlankScreen15918182Navigator from '../features/BlankScreen15918182/navigator';
import BlankScreen15818180Navigator from '../features/BlankScreen15818180/navigator';
import BlankScreen15718172Navigator from '../features/BlankScreen15718172/navigator';
import BlankScreen15618170Navigator from '../features/BlankScreen15618170/navigator';
import BlankScreen15518162Navigator from '../features/BlankScreen15518162/navigator';
import BlankScreen15418160Navigator from '../features/BlankScreen15418160/navigator';
import BlankScreen15318152Navigator from '../features/BlankScreen15318152/navigator';
import BlankScreen15218150Navigator from '../features/BlankScreen15218150/navigator';
import BlankScreen15118141Navigator from '../features/BlankScreen15118141/navigator';
import BlankScreen15018139Navigator from '../features/BlankScreen15018139/navigator';
import BlankScreen14918133Navigator from '../features/BlankScreen14918133/navigator';
import BlankScreen14818131Navigator from '../features/BlankScreen14818131/navigator';
import BlankScreen14718123Navigator from '../features/BlankScreen14718123/navigator';
import BlankScreen14618121Navigator from '../features/BlankScreen14618121/navigator';
import BlankScreen14518113Navigator from '../features/BlankScreen14518113/navigator';
import BlankScreen14418111Navigator from '../features/BlankScreen14418111/navigator';
import BlankScreen14318106Navigator from '../features/BlankScreen14318106/navigator';
import BlankScreen14218104Navigator from '../features/BlankScreen14218104/navigator';
import BlankScreen14118098Navigator from '../features/BlankScreen14118098/navigator';
import BlankScreen14018096Navigator from '../features/BlankScreen14018096/navigator';
import BlankScreen13918086Navigator from '../features/BlankScreen13918086/navigator';
import BlankScreen13818084Navigator from '../features/BlankScreen13818084/navigator';
import BlankScreen13718075Navigator from '../features/BlankScreen13718075/navigator';
import BlankScreen13618073Navigator from '../features/BlankScreen13618073/navigator';
import BlankScreen13518066Navigator from '../features/BlankScreen13518066/navigator';
import BlankScreen13418064Navigator from '../features/BlankScreen13418064/navigator';
import BlankScreen13318054Navigator from '../features/BlankScreen13318054/navigator';
import BlankScreen13218052Navigator from '../features/BlankScreen13218052/navigator';
import BlankScreen13118045Navigator from '../features/BlankScreen13118045/navigator';
import BlankScreen13018043Navigator from '../features/BlankScreen13018043/navigator';
import BlankScreen12918037Navigator from '../features/BlankScreen12918037/navigator';
import BlankScreen12818035Navigator from '../features/BlankScreen12818035/navigator';
import BlankScreen12718029Navigator from '../features/BlankScreen12718029/navigator';
import BlankScreen12618027Navigator from '../features/BlankScreen12618027/navigator';
import BlankScreen12518016Navigator from '../features/BlankScreen12518016/navigator';
import BlankScreen12418014Navigator from '../features/BlankScreen12418014/navigator';
import BlankScreen12318002Navigator from '../features/BlankScreen12318002/navigator';
import BlankScreen12218000Navigator from '../features/BlankScreen12218000/navigator';
import BlankScreen12117986Navigator from '../features/BlankScreen12117986/navigator';
import BlankScreen12017984Navigator from '../features/BlankScreen12017984/navigator';
import BlankScreen11917943Navigator from '../features/BlankScreen11917943/navigator';
import BlankScreen11817941Navigator from '../features/BlankScreen11817941/navigator';
import BlankScreen11717929Navigator from '../features/BlankScreen11717929/navigator';
import BlankScreen11617927Navigator from '../features/BlankScreen11617927/navigator';
import BlankScreen11517921Navigator from '../features/BlankScreen11517921/navigator';
import BlankScreen11417919Navigator from '../features/BlankScreen11417919/navigator';
import BlankScreen11317911Navigator from '../features/BlankScreen11317911/navigator';
import BlankScreen11217909Navigator from '../features/BlankScreen11217909/navigator';
import BlankScreen11117902Navigator from '../features/BlankScreen11117902/navigator';
import BlankScreen11017900Navigator from '../features/BlankScreen11017900/navigator';
import BlankScreen10917878Navigator from '../features/BlankScreen10917878/navigator';
import BlankScreen10817876Navigator from '../features/BlankScreen10817876/navigator';
import BlankScreen10717865Navigator from '../features/BlankScreen10717865/navigator';
import BlankScreen10617863Navigator from '../features/BlankScreen10617863/navigator';
import BlankScreen10517851Navigator from '../features/BlankScreen10517851/navigator';
import BlankScreen10417849Navigator from '../features/BlankScreen10417849/navigator';
import BlankScreen10317838Navigator from '../features/BlankScreen10317838/navigator';
import BlankScreen10217836Navigator from '../features/BlankScreen10217836/navigator';
import BlankScreen10117825Navigator from '../features/BlankScreen10117825/navigator';
import BlankScreen10017823Navigator from '../features/BlankScreen10017823/navigator';
import BlankScreen9917812Navigator from '../features/BlankScreen9917812/navigator';
import BlankScreen9817810Navigator from '../features/BlankScreen9817810/navigator';
import BlankScreen9717799Navigator from '../features/BlankScreen9717799/navigator';
import BlankScreen9617797Navigator from '../features/BlankScreen9617797/navigator';
import BlankScreen9517784Navigator from '../features/BlankScreen9517784/navigator';
import BlankScreen9417768Navigator from '../features/BlankScreen9417768/navigator';
import BlankScreen9317766Navigator from '../features/BlankScreen9317766/navigator';
import BlankScreen9217748Navigator from '../features/BlankScreen9217748/navigator';
import BlankScreen9117746Navigator from '../features/BlankScreen9117746/navigator';
import BlankScreen9017725Navigator from '../features/BlankScreen9017725/navigator';
import BlankScreen8917723Navigator from '../features/BlankScreen8917723/navigator';
import BlankScreen8817703Navigator from '../features/BlankScreen8817703/navigator';
import BlankScreen8717701Navigator from '../features/BlankScreen8717701/navigator';
import BlankScreen8617690Navigator from '../features/BlankScreen8617690/navigator';
import BlankScreen8517688Navigator from '../features/BlankScreen8517688/navigator';
import BlankScreen8417668Navigator from '../features/BlankScreen8417668/navigator';
import BlankScreen8317666Navigator from '../features/BlankScreen8317666/navigator';
import BlankScreen8217656Navigator from '../features/BlankScreen8217656/navigator';
import BlankScreen8117654Navigator from '../features/BlankScreen8117654/navigator';
import BlankScreen8017636Navigator from '../features/BlankScreen8017636/navigator';
import BlankScreen7917634Navigator from '../features/BlankScreen7917634/navigator';
import BlankScreen7817624Navigator from '../features/BlankScreen7817624/navigator';
import BlankScreen7717622Navigator from '../features/BlankScreen7717622/navigator';
import BlankScreen7617605Navigator from '../features/BlankScreen7617605/navigator';
import BlankScreen7517603Navigator from '../features/BlankScreen7517603/navigator';
import BlankScreen7417593Navigator from '../features/BlankScreen7417593/navigator';
import BlankScreen7317591Navigator from '../features/BlankScreen7317591/navigator';
import BlankScreen7217581Navigator from '../features/BlankScreen7217581/navigator';
import BlankScreen7117579Navigator from '../features/BlankScreen7117579/navigator';
import BlankScreen7017543Navigator from '../features/BlankScreen7017543/navigator';
import BlankScreen6917541Navigator from '../features/BlankScreen6917541/navigator';
import BlankScreen6817531Navigator from '../features/BlankScreen6817531/navigator';
import BlankScreen6717529Navigator from '../features/BlankScreen6717529/navigator';
import BlankScreen6617519Navigator from '../features/BlankScreen6617519/navigator';
import BlankScreen6517517Navigator from '../features/BlankScreen6517517/navigator';
import BlankScreen6417512Navigator from '../features/BlankScreen6417512/navigator';
import BlankScreen6317510Navigator from '../features/BlankScreen6317510/navigator';
import BlankScreen6217504Navigator from '../features/BlankScreen6217504/navigator';
import BlankScreen6117502Navigator from '../features/BlankScreen6117502/navigator';
import BlankScreen6017492Navigator from '../features/BlankScreen6017492/navigator';
import BlankScreen5917490Navigator from '../features/BlankScreen5917490/navigator';
import BlankScreen5817480Navigator from '../features/BlankScreen5817480/navigator';
import BlankScreen5717478Navigator from '../features/BlankScreen5717478/navigator';
import BlankScreen5617468Navigator from '../features/BlankScreen5617468/navigator';
import BlankScreen5517466Navigator from '../features/BlankScreen5517466/navigator';
import BlankScreen5417449Navigator from '../features/BlankScreen5417449/navigator';
import BlankScreen5317447Navigator from '../features/BlankScreen5317447/navigator';
import BlankScreen5217430Navigator from '../features/BlankScreen5217430/navigator';
import BlankScreen5117428Navigator from '../features/BlankScreen5117428/navigator';
import BlankScreen5017416Navigator from '../features/BlankScreen5017416/navigator';
import BlankScreen4917414Navigator from '../features/BlankScreen4917414/navigator';
import BlankScreen4817404Navigator from '../features/BlankScreen4817404/navigator';
import BlankScreen4717402Navigator from '../features/BlankScreen4717402/navigator';
import BlankScreen4617392Navigator from '../features/BlankScreen4617392/navigator';
import BlankScreen4517390Navigator from '../features/BlankScreen4517390/navigator';
import BlankScreen4417380Navigator from '../features/BlankScreen4417380/navigator';
import BlankScreen4317378Navigator from '../features/BlankScreen4317378/navigator';
import BlankScreen4217355Navigator from '../features/BlankScreen4217355/navigator';
import BlankScreen4117353Navigator from '../features/BlankScreen4117353/navigator';
import BlankScreen4017318Navigator from '../features/BlankScreen4017318/navigator';
import BlankScreen3917316Navigator from '../features/BlankScreen3917316/navigator';
import BlankScreen3817306Navigator from '../features/BlankScreen3817306/navigator';
import BlankScreen3717304Navigator from '../features/BlankScreen3717304/navigator';
import BlankScreen3617292Navigator from '../features/BlankScreen3617292/navigator';
import BlankScreen3517290Navigator from '../features/BlankScreen3517290/navigator';
import BlankScreen3417281Navigator from '../features/BlankScreen3417281/navigator';
import BlankScreen3317279Navigator from '../features/BlankScreen3317279/navigator';
import BlankScreen3217269Navigator from '../features/BlankScreen3217269/navigator';
import BlankScreen3117267Navigator from '../features/BlankScreen3117267/navigator';
import BlankScreen3017257Navigator from '../features/BlankScreen3017257/navigator';
import BlankScreen2917255Navigator from '../features/BlankScreen2917255/navigator';
import BlankScreen2817245Navigator from '../features/BlankScreen2817245/navigator';
import BlankScreen2717243Navigator from '../features/BlankScreen2717243/navigator';
import BlankScreen2617232Navigator from '../features/BlankScreen2617232/navigator';
import BlankScreen2517230Navigator from '../features/BlankScreen2517230/navigator';
import BlankScreen2417190Navigator from '../features/BlankScreen2417190/navigator';
import BlankScreen2317188Navigator from '../features/BlankScreen2317188/navigator';
import BlankScreen2217177Navigator from '../features/BlankScreen2217177/navigator';
import BlankScreen2117175Navigator from '../features/BlankScreen2117175/navigator';
import BlankScreen2017158Navigator from '../features/BlankScreen2017158/navigator';
import BlankScreen1917156Navigator from '../features/BlankScreen1917156/navigator';
import BlankScreen1817146Navigator from '../features/BlankScreen1817146/navigator';
import BlankScreen1717144Navigator from '../features/BlankScreen1717144/navigator';
import BlankScreen1617133Navigator from '../features/BlankScreen1617133/navigator';
import BlankScreen1517131Navigator from '../features/BlankScreen1517131/navigator';
import BlankScreen1417119Navigator from '../features/BlankScreen1417119/navigator';
import BlankScreen1317117Navigator from '../features/BlankScreen1317117/navigator';
import BlankScreen1217083Navigator from '../features/BlankScreen1217083/navigator';
import BlankScreen1117081Navigator from '../features/BlankScreen1117081/navigator';
import BlankScreen1017069Navigator from '../features/BlankScreen1017069/navigator';
import BlankScreen917067Navigator from '../features/BlankScreen917067/navigator';
import BlankScreen817056Navigator from '../features/BlankScreen817056/navigator';
import BlankScreen717054Navigator from '../features/BlankScreen717054/navigator';
import BlankScreen617043Navigator from '../features/BlankScreen617043/navigator';
import BlankScreen517041Navigator from '../features/BlankScreen517041/navigator';
import BlankScreen417030Navigator from '../features/BlankScreen417030/navigator';
import BlankScreen317028Navigator from '../features/BlankScreen317028/navigator';
import BlankScreen217017Navigator from '../features/BlankScreen217017/navigator';
import BlankScreen117015Navigator from '../features/BlankScreen117015/navigator';
import BlankScreen116991Navigator from '../features/BlankScreen116991/navigator';
import BlankScreen116966Navigator from '../features/BlankScreen116966/navigator';
import BlankScreen116916Navigator from '../features/BlankScreen116916/navigator';
import BlankScreen116903Navigator from '../features/BlankScreen116903/navigator';
import BlankScreen116890Navigator from '../features/BlankScreen116890/navigator';
import BlankScreen116875Navigator from '../features/BlankScreen116875/navigator';
import BlankScreen116860Navigator from '../features/BlankScreen116860/navigator';
import BlankScreen116843Navigator from '../features/BlankScreen116843/navigator';
import BlankScreen116810Navigator from '../features/BlankScreen116810/navigator';
import BlankScreen016735Navigator from '../features/BlankScreen016735/navigator';
import BlankScreen616730Navigator from '../features/BlankScreen616730/navigator';
import BlankScreen516728Navigator from '../features/BlankScreen516728/navigator';
import BlankScreen416708Navigator from '../features/BlankScreen416708/navigator';
import BlankScreen316706Navigator from '../features/BlankScreen316706/navigator';
import BlankScreen216686Navigator from '../features/BlankScreen216686/navigator';
import BlankScreen116684Navigator from '../features/BlankScreen116684/navigator';
import BlankScreen116638Navigator from '../features/BlankScreen116638/navigator';
import BlankScreen016563Navigator from '../features/BlankScreen016563/navigator';
import BlankScreen016562Navigator from '../features/BlankScreen016562/navigator';
import BlankScreen016561Navigator from '../features/BlankScreen016561/navigator';
import BlankScreen016560Navigator from '../features/BlankScreen016560/navigator';
import BlankScreen016558Navigator from '../features/BlankScreen016558/navigator';
import BlankScreen016557Navigator from '../features/BlankScreen016557/navigator';
import BlankScreen216541Navigator from '../features/BlankScreen216541/navigator';
import BlankScreen016539Navigator from '../features/BlankScreen016539/navigator';
import BlankScreen016448Navigator from '../features/BlankScreen016448/navigator';
import BlankScreen016432Navigator from '../features/BlankScreen016432/navigator';
import BlankScreen016422Navigator from '../features/BlankScreen016422/navigator';
import BlankScreen216421Navigator from '../features/BlankScreen216421/navigator';
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
BlankScreen16518243: { screen: BlankScreen16518243Navigator },
BlankScreen16418241: { screen: BlankScreen16418241Navigator },
BlankScreen16318198: { screen: BlankScreen16318198Navigator },
BlankScreen16218196: { screen: BlankScreen16218196Navigator },
BlankScreen16118190: { screen: BlankScreen16118190Navigator },
BlankScreen16018188: { screen: BlankScreen16018188Navigator },
BlankScreen15918182: { screen: BlankScreen15918182Navigator },
BlankScreen15818180: { screen: BlankScreen15818180Navigator },
BlankScreen15718172: { screen: BlankScreen15718172Navigator },
BlankScreen15618170: { screen: BlankScreen15618170Navigator },
BlankScreen15518162: { screen: BlankScreen15518162Navigator },
BlankScreen15418160: { screen: BlankScreen15418160Navigator },
BlankScreen15318152: { screen: BlankScreen15318152Navigator },
BlankScreen15218150: { screen: BlankScreen15218150Navigator },
BlankScreen15118141: { screen: BlankScreen15118141Navigator },
BlankScreen15018139: { screen: BlankScreen15018139Navigator },
BlankScreen14918133: { screen: BlankScreen14918133Navigator },
BlankScreen14818131: { screen: BlankScreen14818131Navigator },
BlankScreen14718123: { screen: BlankScreen14718123Navigator },
BlankScreen14618121: { screen: BlankScreen14618121Navigator },
BlankScreen14518113: { screen: BlankScreen14518113Navigator },
BlankScreen14418111: { screen: BlankScreen14418111Navigator },
BlankScreen14318106: { screen: BlankScreen14318106Navigator },
BlankScreen14218104: { screen: BlankScreen14218104Navigator },
BlankScreen14118098: { screen: BlankScreen14118098Navigator },
BlankScreen14018096: { screen: BlankScreen14018096Navigator },
BlankScreen13918086: { screen: BlankScreen13918086Navigator },
BlankScreen13818084: { screen: BlankScreen13818084Navigator },
BlankScreen13718075: { screen: BlankScreen13718075Navigator },
BlankScreen13618073: { screen: BlankScreen13618073Navigator },
BlankScreen13518066: { screen: BlankScreen13518066Navigator },
BlankScreen13418064: { screen: BlankScreen13418064Navigator },
BlankScreen13318054: { screen: BlankScreen13318054Navigator },
BlankScreen13218052: { screen: BlankScreen13218052Navigator },
BlankScreen13118045: { screen: BlankScreen13118045Navigator },
BlankScreen13018043: { screen: BlankScreen13018043Navigator },
BlankScreen12918037: { screen: BlankScreen12918037Navigator },
BlankScreen12818035: { screen: BlankScreen12818035Navigator },
BlankScreen12718029: { screen: BlankScreen12718029Navigator },
BlankScreen12618027: { screen: BlankScreen12618027Navigator },
BlankScreen12518016: { screen: BlankScreen12518016Navigator },
BlankScreen12418014: { screen: BlankScreen12418014Navigator },
BlankScreen12318002: { screen: BlankScreen12318002Navigator },
BlankScreen12218000: { screen: BlankScreen12218000Navigator },
BlankScreen12117986: { screen: BlankScreen12117986Navigator },
BlankScreen12017984: { screen: BlankScreen12017984Navigator },
BlankScreen11917943: { screen: BlankScreen11917943Navigator },
BlankScreen11817941: { screen: BlankScreen11817941Navigator },
BlankScreen11717929: { screen: BlankScreen11717929Navigator },
BlankScreen11617927: { screen: BlankScreen11617927Navigator },
BlankScreen11517921: { screen: BlankScreen11517921Navigator },
BlankScreen11417919: { screen: BlankScreen11417919Navigator },
BlankScreen11317911: { screen: BlankScreen11317911Navigator },
BlankScreen11217909: { screen: BlankScreen11217909Navigator },
BlankScreen11117902: { screen: BlankScreen11117902Navigator },
BlankScreen11017900: { screen: BlankScreen11017900Navigator },
BlankScreen10917878: { screen: BlankScreen10917878Navigator },
BlankScreen10817876: { screen: BlankScreen10817876Navigator },
BlankScreen10717865: { screen: BlankScreen10717865Navigator },
BlankScreen10617863: { screen: BlankScreen10617863Navigator },
BlankScreen10517851: { screen: BlankScreen10517851Navigator },
BlankScreen10417849: { screen: BlankScreen10417849Navigator },
BlankScreen10317838: { screen: BlankScreen10317838Navigator },
BlankScreen10217836: { screen: BlankScreen10217836Navigator },
BlankScreen10117825: { screen: BlankScreen10117825Navigator },
BlankScreen10017823: { screen: BlankScreen10017823Navigator },
BlankScreen9917812: { screen: BlankScreen9917812Navigator },
BlankScreen9817810: { screen: BlankScreen9817810Navigator },
BlankScreen9717799: { screen: BlankScreen9717799Navigator },
BlankScreen9617797: { screen: BlankScreen9617797Navigator },
BlankScreen9517784: { screen: BlankScreen9517784Navigator },
BlankScreen9417768: { screen: BlankScreen9417768Navigator },
BlankScreen9317766: { screen: BlankScreen9317766Navigator },
BlankScreen9217748: { screen: BlankScreen9217748Navigator },
BlankScreen9117746: { screen: BlankScreen9117746Navigator },
BlankScreen9017725: { screen: BlankScreen9017725Navigator },
BlankScreen8917723: { screen: BlankScreen8917723Navigator },
BlankScreen8817703: { screen: BlankScreen8817703Navigator },
BlankScreen8717701: { screen: BlankScreen8717701Navigator },
BlankScreen8617690: { screen: BlankScreen8617690Navigator },
BlankScreen8517688: { screen: BlankScreen8517688Navigator },
BlankScreen8417668: { screen: BlankScreen8417668Navigator },
BlankScreen8317666: { screen: BlankScreen8317666Navigator },
BlankScreen8217656: { screen: BlankScreen8217656Navigator },
BlankScreen8117654: { screen: BlankScreen8117654Navigator },
BlankScreen8017636: { screen: BlankScreen8017636Navigator },
BlankScreen7917634: { screen: BlankScreen7917634Navigator },
BlankScreen7817624: { screen: BlankScreen7817624Navigator },
BlankScreen7717622: { screen: BlankScreen7717622Navigator },
BlankScreen7617605: { screen: BlankScreen7617605Navigator },
BlankScreen7517603: { screen: BlankScreen7517603Navigator },
BlankScreen7417593: { screen: BlankScreen7417593Navigator },
BlankScreen7317591: { screen: BlankScreen7317591Navigator },
BlankScreen7217581: { screen: BlankScreen7217581Navigator },
BlankScreen7117579: { screen: BlankScreen7117579Navigator },
BlankScreen7017543: { screen: BlankScreen7017543Navigator },
BlankScreen6917541: { screen: BlankScreen6917541Navigator },
BlankScreen6817531: { screen: BlankScreen6817531Navigator },
BlankScreen6717529: { screen: BlankScreen6717529Navigator },
BlankScreen6617519: { screen: BlankScreen6617519Navigator },
BlankScreen6517517: { screen: BlankScreen6517517Navigator },
BlankScreen6417512: { screen: BlankScreen6417512Navigator },
BlankScreen6317510: { screen: BlankScreen6317510Navigator },
BlankScreen6217504: { screen: BlankScreen6217504Navigator },
BlankScreen6117502: { screen: BlankScreen6117502Navigator },
BlankScreen6017492: { screen: BlankScreen6017492Navigator },
BlankScreen5917490: { screen: BlankScreen5917490Navigator },
BlankScreen5817480: { screen: BlankScreen5817480Navigator },
BlankScreen5717478: { screen: BlankScreen5717478Navigator },
BlankScreen5617468: { screen: BlankScreen5617468Navigator },
BlankScreen5517466: { screen: BlankScreen5517466Navigator },
BlankScreen5417449: { screen: BlankScreen5417449Navigator },
BlankScreen5317447: { screen: BlankScreen5317447Navigator },
BlankScreen5217430: { screen: BlankScreen5217430Navigator },
BlankScreen5117428: { screen: BlankScreen5117428Navigator },
BlankScreen5017416: { screen: BlankScreen5017416Navigator },
BlankScreen4917414: { screen: BlankScreen4917414Navigator },
BlankScreen4817404: { screen: BlankScreen4817404Navigator },
BlankScreen4717402: { screen: BlankScreen4717402Navigator },
BlankScreen4617392: { screen: BlankScreen4617392Navigator },
BlankScreen4517390: { screen: BlankScreen4517390Navigator },
BlankScreen4417380: { screen: BlankScreen4417380Navigator },
BlankScreen4317378: { screen: BlankScreen4317378Navigator },
BlankScreen4217355: { screen: BlankScreen4217355Navigator },
BlankScreen4117353: { screen: BlankScreen4117353Navigator },
BlankScreen4017318: { screen: BlankScreen4017318Navigator },
BlankScreen3917316: { screen: BlankScreen3917316Navigator },
BlankScreen3817306: { screen: BlankScreen3817306Navigator },
BlankScreen3717304: { screen: BlankScreen3717304Navigator },
BlankScreen3617292: { screen: BlankScreen3617292Navigator },
BlankScreen3517290: { screen: BlankScreen3517290Navigator },
BlankScreen3417281: { screen: BlankScreen3417281Navigator },
BlankScreen3317279: { screen: BlankScreen3317279Navigator },
BlankScreen3217269: { screen: BlankScreen3217269Navigator },
BlankScreen3117267: { screen: BlankScreen3117267Navigator },
BlankScreen3017257: { screen: BlankScreen3017257Navigator },
BlankScreen2917255: { screen: BlankScreen2917255Navigator },
BlankScreen2817245: { screen: BlankScreen2817245Navigator },
BlankScreen2717243: { screen: BlankScreen2717243Navigator },
BlankScreen2617232: { screen: BlankScreen2617232Navigator },
BlankScreen2517230: { screen: BlankScreen2517230Navigator },
BlankScreen2417190: { screen: BlankScreen2417190Navigator },
BlankScreen2317188: { screen: BlankScreen2317188Navigator },
BlankScreen2217177: { screen: BlankScreen2217177Navigator },
BlankScreen2117175: { screen: BlankScreen2117175Navigator },
BlankScreen2017158: { screen: BlankScreen2017158Navigator },
BlankScreen1917156: { screen: BlankScreen1917156Navigator },
BlankScreen1817146: { screen: BlankScreen1817146Navigator },
BlankScreen1717144: { screen: BlankScreen1717144Navigator },
BlankScreen1617133: { screen: BlankScreen1617133Navigator },
BlankScreen1517131: { screen: BlankScreen1517131Navigator },
BlankScreen1417119: { screen: BlankScreen1417119Navigator },
BlankScreen1317117: { screen: BlankScreen1317117Navigator },
BlankScreen1217083: { screen: BlankScreen1217083Navigator },
BlankScreen1117081: { screen: BlankScreen1117081Navigator },
BlankScreen1017069: { screen: BlankScreen1017069Navigator },
BlankScreen917067: { screen: BlankScreen917067Navigator },
BlankScreen817056: { screen: BlankScreen817056Navigator },
BlankScreen717054: { screen: BlankScreen717054Navigator },
BlankScreen617043: { screen: BlankScreen617043Navigator },
BlankScreen517041: { screen: BlankScreen517041Navigator },
BlankScreen417030: { screen: BlankScreen417030Navigator },
BlankScreen317028: { screen: BlankScreen317028Navigator },
BlankScreen217017: { screen: BlankScreen217017Navigator },
BlankScreen117015: { screen: BlankScreen117015Navigator },
BlankScreen116991: { screen: BlankScreen116991Navigator },
BlankScreen116966: { screen: BlankScreen116966Navigator },
BlankScreen116916: { screen: BlankScreen116916Navigator },
BlankScreen116903: { screen: BlankScreen116903Navigator },
BlankScreen116890: { screen: BlankScreen116890Navigator },
BlankScreen116875: { screen: BlankScreen116875Navigator },
BlankScreen116860: { screen: BlankScreen116860Navigator },
BlankScreen116843: { screen: BlankScreen116843Navigator },
BlankScreen116810: { screen: BlankScreen116810Navigator },
BlankScreen016735: { screen: BlankScreen016735Navigator },
BlankScreen616730: { screen: BlankScreen616730Navigator },
BlankScreen516728: { screen: BlankScreen516728Navigator },
BlankScreen416708: { screen: BlankScreen416708Navigator },
BlankScreen316706: { screen: BlankScreen316706Navigator },
BlankScreen216686: { screen: BlankScreen216686Navigator },
BlankScreen116684: { screen: BlankScreen116684Navigator },
BlankScreen116638: { screen: BlankScreen116638Navigator },
BlankScreen016563: { screen: BlankScreen016563Navigator },
BlankScreen016562: { screen: BlankScreen016562Navigator },
BlankScreen016561: { screen: BlankScreen016561Navigator },
BlankScreen016560: { screen: BlankScreen016560Navigator },
BlankScreen016558: { screen: BlankScreen016558Navigator },
BlankScreen016557: { screen: BlankScreen016557Navigator },
BlankScreen216541: { screen: BlankScreen216541Navigator },
BlankScreen016539: { screen: BlankScreen016539Navigator },
BlankScreen016448: { screen: BlankScreen016448Navigator },
BlankScreen016432: { screen: BlankScreen016432Navigator },
BlankScreen016422: { screen: BlankScreen016422Navigator },
BlankScreen216421: { screen: BlankScreen216421Navigator },
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
