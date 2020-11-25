import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetails from "./ResultsDetails";

const ResultList = ({ title, results, navigation }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title} </Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 2,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
