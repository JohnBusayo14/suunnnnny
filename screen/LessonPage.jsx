
import React  from 'react'
import { View,Text,Image, ScrollView } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Accordion from './Accordian'




const LessonPage = ({route}) => {

  const { items } = route.params

  console.log(items);

    return (
        <SafeAreaView >
        <ScrollView >
        
         <TouchableOpacity className=' w-screen bg-[44A1A0] flex flex-col items-center '>
           <Text className=' font-bold text-center'>{items.content.qauter_theme}</Text>
           <Text>{items.content.date}</Text>
           <Text className=' font-bold'>Unit 1:{items.content.description}</Text>
          
           </TouchableOpacity>
    
           <TouchableOpacity className=' mx-auto my-5  w-80 h-40 flex flex-row justify-center items-center'>
           <View className=' w-2/3 h-full justify-center items-center '>
           <Text className=' font-extrabold text-2xl italic'>LESSON</Text>
           <Text className=' font-extrabold text-7xl font-mono'>{items.content.lesson_number}</Text>
         
           <Text className=' font-medium text-sm bg-[] ' >{items.content.lesson_date}</Text>
           <Text className=' font-medium text-xs '>(RESPONSIBILITY MONTH)</Text>
           </View>
           <Image className=' w-1/2 h-full bg-transparent' source = {require('../assets/teach.png')} />
           </TouchableOpacity>
         <TouchableOpacity className=' w-96 h-24 bg-[#6096BA] flex my-10 flex-col items-center m-auto justify-center'>
         <Text className=' font-extrabold text-2xl italic text-center '>{items.topic} </Text>
       
         </TouchableOpacity>
         <View  className=' w-screen bg-[44A1A0] flex flex-col items-center  my-5'> 
         <Text className=' font-semibold text-gray-500  text-base '>Suggested Hymns:{items.content.suggested_hymns}</Text>
         <Text className=' font-semibold text-gray-500  text-base '>Devotional Reading:{items.content.devotional_reading}</Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Adults: {items.content.topic_for_adults} </Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Youth: {items.content.topic_for_youth} </Text>
         <Text className=' font-semibold text-gray-500  text-base '>Topic For Intermediate: {items.content.topic_for_intermediate}</Text>
         <Text className=' font-semibold text-gray-500 pb-5  text-base '>Lesson Scriptures:{items.content.lesson_scriptures}</Text>
         </View>
    
         <View className=' w-5/6 h-36 border-solid border-2 border-[#44A1A0] mx-auto items-center'>
         <Text className=' -m-6 bg-white p-3 font-extrabold text-xl'>MEMORY VERSE</Text>
         <Text className=' text-center text-sm font-semibold pt-3'>{items.content.memory_verse} <Text className=' font-extrabold py-2'>{items.content.memoryVerse_bible_passage} </Text></Text>
         </View>
        
         <View className=' w-full flex flex-col justify-center items-center mt-10 gap-2 mx-auto'>
    
         <Text className=' font-extrabold text-xl py-5'>DAILY DEVOTIONAL READING</Text>
    
        <View className=' w-screen flex flex-col'>
          <Accordion   title="Accordion 1" content="Content for Accordion 1" />
          <Accordion title="Accordion 2" content="Content for Accordion 2" />
          <Accordion title="Accordion 3" content="Content for Accordion 3" />
          <Accordion   title="Accordion 1" content="Content for Accordion 1" />
          <Accordion title="Accordion 2" content="Content for Accordion 2" />
          <Accordion title="Accordion 3" content="Content for Accordion 3" />
        </View>
    
         <TouchableOpacity className=' w-full bg-white flex flex-col justify-center items-center'>
          <Text className=' text-[#e2cb44] font-bold text-xl py-5'>BACKGROUND</Text>
          <Text className=' text-black text-center p-2 text-base'>{items.content.lesson_background} </Text>
         </TouchableOpacity>
          <TouchableOpacity className=' w-screen bg-white flex flex-col justify-center items-center'> 
      <Text className=' font-bold text-[#f1d742] text-base py-5'>NOTES ON THE LESSON</Text>
     
      <View className=' w-[98%] m-auto '>
     
        
      <Text className=' font-bold text-base text-gray-600 py-2 px-3 bg-[#adc11d]'>PART 1:{items.content.part1_topic} </Text>
      <Text className='text-base text-gray font-semibold px-5'>{items.content.part1_para1}</Text>
      <Text className='text-base text-gray font-bold px-5 py-3'>{items.content.part1_para2} </Text>

      <Text className=' font-bold text-base text-gray-600 py-2 px-3 bg-[#adc11d]'>PART 2: {items.content.part2_topic} </Text>
      <Text className='text-base text-gray font-semibold px-5'> {items.content.part2_para1} </Text>
      <Text className='text-base text-gray font-semibold px-5 py-3'>{items.content.part2_para2} </Text>
    
      <Text className=' font-bold text-base text-gray-600 py-2 px-3 bg-[#adc11d]'>PART 3: {items.content.part3_topic} </Text>
      <Text className='text-base text-gray px-5'> {items.content.part3_para1} </Text>
      <Text className='text-base text-gray px-5 py-3'>{items.content.part3_para2} </Text>


    
      </View>
    
            </TouchableOpacity>
            <TouchableOpacity className=' w-full  bg-black flex flex-col justify-center items-center'>
          <Text className=' text-[#e2cb44] font-bold text-xl py-5'>CONCLUSION</Text>
          <Text className=' text-white text-center p-2 text-base'>{items.content.lesson_conclusion} </Text>
          <Text className=' text-[#e2cb44] font-bold text-xl py-5'>QUESTION</Text>
          <Text className=' text-white text-center p-2 text-base'>1. What was Apostle Paul passionate about in the book of Philemon</Text>
          <Text className=' text-white p-2 text-base text-start'>2. Where did Paul preach to Onesimus?</Text>
          <Text className=' text-white text-center p-2 text-base'>1. What was Apostle Paul passionate about in the book of Philemon</Text>
          <Text className=' text-white p-2 text-base text-start'>2. Where did Paul preach to Onesimus?</Text>
         </TouchableOpacity>
         </View>
         
        </ScrollView>
        </SafeAreaView>
       )
 
}


export default LessonPage
