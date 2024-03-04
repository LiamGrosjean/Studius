import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
// import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import {useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const JobCard = ({ maxWidth, title='UX/UI Designer', company='UFR Ingemedia', description='Lorem ipsum dolor sit amet consectetur. Placerat pharetra sit', emplacement='Toulon', hSemaine='20H/sem', hSalaire='€15/h' }) => {
  
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <TouchableOpacity onPress={() => {navigation.push('listing/133')}}>
      <View style={[styles.container, { maxWidth }]}>
        <View style={styles.subContainer}>
          <View style={styles.brandContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.iconCircle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{company}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleBookmarkToggle}>
            <FontAwesomeIcon icon={isBookmarked ? faBookmark : faBookmark} style={styles.bookmark} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.divider} />
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
              <FontAwesome5 name='map-marker-alt' style={styles.infoIcon} />
              <Text style={styles.infoText}>{emplacement}</Text>
          </View>
          <View style={styles.infoItem}>
              <FontAwesome5 name='briefcase' style={styles.infoIcon} />
              <Text style={styles.infoText}>{hSemaine}</Text>
          </View>
          <View style={styles.infoItem}>
              <FontAwesome5 name='money-bill' style={styles.infoIcon} />
              <Text style={styles.infoText}>{hSalaire}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
    gap: 10,
    width: '100%', 
    maxWidth: 226,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 48,
  },
  brandContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  iconContainer: {
    width: 30,
  },
  iconCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#F3F4FB',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  textContainer: {
    gap: 3,
    alignItems: 'flex-start',
  },
  title: {
    color: '#242C5D',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#696969',
    fontSize: 14,
    fontWeight: '400',
  },
  bookmark: {
    color: '#D62528',
    fontSize: 12,
  },
  description: {
    color: '#353558',
    fontSize: 12,
    fontWeight: '300',
  },
  divider: {
    width: '100%',
    height: 0.5,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  infoIcon: {
    color: '#242C5D',
    fontSize: 8,
  },
  infoText: {
    color: '#242C5D',
    fontSize: 10,
    fontWeight: '300',
  },
});

export default JobCard;
