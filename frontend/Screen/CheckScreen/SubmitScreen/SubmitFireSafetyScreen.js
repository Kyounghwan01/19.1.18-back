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
    const check11 = (this.props.navigation.getParam('check1')?"적정":"불량");
    const check12 = (this.props.navigation.getParam('check2')?"적정":"불량");
    const check13 = (this.props.navigation.getParam('check3')?"적정":"불량");
    const check14 = (this.props.navigation.getParam('check4')?"적정":"불량");
    const check15 = (this.props.navigation.getParam('check5')?"적정":"불량");
    const check16 = (this.props.navigation.getParam('check6')?"적정":"불량");
    const check17 = (this.props.navigation.getParam('check7')?"적정":"불량");
    const check18 = (this.props.navigation.getParam('check8')?"적정":"불량");
    const check19 = (this.props.navigation.getParam('check9')?"적정":"불량");
    const check20 = (this.props.navigation.getParam('check10')?"적정":"불량");
    const check21 = (this.props.navigation.getParam('check11')?"적정":"불량");
    const check22 = (this.props.navigation.getParam('check12')?"적정":"불량");
    const check23 = (this.props.navigation.getParam('check13')?"적정":"불량");
    const check24 = (this.props.navigation.getParam('check14')?"적정":"불량");
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
                    소방 점검 사진 업로드 
                </Text>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 150}} />
                </View>
                <Text style={styles.paragraph}> 소방 점검 체크리스트 </Text>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`점검자 명 : ${name}`}</FormLabel>
                    <FormLabel style={{ fontSize: 15 }}>{`점검일 : ${dayFormat}`}</FormLabel>
                </View>
                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>소화기</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`용기본체의 부식 유무 : ${check1}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`설치장소의 소화기표시 유무 : ${check2}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`벨브 및 패킹의 노후 및 탈락 여부 : ${check3}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`노즐 등에 이물질 여부 : ${check4}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`사용방법 및 적용화재 표시 유무 : ${check5}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>옥내.외 소화전 설비</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`소화전이 통행 또는 피난에 지장이 없고 사용할 때에 쉽게 반출할 수 있는 장소에 설치 됨의 여부 : ${check6}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`소화전함, 펌프, 전동기 주위의 장애물 유무 : ${check7}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`소화전함, 호스, 노즐, 배관, 관부속, 밸브류등의 변형, 손상 부식 여부 : ${check8}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`각 밸브의 개폐조작 용이 여부 : ${check9}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>스프링쿨러, 물분무설비</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`제어밸브의 개폐, 작동, 접근 여부 : ${check10}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`배관 및 헤드의 유수 유무 : ${check11}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`동결 또는 부식할 우려가 있는 부분에 보온, 방호조치 여부 : ${check12}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`헤드주위의 작동 필요 공간이 확보 및 살수에 방해가 되는 장애물 여부 : ${check13}`}</FormLabel>                    
                </View>

                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>자동화재탐지.비상경보설비</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`화재발생 감지기의 적정 설치 여부 : ${check14}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`연기감지기의 출입구 부분이나 흡입구가 있는 실내의 부분에 설치 여부 : ${check15}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`수신기 조작부 스위치 정상위치 여부 : ${check16}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>피난설비</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`피난기구의 설치장소와 장치구의 적정 표시 여부 : ${check17}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`피난기구 및 고정장치의 노후, 파손, 변형 여부 : ${check18}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상구 문의 밖으로 열림 및 용이한 개방 여부 : ${check19}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`통로에 피난에 방해가 되는 물건의 방치 여부 : ${check20}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`옥외계단의 노후 및 파손 여부 : ${check21}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`저수탱크의 파손, 누수, 동결 등으로 사용상 지장 우무 : ${check22}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`소화용수는 만수 여부 : ${check23}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`사용에 지장이 있는 장애물 방치 여부 : ${check24}`}</FormLabel>                    
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
