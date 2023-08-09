import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import {Image,TouchableOpacity,Text, View } from 'react-native';
import { StyleSheet} from 'react-native';
import { Layout,Button } from '@ui-kitten/components';

const Tab = createBottomTabNavigator();
const Homescreen = ({navigation}) => {
  return (
    
    <Layout style={styles.container}>
  
    <View className=" w-full h-36 flex-1 items-center justify-start bg-white gap-2">
      <Image className=' h-48 w-48 my-5' source = {require('../assets/loooogooo.png')} /> 
    <Image source = {require('../assets/frontimage2.jpg')} />
    <Text className='text-2xl text-gray-400 font-extrabold'>THE GOSPEL FAITH MISSION INT'</Text>
    <Text className='font-bold text-lg text-gray-400'>Sunday School Manual</Text>
    </View>
    
    <TouchableOpacity 
    className='h-12 w-80 bg-[#274c77] justify-center mb-10 align-middle rounded-md'
    onPress={() => navigation.navigate('SecondPage')}>
    <Text className='text-center text-lg font-bold text-white'>Get Started</Text>
    </TouchableOpacity>
    </Layout>
  )
}

export default Homescreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
    },
 });
  