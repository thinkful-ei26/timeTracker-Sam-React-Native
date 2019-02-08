import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { MapView } from 'expo'
import { Button, Input } from 'react-native-elements';
import {connect} from 'react-redux';
import {addPlace} from '../actions/map';


export class Map extends Component {
  constructor(props) {
    super(props);

  this.state = {
    addLocation: false,
    radius: null,
    title: null,
    lat: '',
    lon: '',
    canPressMap: false,

  }
}



mapPress(e){
  this.state.lat = e.coordinate.latitude
  this.state.lon = e.coordinate.longitude
  // console.log('after setstate',this.state.lat)
  let newPlace  = {
    title: this.state.title,
    radius: parseInt(this.state.radius),
    coordinates: {
      latitude: this.state.lat,
      longitude: this.state.lon
    },
    time: 0 
  }
  console.log('place adding>>>',newPlace)
  this.props.dispatch(addPlace(newPlace))
  this.setState({lat:null, lon: '', addLocation: false, title:false, radius:null, canPressMap:false })
}

addLocationPress(){
  this.setState({addLocation: true})
}

pickPlace(){
  console.log('you can now press the map')
  this.setState({canPressMap: true})
}

 

   renderMarkers() {
    return this.props.places.map((place, i) => (
    <MapView.Circle  key={i} radius={place.radius}  center={place.coordinates} />
    ))
  }
  
  render() {
    const { region } = this.props

    return (
      <View>
        {!this.state.addLocation && <Button title="Add Location" onPress={ () => this.addLocationPress()}/>}
        {this.state.addLocation && 
          <View>
            <Input  
              placeholder='Enter Radius'
              type='number' 
              onChangeText={radius => this.setState({ radius })}
          />
        <Input  
          placeholder='Enter Title'
          type='string' 
          onChangeText={title => this.setState({ title })}
        />
        <Button title="Pick Place" onPress={ () => this.pickPlace()}/>
        </View>}
      {this.state.canPressMap?
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
        onPress={e => this.mapPress(e.nativeEvent)}
      >
        {this.renderMarkers()}
      </MapView>:    
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>}

   


      </View>
    )
  }
}

const mapStateToProps = state => {
 console.log('state>>',state)
  return{
  places: state.mapReducer.places
  }
};



const styles = {
  container: {
    width: '100%',
    height: '100%',
  }
}

export default connect(mapStateToProps)(Map);
