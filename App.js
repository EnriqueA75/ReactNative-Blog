import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import BlogState from './src/context/blogState';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: "Personal Blog",
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#FEF9E7'
    }
  }
})
const App = createAppContainer(navigator)

export default () => {
  return (
    <BlogState>
      <App/>
    </BlogState>
  )
}