import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';
import Header from '../components/Header'
import Timer from '../components/Timer'
import { MonoText } from '../components/StyledText';

export  class HomeScreen extends React.Component {

  // static navigationOptions = {
  //   header: <Header/>
  // };


  renderTitles() {
    return this.props.places.map((place, i) => (
    <Text style={{justifyContent: 'flex-start',}} key={i} >{place.title}</Text>
    ))
  }

  renderTimes() {
    return this.props.places.map((place, i) => (
    <Text style={{justifyContent: 'flex-end',}} key={i} >{place.time} Hours</Text>
    ))
  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.homeTitle}>Your Placces</Text>


      <View style={{flexDirection:"row"}}> 
      <View style={{flex:1, paddingLeft:20}}>
        {this.renderTitles()}
        </View>
        
      <View style={{flex:1}}>
        {this.renderTimes()}
        </View>
      </View>  
      {/* <Timer/>  */}
      </ScrollView>
    );
  }



}

const mapStateToProps = state => {
  // console.log('state in map>>',state)
   return{
   places: state.mapReducer.places
   }
 };
 export default connect(mapStateToProps)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeTitle: {
    fontSize: 22,
    textAlign: 'center',
    padding: 20,

  },
 
  
});
