import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,KeyboardAvoidingView,Button,Image } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';


export default class GradeFlatScreen extends Component {
  static navigationOptions = {
    title: 'Facility List'
}
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing:false
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  _onButtonPress=()=>{
    this.props.navigation.navigate('CheckNaviScreen');
  }


 



  makeRemoteRequest = () => {
    this.setState({ loading: true });

    fetch(`http://localhost:3000/api/Grade`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
  refreshData=()=>{};
  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.admin.toUpperCase()} ${item.facilityNumber}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    //`건물번호 : ${item.facilityNumber}    관리자 : ${item.admin}`
    return (
      <KeyboardAvoidingView>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          refreshing={this.state.refreshing}
          onRefresh={this.refreshData}
          renderItem={({ item }) => (
            <View style ={{flexDirection:'row'}}>
              <Image
                  style={{flex : 1}}
                  source={{uri: 'http://image.koreatimes.com/article/2016/11/24/20161124135110581.jpg'}}
              />
            <View style ={{flex:5}}>
            <ListItem
              
              title={`건물번호 : ${item.facilityNumber}  관리자 Id : ${item.admin.substring(29, item.admin.indexOf("@"))}`}
              subtitle={`최근 검사 일 : ${item.safetycheck_date}`}
              //avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
              <Button 
                buttonStyle={{backgroundColor: '#2096f3'}}
                onPress={this._onButtonPress} 
                title="Checklist"/>
            
            <Button 
                  buttonStyle={{backgroundColor: '#2096f3'}}
                 onPress = { () => this.props.navigation.navigate('GradeScreen', { 
                  FacilityNumber : item.facilityNumber
                  })}
               title = "History"
              />
               
                <Button 
                buttonStyle={{backgroundColor: '#2096f3'}}
                onPress= { () => this.props.navigation.navigate('GradeUpdateScreen', { 
                  facilityNumber_param : item.facilityNumber,
                  admin_param : item.admin.substring(29)
                  })} 
                title="UpdateGrade"/>
                
               </View>
              </View>
            </View>
            
          )}
          keyExtractor={item => item.facilityNumber}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
      </KeyboardAvoidingView>
    );
  }
}