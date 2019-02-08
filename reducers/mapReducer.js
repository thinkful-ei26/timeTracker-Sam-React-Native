import {
  ADD_PLACE
} from '../actions/map';

const initialState = {
    places: [{
      title: '24 Hour Fitnesss',
      radius: 30,
      coordinates: {
        latitude: 45.489327,
        longitude: -122.651703
      },
      time: 1.8 
    },
    {
      title: 'Home',
      radius: 15,
      coordinates: {
        latitude: 45.490139,
        longitude: -122.650572
      },
      time: 12.4  
    }]
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
        return Object.assign({}, state, {
          places: [...state.places, 
              action.place,
              
          ]
      });
        default:
          return state
    }
}

export default mapReducer;