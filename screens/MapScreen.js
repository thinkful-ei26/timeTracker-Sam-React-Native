import React, { Component } from 'react'
import { View, Text, SafeAreaView  } from 'react-native'
// import { MapView } from 'expo'
import { Location, Permissions } from 'expo'
// import {connect} from 'react-redux';


import Map from '../components/Map'

// const region = {
//   latitude: 37.321996988,
//   longitude: -122.0325472123455,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// }

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class MapScreen extends Component {
  
 state = {
  region: null,
  places: [{
    title: 'hello',
    radius: 30,
    coordinates: {
      latitude: 45.489327,
      longitude: -122.651703
    },
  },
  {
    title: 'hey',
    radius: 15,
    coordinates: {
      latitude: 45.490139,
      longitude: -122.650572
    },  
  }]
}

componentWillMount() {
  this.getLocationAsync();
}

getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied'
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  const region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    ...deltas
  };
  await this.setState({ region });
}

render() {
  return (
    <SafeAreaView style={styles.container}>
      <Map
        region={this.state.region}
        // places={this.state.places}
      />
    </SafeAreaView>
  );
}




}
const styles = {
  container: {
    width: '100%',
    height: '100%',
  }
}


// export default connect()(MapScreen);