import React from 'react';
import {createStackNavigator,
  createBottomTabNavigator,
  createAppContainer} from 'react-navigation';
  import {
    Ionicons
  } from '@expo/vector-icons';
import {Text,View,TextInput,Button,StyleSheet,FlatList,KeyboardAvoidingView,ListVie} from 'react-native';
import Client from '../Client.js';
import TextInputForm from '../Components/TextInputForm.js';



export default class GradeUpdateScreen extends React.Component {
  static navigationOptions = {
    title: 'Update Grade'
}
  
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false,
      transactionId:null,
    }
  }

  
  fetchGradeUpdate() {
    const facilityNumber_param=this.props.navigation.getParam('facilityNumber_param');
    const admin_param=this.props.navigation.getParam('admin_param');
    console.log(facilityNumber_param);
    
    return fetch(`http://localhost:3000/api/GradeUpdate`,
      {
        
        headers: {
            'Accept': 'application/json',
            "date": "Sat, 12 Jan 2019 00:16:45 GMT",
            "x-content-type-options": "nosniff",
            "etag": "W/\"148-mvsGER+X2CuZkkl0Uoqp+SrNw+E\"",
            "x-download-options": "noopen",
            "x-frame-options": "DENY",
            "content-type": "application/json; charset=utf-8",
            "access-control-allow-origin": "http://192.168.200.153:3000",
            "access-control-allow-credentials": "true",
            "connection": "keep-alive",
            "vary": "Origin, Accept-Encoding",
            "content-length": "328",
            "x-xss-protection": "1; mode=block"
        },
        method: 'POST',
        body: JSON.stringify({
          
            $class: "org.acme.model.GradeUpdate",
            safetycheck_date_update: this.state.safetycheck_date_update,
            Electricity_update: this.state.Electricity_update,
            Gas_update: this.state.Gas_update,
            Elevator_update: this.state.Elevator_update,
            Building_update: this.state.Building_update,
            FireSafety_update: this.state.FireSafety_update,
            grade_prev: `org.acme.model.Grade#${facilityNumber_param}`,
            user: `resource:org.acme.model.User#${admin_param}`
    
        })
      })
      .then(response => {
        response.json()
      })

      .catch(error => {
        console.error(error);
      });
  }



  render() {
    return(
        <KeyboardAvoidingView style={styles1.container} behavior="padding"> 
        
        <View Update Electricity ></View>


        <TextInputForm placeholder="안전점검 수행날짜 업데이트" name="ios-construct"
        onChangeText={(text) => { this.setState({ safetycheck_date_update : text }) }}></TextInputForm>
        <TextInputForm placeholder="전기 안전등급 업데이트" name="ios-flash"
         onChangeText={(text) => { this.setState({ Electricity_update : text }) }}></TextInputForm>
        <TextInputForm placeholder="가스 안전등급 업데이트" name="md-flask"
         onChangeText={(text) => { this.setState({ Gas_update : text }) }}></TextInputForm>
        <TextInputForm placeholder="엘리베이터 안전등급 업데이트" name="md-filing"
         onChangeText={(text) => { this.setState({ Elevator_update : text }) }}></TextInputForm>
        <TextInputForm placeholder="건물 안전등급 업데이트" name="ios-home"
         onChangeText={(text) => { this.setState({ Building_update : text }) }}></TextInputForm>
        <TextInputForm placeholder="소방 안전등급 업데이트" name="ios-flame"
         onChangeText={(text) => { this.setState({ FireSafety_update : text }) }}></TextInputForm>

        
        <Button title="+ GradeUpdate"
          onPress={() => { this.fetchGradeUpdate().then(() => { this.props.navigation.navigate('GradeUpdateCheckScreen',{
              updated_safetycheck_date : this.state.safetycheck_date_update,
              updated_Electricity : this.state.Electricity_update,
              updated_Gas : this.state.Gas_update,
              updated_Elevator : this.state.Elevator_update,
              updated_Building : this.state.Building_update,
              updated_FireSafety : this.state.FireSafety_update
          }) }) }}>  
        </Button>
 
      </KeyboardAvoidingView>
    )
  }
}
const styles1=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});