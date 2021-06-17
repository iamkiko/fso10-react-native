import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  parentSubcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  moreInfoSubcontainer: {
    flexDirection: "column",
    paddingRight: 20,
  },
});

const roundThousandToK = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  }
  return num; // if value < 1000, nothing to do
};

const RepoItemMoreInfo = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  return (
    <View style={styles.parentSubcontainer}>
      <View style={styles.moreInfoSubcontainer}>
        <Text fontWeight="bold">{roundThousandToK(stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.moreInfoSubcontainer}>
        <Text fontWeight="bold">{roundThousandToK(forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.moreInfoSubcontainer}>
        <Text fontWeight="bold">{reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.moreInfoSubcontainer}>
        <Text fontWeight="bold">{ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepoItemMoreInfo;
