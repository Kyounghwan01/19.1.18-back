import React ,{Component} from 'react';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {MaterialCommunityIcons,Ionicons} from  '@expo/vector-icons';
import { Constants, ImagePicker, Permissions } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Button,CheckBox } from 'react-native-elements';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import ElectricCheckScreen from './ElectricCheckScreen';
import BuildingCheckScreen from './BuildingCheckScreen';
import ElevatorCheckScreen from './ElevatorCheckScreen';
import FireSafetyCheckScreen from './FireSafetyCheckScreen';

// const CheckListScreen = createStackNavigator({
//     GasCheck: {
//         screen : GasCheck
//     },
//     ElectricCheck: {
//         screen : ElectricCheck
//     },
//     ElevatorCheck: {
//         screen : ElevatorCheck
//     },
//     BuildingCheck: {
//         screen : BuildingCheck
//     },
//     FireSafetyCheck: {
//         screen : FireSafetyCheck
//     }
// });

class GasCheckScreen extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: null,
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
        this.props.navigation.navigate('SubmitScreen', {
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
            name : this.state.name,
            image : this.state.image,
            buttonColor : this.state.buttonColor
        });
        }
    }

    render(){
        let { image } = this.state;
        return (
           <View style={styles.container}>
                <ScrollView>
                    <Text 
                        style={{margin: 10,
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'center'}}> 
                        가스 점검 사진 업로드 
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

                    <Text style={styles.paragraph}> 가스 점검 체크리스트 </Text>
                    <View style={styles.containerStyle}>
                        <FormLabel>점검자 명</FormLabel>
                        <FormInput
                            value={this.state.name}
                            onChangeText={this._username}
                        />
                    </View>
                    <View style={styles.containerStyle}>


                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, marginTop: 10 }}>
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
                        <Text style={styles.subject}>가스 시설</Text>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스 누설 경보기 설치 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked1) ? '적정' : '불량'}
                        checked={this.state.checked1}
                        onPress={() => this.setState({checked1: !this.state.checked1})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>용기, 배관, 밸브 및 연소기의 파손. 변형. 노후 또는 부식 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked2) ? '적정' : '불량'}
                        checked={this.state.checked2}
                        onPress={() => this.setState({checked2: !this.state.checked2})}
                        />
                        </View>
                            
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>방화 환경조성 및 주의, 경고 표시 부착 및 파손 부분 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked3) ? '적정' : '불량'}
                        checked={this.state.checked3}
                        onPress={() => this.setState({checked3: !this.state.checked3})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스용기 관리상태 및 가연성물질 방치 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked4) ? '적정' : '불량'}
                        checked={this.state.checked4}
                        onPress={() => this.setState({checked4: !this.state.checked4})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스차단기, 경보기 등 정상작동 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked5) ? '적정' : '불량'}
                        checked={this.state.checked5}
                        onPress={() => this.setState({checked5: !this.state.checked5})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스기기 이용실태 및 시설기준 적정여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked6) ? '적정' : '불량'}
                        checked={this.state.checked6}
                        onPress={() => this.setState({checked6: !this.state.checked6})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스보일러의 흡,배기구시설 설치 상태</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked7) ? '적정' : '불량'}
                        checked={this.state.checked7}
                        onPress={() => this.setState({checked7: !this.state.checked7})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스용기의 저장 지하실 환기 및 관리상태 확인</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked8) ? '적정' : '불량'}
                        checked={this.state.checked8}
                        onPress={() => this.setState({checked8: !this.state.checked8})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>가스사용 시설에 대한 정기 안전점검 실시 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked9) ? '적정' : '불량'}
                        checked={this.state.checked9}
                        onPress={() => this.setState({checked9: !this.state.checked9})}
                        />
                        </View>
                    </View>

                    <View style={styles.containerStyle}>
                        <Text style={styles.subject}>방화 시설</Text>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>내장재의 불연화 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked10) ? '적정' : '불량'}
                        checked={this.state.checked10}
                        onPress={() => this.setState({checked10: !this.state.checked10})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>비상구의 폐쇄 또는 다목적으로 사용 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked11) ? '적정' : '불량'}
                        checked={this.state.checked11}
                        onPress={() => this.setState({checked11: !this.state.checked11})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>비상용 승강기의 적법 설치 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked12) ? '적정' : '불량'}
                        checked={this.state.checked12}
                        onPress={() => this.setState({checked12: !this.state.checked12})}
                        />
                        </View>
                    </View>
                    <View style={styles.containerStyle}>
                        <Text style={styles.subject}>위험물 저장취급 시설</Text>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>불필요한 가연물의 방치 여부</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked13) ? '적정' : '불량'}
                        checked={this.state.checked13}
                        onPress={() => this.setState({checked13: !this.state.checked13})}
                        />
                        </View>
                    </View>
                    <View style={[styles.containerStyle, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <View style= {{flex: 3}}>
                        <FormLabel>차광 및 환기 설비 이상 유무</FormLabel>
                        </View>
                        <View  style= {{flex: 1}}>
                        <CheckBox
                        title={(this.state.checked14) ? '적정' : '불량'}
                        checked={this.state.checked14}
                        onPress={() => this.setState({checked14: !this.state.checked14})}
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

export default createAppContainer(createBottomTabNavigator({
    Gas: GasCheckScreen,
    Electric : ElectricCheckScreen,
    Elevator: ElevatorCheckScreen,
    Building: BuildingCheckScreen,
    FireSafety: FireSafetyCheckScreen
    }, {
      defaultNavigationOptions: ({
        navigation
      }) => ({
          

        tabBarIcon: ({focused,tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Gas') {
            iconName = `gas-cylinder`;
          }else if (routeName === 'Electric') {
              iconName = `car-battery`;
          }
          else if (routeName === 'Elevator') {
            iconName = `elevator`;
          }
          else if (routeName === 'Building') {
            iconName = `office-building`;
          }
          else if (routeName === 'FireSafety') {
            iconName = `fire`;
          }
    
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <MaterialCommunityIcons name = {iconName} size = {25}color = {tintColor}/>;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    })
);

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