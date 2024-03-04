import { View, Text, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors'
import Header from '../HomeScreen/header'
import {useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ajouterJob from '../../Screens/ProfilScreen/AjouterJob'

const ProfileScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const {signOut, isSignedIn} = useAuth()
  return (
    <View style={styles.main}>
      <View style={{paddingHorizontal: 33}}>
        
        <Header/>
      </View>
      <View style={{gap: 10}}>
        <TouchableOpacity style={styles.profileLink} onPress={() => navigation.push('mes-candidatures')}>
            <FontAwesome5 name='briefcase' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Mes candidatures</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileLink} onPress={() => navigation.push('mes-logements')}>
            <FontAwesome5 name='building' size={16} color={Colors.light.primary} />
            <Text style={{fontSize: 16, color: Colors.light.primary}}>   Mes Logements</Text>
        </TouchableOpacity>
       
       
        <View>
        <Button title='Ajouter un job' onPress={() => navigation.push('AjouterJob')} />
        <Button title='Se connecter' onPress={() => navigation.push('login')} />
        <Button title='Se déconnecter' onPress={() => signOut()} />
        </View>
      </View> 
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  profileLink: {
    marginTop:20,
    flexDirection: 'row',
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: 5,
    gap: 20,
  },
  buttonText: {
    marginTop:20,
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonWrapper: {
    backgroundColor: Colors.light.accent,
    paddingVertical: 14,
    marginHorizontal: 'auto',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 41,
  },
})