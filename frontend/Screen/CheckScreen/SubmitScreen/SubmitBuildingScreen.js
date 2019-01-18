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
    const check19 = (this.props.navigation.getParam('check19')?"적정":"불량");
    
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
                    건물 점검 사진 업로드 
                </Text>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 150}} />
                </View>
                <Text style={styles.paragraph}> 건물 점검 체크리스트 </Text>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`점검자 명 : ${name}`}</FormLabel>
                    <FormLabel style={{ fontSize: 15 }}>{`점검일 : ${dayFormat}`}</FormLabel>
                    
                </View>
                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>지반 상태</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`시설물 주변의 지반 침하 또는 이로 인한 건물의 기욺, 균열 유무 : ${check1}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>구조 부재</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`주요 구조부재에 균열, 누수 및 누수흔적이 발생 유무 : ${check2}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`구조부재의 처짐, 기욺, 또는 단면 손실 등의 변형 유무 : ${check3}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`철근 부식, 노출 또는 콘크리트의 박리.박락 유무 : ${check4}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`철골부재의 접합부 볼트 풀림, 누락, 탈락, 용접불량 유무 : ${check5}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`철골부재의 기욺, 좌굴 등의 변형 손상 유무 : ${check6}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`철골부재에 부식에 의한 단면 결손 등의 손상 유무 : ${check7}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>비구조부재</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`내부 칸막이벽에 균열 및 변형 유무 : ${check8}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`천장, 벽체, 바닥 마감재 파손, 오염, 변형, 누수 및 누수흔적 유무 : ${check9}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`외부 마감재 및 처마의 오염, 손상, 탈락, 균열 유무 : ${check10}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`옥상, 지붕 방수층의 상태는 양호한가 : ${check11}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`옥상 난간의 과도한 균열, 변형 발생 및 난간 높이는 적절한가 : ${check12}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>주 출입구</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`캐노피 부재의 지지상태 불량, 기욺, 처짐, 등의 변형 유무 : ${check13}`}</FormLabel>                    
                </View>
                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>창호</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`칭호가 낮게 설치된 경우 추락 방지를 위한 조치 유무 : ${check14}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>재난 대비</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`재해 발생 시 피난 통로 시설의 상태 : ${check15}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>이동통로</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`이동통로에서 미끄러짐에 의한 안전사고 발생 우려 유무 : ${check16}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`난간의 고정상태는 양호한가 : ${check17}`}</FormLabel>                    
                </View>

                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>기타</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`추락, 낙하에 의한 안전사고가 발생할 수 있는 위험요소 유무 : ${check18}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`물품 적치로 건축물에 과도한 적재하중이 작용되는 곳이 있는가 : ${check19}`}</FormLabel>                    
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
