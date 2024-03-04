import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Map from './map';
import { useNavigation } from '@react-navigation/native';
import AProposContent from './AProposContent';
import CompetencesContent from './CompetencesContent';
import DescriptionContent from './DescriptionContent';

const DetailJobScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Description');
  const [content, setContent] = useState<ReactNode | null>(null);

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Description':
        return (
          <View style={styles.DescriptionContainer}>
            <DescriptionContent />
          </View>
        );
      case 'Compétences':
        return (
          <View style={styles.CompetenceContainer}>
            <CompetencesContent />
          </View>
        );
      case 'A propos':
        return (
          <View style={styles.AproposContainer}>
            <AProposContent />
          </View>
        );
      case 'Carte':
        return (
          <View style={styles.MapContainer}>
            <Map />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name='chevron-left' size={15} />
          </TouchableOpacity>
        </View>

        <Text style={styles.titre}>Détails Job</Text>
        <View style={styles.bookmarkContainer}>
          <TouchableOpacity>
            <FontAwesome5 name='bookmark' size={15} style={styles.bookmark} />
          </TouchableOpacity>
        </View>
      </View>



      <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 15 }}>
        <View style={styles.cercle}>
        </View>

        <View style={styles.titleC}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}> Design UI/UX</Text>
          </View>
        </View>

        <View >
          <Text style={styles.titreJ} >UI/UX Designer</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>
          <Text style={{ marginRight: 5, color: '#242C5D' }}>20H/Sem.</Text>
          <View style={{ marginRight: 5, marginBottom: 2 }}>
            <FontAwesome5 name="circle" size={3} color='#D62528' solid />
          </View>
          <Text style={{ marginRight: 5, color: '#242C5D' }}>AV. 83, La valette</Text>
          <View style={{ marginRight: 5, marginBottom: 2 }}>
            <FontAwesome5 name="circle" size={3} color="#D62528" solid />
          </View>
          <Text style={{ color: '#242C5D' }}>10 candidatures</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>
          <Text style={{ marginRight: 2, color: '#242C5D', fontSize: 20, marginBottom: 7, fontWeight: '500'}}>€15</Text>
          <Text style={{ color: '#242C5D' }}>/Hr</Text>
        </View>
      </View>
      <View>

        <View>
          <View style={styles.rectangle}>
            <View style={styles.Bar}>
              <TouchableOpacity onPress={() => handleTabPress('Description')}>
                <Text style={[styles.infoBar, selectedTab === 'Description' ? styles.selected : null]}>Description</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTabPress('Compétences')}>
                <Text style={[styles.infoBar, selectedTab === 'Compétences' ? styles.selected : null]}>Compétences</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTabPress('A propos')}>
                <Text style={[styles.infoBar, selectedTab === 'A propos' ? styles.selected : null]}>A propos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTabPress('Carte')}>
                <Text style={[styles.infoBar, selectedTab === 'Carte' ? styles.selected : null]}>Carte</Text>
              </TouchableOpacity>
   
                  
            </View>

          
          </View>
          
          <View >
                {renderContent()}
              </View>  
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  titre: {
    fontSize: 15,
    fontWeight: '600',
    color: '#242C5D',
    justifyContent: 'center',

  },
  bookmark: {
    color: '#D62528',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',

  },
  left: {
    color: '#242C5D',
  },
  bookmarkContainer: {
    borderWidth: 2,
    borderColor: 'rgba(214, 37, 40, 0.09)',
    backgroundColor: 'rgba(214, 37, 40, 0.09)',
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9.600000381469727,
  },
  cercle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#F0F2F5',
  },

  titleContainer: {
    borderRadius: 20,
    backgroundColor: 'rgba(214, 37, 40, 0.09)',
    paddingHorizontal: 10,
    paddingVertical: 5,

  },
  title: {
    fontSize: 10,
    color: '#D62528',
  },
  titleC: {
    paddingTop: 20,
  },
  titreJ: {
    fontSize: 20,
    marginTop: 10,
    color: '#242C5D',
    fontWeight: '600',
  },
  rectangle: {
    width: 390,
    height: 50,
    backgroundColor: '#F3F4FB',
    alignItems: "center",
    marginTop: 7
  },
  Bar: {
    width: 300,
    height: 50,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  infoBar: {
    fontSize: 12,
    color: '#8F92A8',

  },
  selected: {
    color: '#D83235',
  },

  leftContainer: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#fffff',
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MapContainer: {
    width: "80%",
    height:   "70%",
    marginTop:10,
    marginLeft: "10%",
    marginRight: "5%",
  },
  CompetenceContainer: { 
  width: "80%",
  height: "77%",
  marginTop:3,
  marginLeft: "10%",
  marginRight: "5%",
},
  DescriptionContainer: {
    width: "80%",
    height: "77%",
    marginTop:3,
    marginLeft: "10%",
    marginRight: "5%",
  },
  AproposContainer:{ 
  width: "80%",
  height: "77%",
  marginTop:3,
  marginLeft: "10%",
  marginRight: "5%",
},

})

export default DetailJobScreen;