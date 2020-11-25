import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [results, setResults] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!results) {
    return null;
  }

  return (
    <View>
      <FlatList
        keyExtractor={(photo) => photo}
        data={results.photos}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: 200,
    borderRadius: 5,
  },
});

export default ResultShowScreen;
