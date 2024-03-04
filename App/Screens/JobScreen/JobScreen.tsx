import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import Header from '../HomeScreen/header'
import Title from '../HomeScreen/title'
import JobCard from './JobCard'
import Cats from './Cats'
import Search from './Search'
import { FlatList } from 'react-native-gesture-handler'
import GlobalApi from '../../Utils/GlobalApi'
import { useEffect, useState } from 'react'

const JobScreen = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result: any = await GlobalApi.getJobs();
        setJobs(result.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
  
    fetchJobs();
  }, []);
  return (
    <View>
      <Header/>
        <ScrollView>
            <Search />
            <View style={styles.container}>
                <View>
                    <View>
                        <Title titre='Catégories' displayLink={true} />
                        <Cats />
                    </View>
                    <View style={styles.suggestions_container}>
                        <Title titre='Pour vous' displayLink={true} />
                        <FlatList
                            data={jobs as any[]} // Add type assertion to 'any[]'
                            style={{backgroundColor: Colors.light.background, overflow: 'visible',}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <JobCard 
                                    maxWidth={300}
                                    title={item.titre} 
                                    company={item.companyName} 
                                    description={item.jobDescription} 
                                    emplacement={item.jobLocation}
                                    hSemaine={item.jobHours}
                                    hSalaire={item.jobSalary}
                                    jobLien=''
                                    id={item.id}
                                />
                            )}
                        />
                    <View style={{marginTop: 26}}>
                        <Title titre='Jobs récents' displayLink={true}/>
                        <FlatList
                            data={jobs as any[]} // Add type assertion to 'any[]'
                            style={{backgroundColor: Colors.light.background, overflow: 'visible', paddingBottom: 50,}}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <JobCard 
                                    title={item.titre} 
                                    company={item.companyName} 
                                    description={item.jobDescription} 
                                    emplacement={item.jobLocation}
                                    hSemaine={item.jobHours}
                                    hSalaire={item.jobSalary}
                                    jobLien=''
                                    id={item.id}
                                />
                            )}
                        />
                    </View>
                  </View>
                </View>
            </View>
        </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  suggestions_container : {
    paddingTop: 36,
    gap: 16,
  },
  suggestions_wrapper: {
    flexDirection: 'row',
    gap: 10,
  },
})

export default JobScreen