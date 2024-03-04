import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../Utils/Colors';


export default function  CompetencesContent(){
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={{fontSize: 18 ,fontWeight: '600',color: '#242C5D',marginBottom:5 }}>
          Soft Skills
          </Text>
            <Text style={styles.text}>
              {"- sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
  {"- Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
  {"- Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
  {"- Postuler Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.Postuler\n"}
  
            </Text>
            <Text style={{fontSize: 18 ,fontWeight: '600',color: '#242C5D',marginBottom:5 }}>
            Hard Skills          </Text>
          <Text style={styles.text}>
              {"- sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
  {"- Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
  {"- Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.\n\n"}
  {"- Postuler Placerat pharetra sit nulla nisl rutrum orci tellus accumsan at.Postuler\n"}
  
            </Text>
            
          </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollContainer: {
        justifyContent: 'center',
      },
      text: {
        fontSize: 15,
        color: Colors.light.primary,
    },
    });
    
