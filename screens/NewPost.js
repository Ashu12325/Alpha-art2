import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class NewPost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New post</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
