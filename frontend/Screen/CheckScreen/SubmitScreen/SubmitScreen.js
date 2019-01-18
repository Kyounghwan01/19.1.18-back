import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Constants} from "expo";
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';

export default class SubmitScreen extends Component {
    
    _onButtonPressUpdateGrade=()=>{
        alert('제출 완료')
        this.props.navigation.navigate('CheckNaviScreen');
        this.setState({buttonColor: false});
    }

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
                    Gas 점검 사진 업로드 
                </Text>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={{ uri: image }} style={{ width: 200, height: 150}} />
                </View>
                <Text style={styles.paragraph}> Gas 점검 체크리스트 </Text>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`점검자 명 : ${name}`}</FormLabel>
                    <FormLabel style={{ fontSize: 15 }}>{`점검일 : ${dayFormat}`}</FormLabel>
                    
                </View>
                
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>가스 시설</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스 누설 경보기 설치 여부 : ${check1}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`용기, 배관, 밸브 및 연소기의 파손. 변형. 노후 또는 부식 여부 : ${check2}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`방화 환경조성 및 주의, 경고 표시 부착 및 파손 부분 여부 : ${check3}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스용기 관리상태 및 가연성물질 방치 여부 : ${check4}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스차단기, 경보기 등 정상작동 여부부 : ${check5}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스기기 이용실태 및 시설기준 적정여부 : ${check6}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스보일러의 흡,배기구시설 설치 상태 : ${check7}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스용기의 저장 지하실 환기 및 관리상태 확인 : ${check8}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`가스사용 시설에 대한 정기 안전점검 실시 여부 : ${check9}`}</FormLabel>                    
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>방화 시설</Text>
                </View>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`내장재의 불연화 여부 : ${check10}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상구의 폐쇄 또는 다목적으로 사용 여부 : ${check11}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`비상용 승강기의 적법 설치 여부 : ${check12}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>위험물 저장취급 시설</Text>
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`불필요한 가연물의 방치 여부 : ${check13}`}</FormLabel>                    
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel style={{ fontSize: 15 }}>{`차광 및 환기 설비 이상 유무 : ${check14}`}</FormLabel>                    
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
