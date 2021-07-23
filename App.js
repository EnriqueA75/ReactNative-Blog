import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from './src/context/blogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
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
    <BlogProvider>
      <App/>
    </BlogProvider>
  )
}