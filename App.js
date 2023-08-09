// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
//  import { StyleSheet, Text, View } from 'react-native';


//   import 'react-native-gesture-handler';



// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { NavigationContainer } from '@react-navigation/native';
//  import SecondPage from './screen/SecondPage';
//  import Homescreen from './screen/Homescreen'
//  import LessonPage from './screen/LessonPage';
//  import * as eva from '@eva-design/eva';
//  import { ApplicationProvider, Layout } from '@ui-kitten/components';

//  const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//   <View style={styles.container}>

//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: 'yellow',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//  });




// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import 'react-native-gesture-handler';

//  import React from 'react';

//  import { createNativeStackNavigator } from '@react-navigation/native-stack'

//  import { NavigationContainer } from '@react-navigation/native';
//  import SecondPage from './screen/SecondPage';
//  import Homescreen from './screen/Homescreen'
//  import LessonPage from './screen/LessonPage';
//  import * as eva from '@eva-design/eva';
//  import { ApplicationProvider, Layout } from '@ui-kitten/components';
//  const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//        <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Homescreen} />
//         <Stack.Screen name="SecondPage" component={SecondPage} />
//         <Stack.Screen name="Lesson" component={LessonPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import 'react-native-gesture-handler';

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NavigationContainer } from '@react-navigation/native';
import SecondPage from './screen/SecondPage';
import Homescreen from './screen/Homescreen'
import LessonPage from './screen/LessonPage';
import * as eva from '@eva-design/eva';
import { default as theme} from './theme.json'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';



import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

const Stack = createNativeStackNavigator();
  
const TabNavigator = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Images: {
      screen: ImagesScreen,
      navigationOptions: {
        tabBarLabel: "Images",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-images-outline"
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Video: {
      screen: VideoScreen,
      navigationOptions: {
        tabBarLabel: "Videos",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-videocam-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
  
      style: {
        backgroundColor: "#006600",
        marginTop: 28,
      },
    },
  }
);
const Navigator = createAppContainer(TabNavigator); 
const App = () => {
  return (

   
  


  


    <ApplicationProvider {...eva} theme={{...eva.dark,...theme}}>
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Lesson" component={LessonPage} />
         
    <Navigator>
      <ProfileScreen />
    </Navigator>
      </Stack.Navigator>
    </NavigationContainer>
   </ApplicationProvider>
  );
};

export default App;


