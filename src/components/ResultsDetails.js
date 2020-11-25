import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name} </Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  viewStyle: {
    marginLeft: 15,
  },
});

export default ResultsDetails;
