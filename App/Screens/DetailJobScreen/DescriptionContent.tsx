import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../Utils/Colors';


export default function  DescriptionContent(titre : string, jobDescription : string) {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#242C5D', marginBottom: 5 }}> jjjj </Text>
                    <Text style={styles.text}> hhh </Text>
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