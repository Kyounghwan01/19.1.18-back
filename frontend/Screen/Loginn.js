//import React, { Component} from 'react'
// import {KeyboardAvoidingView,Alert} from 'react-native';
// import {View, Text} from 'react-native';
// import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';


// class LoginScreen extends Component {
//     static navigationOptions = {
//         title:'Login',
//         // headerRight: (
//         //     <Button title="도움말" color="#fff"
//         //         onPress={this.helper}
//         //         />
//         //   ),
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//           login: false,
//           data: []
//         }
//       }
//       componentDidMount() {
//         this.fetchMem().then(items => {
//           this.setState({
//             data: items
//           })
//         });
//       }
//       fetchMem() {
//         return fetch(`http://localhost:3000/api/User`)
//           .then(response => response.json())
//           .catch(error => {
//             console.error(error);
//           });
//       }

//       _onPressLink() {
//         Alert.alert('회원가입 페이지로 넘어가랏!!!')
//       }

//       loginCheck() {
//         for (let i = 0; i < this.state.data.length; i++) {
//           if (this.state.loginName && this.state.password) {
//             if (this.state.loginName == this.state.data[i].firstName) {
//               if (this.state.password == this.state.data[i].lastName) {
//                 this.loginConfirm(i)
//                 break;
//               }
//             }
//           }
//           else {
//             Alert.alert('ID 및 PW 확인')
//           }
//         }
//       }

//       loginConfirm() {
//         this.props.navigation.navigate('FlatScreen')
//         // this.props.dispatch({
//         //   type: 'LOADED_MEM',
//         //   mem: this.state.data[i]
//         // });
//       }

//       _onButtonPress=()=>{
//         this.props.navigation.navigate('FlatScreen')
//       }
      
//   render() {
//         return (
            
//             <KeyboardAvoidingView style={{backgroundColor: '#fff', flex: 1}}>
//                 <View style={styles.containerStyle}>
//                     <FormLabel 정기 안전점검 />
//                     <FormLabel>User ID</FormLabel>
//                     <FormInput
//                         value={this.state.userId}
//                         onChangeText={(text) => { this.setState({ loginName: text }) }} 
//                     />
//                 </View>
//                 <View style={styles.containerStyle}>
//                     <FormLabel>passward</FormLabel>
//                     <FormInput
//                         value={this.state.passward}
//                         onChangeText={(text) => { this.setState({ password: text }) }}
//                     />
//                 </View>
//                 <View style={styles.containerStyle}>
//                     <Button
//                         buttonStyle={{backgroundColor: '#2096f3'}}
//                         title='Sign In' 
//                         onPress={() => this.loginCheck()}
//                     />
                    
//                 </View>
//                 <View style={styles.containerStyle}>
//                     <Button
//                         buttonStyle={{backgroundColor: '#2096f3'}}
//                         title='Sign Up' 
//                         onPress={this._onButtonPress}
//                     />
                    
//                 </View>
//                 <View style={styles.containerStyle}>
//                     <FormValidationMessage>{this.state.error}</FormValidationMessage>
//                 </View>
//             </KeyboardAvoidingView>
            
//         )
//     }
// }

// const styles = {
//     containerStyle: {
//         marginTop: 10
//     }
// }


//   export default LoginScreen;