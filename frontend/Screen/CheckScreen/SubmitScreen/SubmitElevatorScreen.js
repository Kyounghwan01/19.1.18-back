import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Constants} from "expo";
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';

export default class SubmitScreen extends Component {
    
    _onButtonPressUpdateGrade=()=>{
        alert('제출 완료')
        this.props.navigation.navigate('FlatScreen');}

  render() {
    const day=this.props.navigation.getParam('day');
    const check1 = (this.props.navigation.getParam('check1')?"적정":"불량");
    const check2 = (this.props.navigation.getParam('check2')?"적정":"불량");
    const check3 = (this.props.navigation.getParam('check3')?"적정":"불량");
    const check4 = (this.props.navigation.getParam('check4')?"적정":"불량");
    const check5 = (this.props.navigation.getParam('check5')?"적정":"불량");
    const check6 = (this.props.navigation.getParam('check6')?"적정":"불량");
    const check7 = (this.props.navigation.getParam('check7')?"적정":"불량");
    const check8 = (this.props.navigation.getParam('check8')?"적정":"불량");
    const check9 = (this.props.navigation.getParam('check9')?"적정":"불량");
    const check10 = (this.props.navigation.getParam('check10')?"적정":"불량");
    const check11 = (this.props.navigation.getParam('check11')?"적정":"불량");
    const check12 = (this.props.navigation.getParam('check12')?"적정":"불량");
    const check13 = (this.props.navigation.getParam('check13')?"적정":"불량");
    const check14 = (this.props.navigation.getParam('check14')?"적정":"불량");
    const check15 = (this.props.navigation.getParam('check15')?"적정":"불량");
    const check16 = (this.props.navigation.getParam('check16')?"적정":"불량");
    const check17 = (this.props.navigation.getParam('check17')?"적정":"불량");
    
    const name = this.props.navigation.getParam('name');
    const image = this.props.navigation.getParam('image');

    const dayFormat = day.format("YYYY년 MM월 DD일");
    
    return (
        <ScrollView>
                <Text 
                    style={{marginTop: 10,
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center'}}> 
                    승강기 점검 사진 업로드 
                </Text>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 150}} />
                </View>
                <Text style={styles.paragraph}> 승강기 점검 체크리스트 </Text>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`점검자 명 : ${name}`}</FormLabel>
                    <FormLabel style={{ fontSize: 15 }}>{`점검일 : ${dayFormat}`}</FormLabel>
                    
                </View>
                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>작동 상태 확인</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상 및 작동시험을 위한 운전 및 내부통화시스템 : ${check1}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`문닫힘안전장치 : ${check2}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`승강장문 잠금장치 : ${check3}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`상승 과속 방지수단 : ${check4}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`완충기 : ${check5}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`파이널 리미트 스위치 : ${check6}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`전동기 구동시간 제한 장치 : ${check7}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상운전 : ${check8}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상통화장치 : ${check9}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상통화장치 : ${check10}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`정상운전 제어 : ${check11}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`문이 개방된 상태의 착상 및 재-착상의 제어 : ${check12}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`점검운전 제어 : ${check13}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`토킹운전 제어 : ${check14}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`정지장치 : ${check15}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`파킹운전 : ${check16}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`전기안전장치 : ${check17}`}</FormLabel>                    
                </View>

                <View style={{marginTop : 30, marginBottom:100}}>
                    <Button
                        buttonStyle={{backgroundColor: '#2096f3', borderRadius: 5}}
                        title='확인 완료 및 제출' 
                        onPress={this._onButtonPressUpdateGrade} 
                        
                        />
                    <View>   
                </View>
            </View>
        </ScrollView>
        
    );
  }
}
 

//<Text >{`${day1}`}</Text>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        marginTop:70,
        margin: 30,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerStyle: {
        marginTop: 10
    },
    subject:{
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
