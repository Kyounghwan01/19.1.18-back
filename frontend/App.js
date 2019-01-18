import React, { Component } from 'react'
import FlatScreen from './Screen/FlatScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './Screen/LoginScreen';
import GradeScreen from './Screen/GradeScreen.js';
import SubmitScreen from './Screen/CheckScreen/SubmitScreen/SubmitScreen';
import CheckNaviScreen from './Screen/CheckScreen/CheckNaviScreen';
import SubmitBuildingScreen from './Screen/CheckScreen/SubmitScreen/SubmitBuildingScreen';
import SubmitElectricScreen from './Screen/CheckScreen/SubmitScreen/SubmitElectricScreen';
import SubmitElevatorScreen from './Screen/CheckScreen/SubmitScreen/SubmitElevatorScreen';
import SubmitFireSafetyScreen from './Screen/CheckScreen/SubmitScreen/SubmitFireSafetyScreen';
import BuildingCheckScreen from './Screen/CheckScreen/BuildingCheckScreen';
import ElectricCheckScreen from './Screen/CheckScreen/ElectricCheckScreen';
import ElevatorCheckScreen from './Screen/CheckScreen/ElevatorCheckScreen';
import FireSafetyCheckScreen from './Screen/CheckScreen/FireSafetyCheckScreen';
import GradeUpdateScreen from './Screen/GradeUpdateScreen';
import GradeUpdateCheckScreen from './Screen/GradeUpdateCheckScreen';
// import UpdateCheckScreen from './Screen/UpdateCheckScreen';
import GradeFlatScreen from './Screen/GradeFlatScreen';




const defaultNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#2096f3',
  },
};
// const HomeStack = createStackNavigator(
//   { 
    
//   },
//   {
//     defaultNavigationOptions
//   })
// const FlactScreen = createStackNavigator(
//   { 
    
    
   

//   },
//   {
//     defaultNavigationOptions
//   })  

const MainNavigator = createStackNavigator(
  {
    LoginScreen : LoginScreen,
    FlatScreen : FlatScreen,
    CheckNaviScreen:CheckNaviScreen,
    SubmitScreen:SubmitScreen,
    GradeFlatScreen:GradeFlatScreen,
    GradeScreen:GradeScreen,
    GradeUpdateCheckScreen:GradeUpdateCheckScreen,
 
  GradeUpdateScreen:GradeUpdateScreen,
  
  SubmitBuildingScreen:SubmitBuildingScreen,
  SubmitElectricScreen:SubmitElectricScreen,
  SubmitElevatorScreen:SubmitElevatorScreen,
  SubmitFireSafetyScreen:SubmitFireSafetyScreen,
  BuildingCheckScreen:BuildingCheckScreen,
  ElectricCheckScreen:ElectricCheckScreen,
  ElevatorCheckScreen:ElevatorCheckScreen,
  FireSafetyCheckScreen:FireSafetyCheckScreen,
  },
  {
    defaultNavigationOptions
  }
  
);

const RootStack = createStackNavigator(
  {
    //HomeStack,
    MainNavigator,
    //FlactScreen,
   
  },
  {
    mode:'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack)

class App extends Component {
  render() {
    return (
      <RootStack/>
    )
  }
}
