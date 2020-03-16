import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
} from "react-native";

import PlaceList from './src/Components/PlaceList/PlaceList'
import PlaceInput from "./src/Components/PlaceInput/PlaceInput";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = (placeName) => {    
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});
