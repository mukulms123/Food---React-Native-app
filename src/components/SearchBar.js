import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={40} color="black" />
      <TextInput
        style={styles.textInput}
        placeholder="Search bar"
        autoCapitalize="none"
        autoCorrect={false}
        value={props.term}
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  //   textStyle: {
  //     fontSize: 30,
  //     textAlignVertical: "center",
  //     color: "gray",
  //   },
  textInput: {
    height: 40,
    margin: 5,
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
