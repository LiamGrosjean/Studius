import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { ReactNode, useState, useEffect } from 'react'
import { StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Map from './map';
import AProposContent from './AProposContent';
import CompetencesContent from './CompetencesContent';
import DescriptionContent from './DescriptionContent';
import Colors from '../../Utils/Colors';
import GlobalApi from '../../Utils/GlobalApi';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailJobScreen = () => {
  const navigation = useNavigation();
  const param = useRoute().params;

  const [selectedTab, setSelectedTab] = useState('Description');
  const [content, setContent] = useState<ReactNode | null>(null);
  const [jobDetails, setJobDetails] = useState<any>(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const result: any = await GlobalApi.getJobs();
        const job = result.jobs.find((job: any) => job.id === param.idJob);
        if (job) {
          setJobDetails(job);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
  
    fetchJobDetails();
  }, [param.idJob]);

  const handleTabPress = (tabName: string) => {
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
          <Image source={require('../../../assets/images/suggestion-image.png')} style={{ width: 70, height: 70, borderRadius: 9999 }} />
        </View>

        <View style={styles.titleC}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{jobDetails?.companyName}</Text>
          </View>
        </View>

        <View >
          <Text style={styles.titreJ}> {jobDetails?.titre}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>
          <Text style={{ marginRight: 5, color: '#242C5D' }}>{jobDetails?.jobHours}</Text>
          <View style={{ marginRight: 5, marginBottom: 2 }}>
            <FontAwesome5 name="circle" size={3} color='#D62528' solid />
          </View>
          <Text style={{ marginRight: 5, color: '#242C5D' }}>{jobDetails?.jobLocation}</Text>
          <View style={{ marginRight: 5, marginBottom: 2 }}>
            <FontAwesome5 name="circle" size={3} color="#D62528" solid />
          </View>
          <Text style={{ color: '#242C5D' }}>{"10 "}</Text>
          <Text style={{ color: '#242C5D' , fontSize:10 , marginTop:7 }}>candidature</Text>


        </View>

        <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>
          <Text style={{ marginRight: 2, color: '#242C5D', fontSize: 20, marginBottom: 7, fontWeight: '450'}}>{jobDetails?.jobSalary}</Text>
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
    backgroundColor: Colors.light.background
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
    fontSize: 15,
    marginTop: 10,
    color: '#242C5D',
    fontWeight: '600',
    textAlign: 'center',
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