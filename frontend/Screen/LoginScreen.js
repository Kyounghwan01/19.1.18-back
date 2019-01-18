import React, { Component } from 'react'
import {Text, View, TextInput, TouchableOpacity,Alert } from 'react-native'
import axios from 'axios';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class LoginScreen extends Component {
constructor(){
    super();
    this.state = {
    UserData: [],
  };
  }

klikPost(){
    var url = 'http://192.168.190.60:3210/data';
    axios.post(url, {
      name: this.state.input1,
      password: this.state.input2,
      author : this.state.input3
    })
    .then(function (response) {
     
    })
    .catch(function (error) {
     
    });
    this.state.input1 = '';
    this.state.input2 = '';
    this.state.input3 = '';
  };
  
  klikGet(){
    var url = 'http://192.168.190.60:3210/data';
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      this.setState({
        UserData: response.data,
      }) 
    })
  };

  loginCheck() {
    var url = 'http://192.168.190.60:3210/data';
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      this.setState({
        UserData: response.data,
      }) 
    for (let i = 0; i < this.state.UserData.length; i++) {
      if (this.state.input1 && this.state.input2) {
        if (this.state.input1 == this.state.UserData[i].name) {
          if (this.state.input2 == this.state.UserData[i].password) {
            this.props.navigation.navigate('FlatScreen')

            break;
          }else{
            alert('ID 또는 PW 틀림');
          }
        }
      }
      else {
        Alert.alert('ID 및 PW 확인')
      }
    }
  })
    
  }

render() {

    const dataMongo = this.state.UserData.map((item, index)=>{
        var arrayku = ['name: ',item.name,', password: ', item.password,', author: ', item.author, ' th.'].join(' ');
        return <Text style={{fontSize:20,fontWeight:'bold'}} key={index}>{arrayku}</Text>;
      })
    

    return (
<View>
<View style={{flexDirection:'column', alignItems:'center'}}>

<Text style={{marginTop:100, fontSize:25, fontWeight:'bold' }}>
RN ♥ Express ♥ MongoDB
</Text>

<TextInput
placeholder='이름을 입력하시오...'
style={{height: 55, width: 350, fontSize: 15}}
onChangeText={(input1) => this.setState({input1})}
value={this.state.input1}
/>

<TextInput
placeholder='pw 입력...'
style={{height: 55, width: 350, fontSize: 15}}
onChangeText={(input2) => this.setState({input2})}
value={this.state.input2}
/>
<TextInput
placeholder='권한 입력...'
style={{height: 55, width: 350, fontSize: 15}}
onChangeText={(input3) => this.setState({input3})}
value={this.state.input3}
/>
</View>

<View style={{flexDirection:'row', justifyContent:'center'}}>
<TouchableOpacity
style={{
    backgroundColor:'blue', borderRadius:10,
    flex:1, width:100, height:50, margin:20,
    flexDirection:'row', justifyContent:'center',
    alignItems:'center'
    }}
onPress={this.klikPost.bind(this)}
>
<Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
회원가입
</Text>
</TouchableOpacity>

<TouchableOpacity
style={{
    backgroundColor:'green', borderRadius:10,
    flex:1, width:100, height:50, margin:20,
    flexDirection:'row', justifyContent:'center',
    alignItems:'center'
    }}
onPress={()=>this.klikGet()}
>
<Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
GET
</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'column',alignItems:'center',}}>
{dataMongo}
</View>
<Button
  buttonStyle={{backgroundColor: '#2096f3',borderRadius:10}}
  title='Sign Up' 
  onPress={()=>this.loginCheck()}
/>

</View>
);
}
}

export default LoginScreen;