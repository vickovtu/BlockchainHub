import React from 'react'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import HomeSceen from "../screens/HomeSceen";
import SectionScreen from "../screens/SectionScreen";
import {Icon} from 'expo';
import CoursesScreen from "../screens/CoursesScreen";
import ProjectScreen from "../screens/AboutUs";


const activeColor = "#4775f2";
const inactiveColor = "#b8bece"


const HomeStack = createStackNavigator({
    Home: HomeSceen,
    Section: SectionScreen
},
    {
        mode: "modal"
    });

HomeStack.navigationOptions=({navigation})=>{
    let tabBarVisible= true;
    const routeName = navigation.state.routes[navigation.state.index].routeName;

    if ( routeName == "Section"){
        tabBarVisible = false;
    }
    return{
        tabBarVisible,
        tabBarLabel: "Home",
        tabBarIcon:({focused}) =>(
            <Icon.Ionicons name='ios-home' size={26} color={
                focused ? activeColor : inactiveColor
            }/>
        )
    };

};

const CoursesStack = createStackNavigator({
    Courses: CoursesScreen
});

CoursesStack.navigationOptions={
    tabBarLabel: "Task",
    tabBarIcon:({focused}) =>(
        <Icon.Ionicons name='ios-albums' size={26} color={
            focused ? activeColor : inactiveColor
        }/>
    )
}

const ProjectStack = createStackNavigator({
    Projects: ProjectScreen
});

ProjectStack.navigationOptions={
    tabBarLabel: "About",
    tabBarIcon:({focused}) =>(
        <Icon.Ionicons name='ios-folder' size={26} color={
            focused ? activeColor : inactiveColor
        }/>
    )
}


const TabNavigator = createBottomTabNavigator({
    HomeStack,
    CoursesStack,
    ProjectStack
});

export default TabNavigator