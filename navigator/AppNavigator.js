import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "../screens/HomeSceen"
import SectionScreen from "../screens/SectionScreen"
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
},{
    mode: 'modal'
});


export default createAppContainer(TabNavigator);