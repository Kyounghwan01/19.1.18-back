import React ,{Component} from 'react';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {MaterialCommunityIcons,Ionicons} from  '@expo/vector-icons';
import { Constants, ImagePicker, Permissions } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class ElectricCheckScreen extends Component{
    static navigationOptions = {
        title: 'ElectricCheckScreen'
    }

    constructor(props){
        super(props);
        this.state = {
            name: '',
            updateday: '',
            error: '',
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false,
            checked8:false,
            checked9:false,
            checked10:false,
            checked11:false,
            checked12:false,
            checked13:false,
            checked14:false,
            checked15:false,
            checked16:false,
            checked17:false,
            buttonColor: false
        }
    }

    state = {
        isDateTimePickerVisible: false,
        image: null
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });

        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
        this._hideDateTimePicker();
        var day = moment(date);
        this.setState({
            day: day
        })
    };
    
    _username = (name) => {
        this.setState({ name });
    }

    _updateday = (updateday) => {
        this.setState({ updateday });
    }

    _onButtonPress = () => {
        if(this.state.day == null){
            alert("점검일을 지정 하시오")
        } else if(this.state.name == null){
            alert('이름을 저장 하시오')
        } else if(this.state.image == null){
            alert('사진을 등록 하시오')
        } else if(this.state.buttonColor == true){
            alert('이미 제출하였습니다')
        }
        else{
            this.setState({buttonColor: true});
        this.props.navigation.navigate('SubmitElevatorScreen', {
            day: this.state.day,
            check1:this.state.checked1,
            check2:this.state.checked2,
            check3:this.state.checked3,
            check4:this.state.checked4,
            check5:this.state.checked5,
            check6:this.state.checked6,
            check7:this.state.checked7,
            check8:this.state.checked8,
            check9:this.state.checked9,
            check10:this.state.checked10,
            check11:this.state.checked11,
            check12:this.state.checked12,
            check13:this.state.checked13,
            check14:this.state.checked14,
            check15:this.state.checked15,
            check16:this.state.checked16,
            check17:this.state.checked17,
            name : this.state.name,
            image : this.state.image,
        });
        }
    }

  render() {
    let { image } = this.state;
    return (
       <View style={styles.container}>
            <ScrollView>
                <Text 
                    style={{margin: 10,
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center'}}> 
                    승강기 점검 사진 업로드 
                </Text>
                <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center'}} onPress={this._pickImage}>
                    <View style={{
                        width: 200, height: 150, backgroundColor: '#CCCCCC',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 150 }} 
                    />}
                    <View style={{
                        position: 'absolute', left: 165, top: 115, borderWidth: StyleSheet.hairlineWidth, borderColor: 'black',
                        backgroundColor: 'white', opacity: 0.8, width: 30, height: 30, borderRadius: 15,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Ionicons name="ios-camera" size={25} color="black"></Ionicons>
                    </View>
                    </View>
                </TouchableOpacity>

                <Text style={styles.paragraph}> 승강기 점검 체크리스트 </Text>
                <View style={styles.containerStyle}>
                    <FormLabel>점검자 명</FormLabel>
                    <FormInput
                        value={this.state.name}
                        onChangeText={this._username}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <FormLabel>점검 일시</FormLabel>

                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, marginTop: 20 }}>
                        <FormLabel style={{ fontSize: 18 }}>점검일 : </FormLabel>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            {(this.state.day) ?
                                <FormLabel>{this.state.day.format('YYYY[년] MM[월] DD[일]')}</FormLabel>
                                //<Text style={{ fontSize: 15 }}>{this.state.day[3]}년 {this.state.day[1]} {this.state.day[2]}. {this.state.day[0]}</Text>
                                : <FormLabel style={{ fontSize: 18 }}>날짜를 선택하시오</FormLabel>
                            }
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />

                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.subject}>작동 상태 확인</Text>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>비상 및 작동시험을 위한 운전 및 내부통화시스템</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked1) ? '적정' : '불량'}
                    checked={this.state.checked1}
                    onPress={() => this.setState({checked1: !this.state.checked1})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>문닫힘안전장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked2) ? '적정' : '불량'}
                    checked={this.state.checked2}
                    onPress={() => this.setState({checked2: !this.state.checked2})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>승강장문 잠금장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked3) ? '적정' : '불량'}
                    checked={this.state.checked3}
                    onPress={() => this.setState({checked3: !this.state.checked3})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>상승 과속 방지수단</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked4) ? '적정' : '불량'}
                    checked={this.state.checked4}
                    onPress={() => this.setState({checked4: !this.state.checked4})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>완충기</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked5) ? '적정' : '불량'}
                    checked={this.state.checked5}
                    onPress={() => this.setState({checked5: !this.state.checked5})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>파이널 리미트 스위치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked6) ? '적정' : '불량'}
                    checked={this.state.checked6}
                    onPress={() => this.setState({checked6: !this.state.checked6})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>전동기 구동시간 제한 장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked7) ? '적정' : '불량'}
                    checked={this.state.checked7}
                    onPress={() => this.setState({checked7: !this.state.checked7})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>비상운전</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked8) ? '적정' : '불량'}
                    checked={this.state.checked8}
                    onPress={() => this.setState({checked8: !this.state.checked8})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>비상통화장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked9) ? '적정' : '불량'}
                    checked={this.state.checked9}
                    onPress={() => this.setState({checked9: !this.state.checked9})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>비상통화장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked10) ? '적정' : '불량'}
                    checked={this.state.checked10}
                    onPress={() => this.setState({checked10: !this.state.checked10})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>정상운전 제어</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked11) ? '적정' : '불량'}
                    checked={this.state.checked11}
                    onPress={() => this.setState({checked11: !this.state.checked11})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>문이 개방된 상태의 착상 및 재-착상의 제어</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked12) ? '적정' : '불량'}
                    checked={this.state.checked12}
                    onPress={() => this.setState({checked12: !this.state.checked12})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>점검운전 제어</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked13) ? '적정' : '불량'}
                    checked={this.state.checked13}
                    onPress={() => this.setState({checked13: !this.state.checked13})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>토킹운전 제어</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked14) ? '적정' : '불량'}
                    checked={this.state.checked14}
                    onPress={() => this.setState({checked14: !this.state.checked14})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>정지장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked15) ? '적정' : '불량'}
                    checked={this.state.checked15}
                    onPress={() => this.setState({checked15: !this.state.checked15})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>파킹운전</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked16) ? '적정' : '불량'}
                    checked={this.state.checked16}
                    onPress={() => this.setState({checked16: !this.state.checked16})}
                    />
                    </View>
                </View>
                <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View style={{flex: 3}}>
                    <FormLabel>전기안전장치</FormLabel>
                    </View>
                    <View style={{flex: 1}}>
                    <CheckBox
                    title={(this.state.checked17) ? '적정' : '불량'}
                    checked={this.state.checked17}
                    onPress={() => this.setState({checked17: !this.state.checked17})}
                    />
                    </View>
                </View>


                <View style={{marginTop : 30}}>
                    <Button
                        buttonStyle={{
                            borderRadius: 5,
                            backgroundColor : (this.state.buttonColor) ? 'grey' : '#2096f3'
                        }}
                        title='제출' 
                        onPress= {this._onButtonPress}
                    />
                </View>

                <View style={styles.containerStyle}>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                </View>
            </ScrollView>
        </View>
    );
  }
}

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