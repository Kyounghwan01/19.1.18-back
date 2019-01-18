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
    const check18 = (this.props.navigation.getParam('check18')?"적정":"불량");
    
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
                    전기 점검 사진 업로드 
                </Text>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 150}} />
                </View>
                <Text style={styles.paragraph}> 전기 점검 체크리스트 </Text>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`점검자 명 : ${name}`}</FormLabel>
                    <FormLabel style={{ fontSize: 15 }}>{`점검일 : ${dayFormat}`}</FormLabel>
                </View>
                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>변압기</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`붓싱 등 애자류 균열, 파손, 단자 접속 사애 점검 : ${check1}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>차단기</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`접속상태, 변색, 균열 점검 : ${check2}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>계전기</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`외관의 파손, 오손 상태 점검 : ${check3}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`동작표시기 작동여부 확인 : ${check4}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`동작치(TAP) 설정의 적정 여부 확인 : ${check5}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`드주위의 작동 필요 공간이 확보 및 살수에 방해가 되는 장애물 여부 : ${check6}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>전선로 및 고압모선</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`충전부와의 이격거리 점검 : ${check7}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`케이블 및 부스터의 지지대 파손, 오손 상태 점검 : ${check8}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`접속상태 및 변색, 균열, 열화, 상태 점검 : ${check9}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>고압기기</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`각 기기 설치상태 점검 : ${check10}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`전력퓨즈 부착상태 점검 : ${check11}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`각 변상기 외관 상태 점검 : ${check12}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`접속상태, 변색, 균열 여부, 외관 변형상태 점검 : ${check13}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>수.배전관</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`외관 상태 및 잠금 장치 점검 : ${check14}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`수.배전반의 최소 공간거리 점검 : ${check15}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>저압</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`변압기 2차 선로에서 배전반까지의 배선, 기기 접촉 불량, 파열 상태 점검 : ${check16}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`배선상태, 배선 굵기 및 배선 종류의 적정 여부 점검 : ${check17}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`배선용 차단기 선정의 적정여부, 누전차단기 부설상태 점검 : ${check18}`}</FormLabel>                    
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
