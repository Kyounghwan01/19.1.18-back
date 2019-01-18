import React from 'react';
import {createStackNavigator,
  createBottomTabNavigator,
  createAppContainer} from 'react-navigation';
  import {
    Ionicons
  } from '@expo/vector-icons';

import {Text,View,TextInput,Button,StyleSheet,FlatList,TouchableOpacit,ScrollView} from 'react-native';
import Client from '../Client.js';


export default class GradeUpdateCheckScreen extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }




  render() {
    const updated_safetycheck_date=this.props.navigation.getParam('updated_safetycheck_date');
    const updated_Electricity=this.props.navigation.getParam('updated_Electricity');
    const updated_Gas=this.props.navigation.getParam('updated_Gas');
    const updated_Elevator=this.props.navigation.getParam('updated_Elevator');
    const updated_Building=this.props.navigation.getParam('updated_Building');
    const updated_FireSafety=this.props.navigation.getParam('updated_FireSafety');

    


    
    return(
      <View style={styles.container}>
  
      <Text style={styles.UpdatedGrade}>
        Updated Grade
          </Text>
          <View style={styles.UpdatedGradeState}>
          <Text>업데이트 날짜 : {updated_safetycheck_date}</Text>
          <Text>전기 : {updated_Electricity}</Text>
          <Text>가스 : {updated_Gas}</Text>
          <Text>엘베 : {updated_Elevator}</Text>
          <Text>빌딩 : {updated_Building}</Text>
          <Text>소방 : {updated_FireSafety}</Text>
          </View>
          <Button title="홈화면으로"
          onPress={() => {  this.props.navigation.navigate('FlatScreen') } }>  
        </Button>
  </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  UpdatedGrade: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  UpdatedGradeState:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 15
  },
});

