
import {Image,TouchableOpacity, Text,Button, View,ScrollView } from 'react-native';

import React, { useState } from "react";

import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet} from 'react-native';



const SecondPage = ({navigation}) => {
  
 
    const [isModalVisible, setModalVisible] = useState(false);
    const [unitData, setUnitData] = useState({})
  
    const toggleModal = (unit) => {
      setModalVisible(!isModalVisible);
      setUnitData(unit)
    };
    console.log(unitData);
   const units= [
      {
        units: {
          title: "Unit one",
          description: "Restoration Through Christ (Lesson 1-4)",
          lessons: [
            {
              title: "lesson one",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 1,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                
                 lesson_part: [
                  {
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
                  
                  },
                  {
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
                  },
                  {
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
                  
                  }

                 ],
               
                 lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
              
                 
              
                }
            },
            {
              title: "lesson TWO",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 11, 2023',
                lesson_number: 2,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson two",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                
                  suggested_hymns: "G.H.B. 75, 433",
                  devotional_reading: "Acts 9:26-28",
                  topic_for_adults: "Follow-Up Is A Necessity",
                  topic_for_youth: "Follow-Up Is A Necessity",
                  topic_for_intermediate:"Follow-Up Makes Room For Friendship",
                  lesson_scriptures: "Philem. 1:12-16; Acts 9:26-28; 1 Pet. 2:21-22; Jam. 5:19-20",
                  memory_verse: "For perhaps he departed for a while for this purpose, that you might receive him foreverno longer as a slave but more than a slave-a beloved brother, especially to me but how much more to you, both in the flesh and in the Lord",
                  memoryVerse_bible_passage: "Philemon 1:15-16 (NKJTV)",
                 lesson_background: "focus of this lesson is one of the very  cus of this lesson is one of the very  cus of this lesson is one of the very  cus of this lesson is one of the very  important but most neglectedfocus of this lesson is one of the very important but most neglectedfocus of this lesson is one of the very important but most neglected",
                
                 lesson_part: [
                  {
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
                  
                  },
                  {
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
                  },
                  {
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
                  
                  }

                 ],
              
                
                 lesson_conclusion : "We are not only called to this duty of preaching, teaching, evangelising and",
              
                 
              
                }
            },
            {
              title: "lesson TWO",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 11, 2023',
                lesson_number: 3,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson two",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                
                  suggested_hymns: "G.H.B. 75, 433",
                  devotional_reading: "Acts 9:26-28",
                  topic_for_adults: "Follow-Up Is A Necessity",
                  topic_for_youth: "Follow-Up Is A Necessity",
                  topic_for_intermediate:"Follow-Up Makes Room For Friendship",
                  lesson_scriptures: "Philem. 1:12-16; Acts 9:26-28; 1 Pet. 2:21-22; Jam. 5:19-20",
                  memory_verse: "For perhaps he departed for a while for this purpose, that you might receive him foreverno longer as a slave but more than a slave-a beloved brother, especially to me but how much more to you, both in the flesh and in the Lord",
                  memoryVerse_bible_passage: "Philemon 1:15-16 (NKJTV)",
                 lesson_background: "focus of this lesson is one of the very important but most neglected",
                
                 lesson_part: [
                  {
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
                  
                  },
                  {
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
                  },
                  {
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
                  
                  }

                 ],
                 lesson_conclusion : "We are not only called to this duty of preaching, teaching, evangelising and",
              
                 
              
                }
            },
            {
              title: "lesson TWO",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 11, 2023',
                lesson_number: 4,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson two",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                
                  suggested_hymns: "G.H.B. 75, 433",
                  devotional_reading: "Acts 9:26-28",
                  topic_for_adults: "Follow-Up Is A Necessity",
                  topic_for_youth: "Follow-Up Is A Necessity",
                  topic_for_intermediate:"Follow-Up Makes Room For Friendship",
                  lesson_scriptures: "Philem. 1:12-16; Acts 9:26-28; 1 Pet. 2:21-22; Jam. 5:19-20",
                  memory_verse: "For perhaps he departed for a while for this purpose, that you might receive him foreverno longer as a slave but more than a slave-a beloved brother, especially to me but how much more to you, both in the flesh and in the Lord",
                  memoryVerse_bible_passage: "Philemon 1:15-16 (NKJTV)",
                 lesson_background: "focus of this lesson is one of the very important but most neglected",
                
                
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
               
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
               
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
              
                 lesson_conclusion : "We are not only called to this duty of preaching, teaching, evangelising and",
              
                 
              
                }
            }
           
          ]
        }
      },
      {
        units: {
          title: "Unit Two",
          description: "Restoration Through Christ (Lesson 1-4)",
          lessons: [
            {
              title: "lesson one",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 4",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 04,2023',
                lesson_number: 5,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson one",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                  suggestedHymns: "",
                  memoryVerse: "",
                  suggested_hymns: "G.H.B 1,6",
                  devotional_reading: "Philem. 1:8-10",
                  topic_for_adults: "You Must Demontrate Christian Life",
                  topic_for_youth: "You Must Demontrate Christian Life",
                  topic_for_intermediate:" You Must Demontrate Christian Life",
                  lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
                  memory_verse: "\"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.\"",
                  memoryVerse_bible_passage: "Proverbs 3:5-6",
                 lesson_background: "To comprehend a story or text, young readers need a threshold of knowledge about the topic, and tougher state standards place increasing demands on children's prior knowledge. This article offers practical classroom strategies to build background knowledge such as using contrasts and comparisons and encouraging topic-focused wide reading.",
                
                 lesson_part: [
                  {
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
                  
                  },
                  {
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
                  },
                  {
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
                  
                  }

                 ],
               
                 lesson_conclusion : "We forgive as Christians, necessarily because our offenders dese: ve",
              
                 
              
                }
            },
            {
              title: "lesson TWO",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 11, 2023',
                lesson_number: 6,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson two",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                
                  suggested_hymns: "G.H.B. 75, 433",
                  devotional_reading: "Acts 9:26-28",
                  topic_for_adults: "Follow-Up Is A Necessity",
                  topic_for_youth: "Follow-Up Is A Necessity",
                  topic_for_intermediate:"Follow-Up Makes Room For Friendship",
                  lesson_scriptures: "Philem. 1:12-16; Acts 9:26-28; 1 Pet. 2:21-22; Jam. 5:19-20",
                  memory_verse: "For perhaps he departed for a while for this purpose, that you might receive him foreverno longer as a slave but more than a slave-a beloved brother, especially to me but how much more to you, both in the flesh and in the Lord",
                  memoryVerse_bible_passage: "Philemon 1:15-16 (NKJTV)",
                 lesson_background: "focus of this lesson is one of the very  cus of this lesson is one of the very  cus of this lesson is one of the very  cus of this lesson is one of the very  important but most neglectedfocus of this lesson is one of the very important but most neglectedfocus of this lesson is one of the very important but most neglected",
                
                 lesson_part: [
                  {
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
                  
                  },
                  {
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
                  },
                  {
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
                  
                  }

                 ],
              
                
                 lesson_conclusion : "We are not only called to this duty of preaching, teaching, evangelising and",
              
                 
              
                }
            },
            {
              title: "lesson TWO",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 11, 2023',
                lesson_number: 7,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson two",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                
                  suggested_hymns: "G.H.B. 75, 433",
                  devotional_reading: "Acts 9:26-28",
                  topic_for_adults: "Follow-Up Is A Necessity",
                  topic_for_youth: "Follow-Up Is A Necessity",
                  topic_for_intermediate:"Follow-Up Makes Room For Friendship",
                  lesson_scriptures: "Philem. 1:12-16; Acts 9:26-28; 1 Pet. 2:21-22; Jam. 5:19-20",
                  memory_verse: "For perhaps he departed for a while for this purpose, that you might receive him foreverno longer as a slave but more than a slave-a beloved brother, especially to me but how much more to you, both in the flesh and in the Lord",
                  memoryVerse_bible_passage: "Philemon 1:15-16 (NKJTV)",
                 lesson_background: "focus of this lesson is one of the very important but most neglected",
                
                 lesson_part: [
                  {
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
                  
                  },
                  {
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
                  },
                  {
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
                  
                  }

                 ],
                 lesson_conclusion : "We are not only called to this duty of preaching, teaching, evangelising and",
              
                 
              
                }
            },
            {
              title: "lesson TWO",
              description: "Restoration Through Christ (Lesson 1-4)",
              date: "June 7",
              topic: "Philemon:Author's focus and major character",
              content: {

                lesson_date: 'JUN. 11, 2023',
                lesson_number: 8,
                description: "Restoration Through Christ (Lesson 1-4)",
                title: "lesson two",
                qauter_theme: "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",
                
                  suggested_hymns: "G.H.B. 75, 433",
                  devotional_reading: "Acts 9:26-28",
                  topic_for_adults: "Follow-Up Is A Necessity",
                  topic_for_youth: "Follow-Up Is A Necessity",
                  topic_for_intermediate:"Follow-Up Makes Room For Friendship",
                  lesson_scriptures: "Philem. 1:12-16; Acts 9:26-28; 1 Pet. 2:21-22; Jam. 5:19-20",
                  memory_verse: "For perhaps he departed for a while for this purpose, that you might receive him foreverno longer as a slave but more than a slave-a beloved brother, especially to me but how much more to you, both in the flesh and in the Lord",
                  memoryVerse_bible_passage: "Philemon 1:15-16 (NKJTV)",
                 lesson_background: "focus of this lesson is one of the very important but most neglected",
                
                
                    part1_topic: "FOLLOW-UP: ESSENTIAL IN RESTORATION - PHILEM. 1:12-16",
                    part1_para1: "Follow-up is highly essential if any new believer must grow from infancy to",
                    part1_para2: "background, evangelism and follow-up (which is motivated by deep love to seek",
               
                    part2_topic: "FOLLOW-UP: MANDATED FOR THE MATURE - ACTS 9:26-28.",
                    part2_para1: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                    part2_para2: "We've had our share of lively debates in the field of reading, but not on this particular topic: background knowledge. There is a virtual consensus that background knowledge is essential for reading comprehension. Put simply, the more you know about a topic, the easier it is to read a text, understand it, and retain the information. Previous studies (Alexander, Kulikowich, & Schulze, 1994; Shapiro, 2004) have shown that background knowledge plays an enormous role in reading comprehension (Hirsch, 2003).",
                  
               
                    part3_topic: "FOLLOW-UP: PROFITABLE IN CHRISTENDOM -1PET. 2:21-22; JAM. 5: 19-20",
                    part3_para1: "This part shows us that follow-up can potential sinner, a half-baked,",
                    part3_para2: "and a backslidden Christian outreach is casting the seed while follow-",
                  
              
                 lesson_conclusion : "We are not only called to this duty of preaching, teaching, evangelising and",
              
                 
              
                }
            }
           
          ]
        }
      }
    ]
 

  
  return (
    <SafeAreaView >
    <ScrollView >
      
    <View style={styles.container} className=' w-screen h-[20000px] flex flex-col justify-around'>
  <TouchableOpacity  className=' w-80 h-40 rounded-md bg-[#18326F] flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-2xl text-white text-center font-bold'>4TH QUARTER</Text>
  <Text className=' text-2xl text-white font-bold text-center'>JUNE-AUGUST,2023</Text>
  </TouchableOpacity>
  <View className=' w-80 h-40   flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-xl text-center font-serif'>THEME</Text>
  <Text className=' text-2xl text-center italic font-extrabold'>Demonstration of the </Text>
  <Text className=' text-4xl text-center font-extrabold'>CHRISTIAN LIFE</Text>
  <Text className=' text-sm  text-center font-normal'>(EXPOSITION ON THE BOOK OF PHILEMON)</Text>
  </View>
<ScrollView>
<View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'>

{
  units?.map((unit) => (
    <TouchableOpacity onPress={()=>toggleModal(unit)} className=' w-10/12 h-44 flex flex-col  bg-black  rounded-md justify-center items-center align-middle shadow-2xl' >
<Text className=' font-extrabold text-2xl italic text-white py-5'>{unit.units.title}</Text>
<Text className=' font-extrabold text-lg text-white'>{unit.units.description}</Text>



</TouchableOpacity>
  ))
}



 </View>
</ScrollView>


  </View>
  </ScrollView>
   </SafeAreaView>
  )
 
}

export default SecondPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
  },
});

