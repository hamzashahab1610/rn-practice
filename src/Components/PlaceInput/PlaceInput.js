import React, { Component } from 'react'
import { TextInput, Button, View, StyleSheet} from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName)
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Input pleej"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          title="Add"
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput