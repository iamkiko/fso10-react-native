import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  parentHeadingContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  leftContainer: {
    paddingLeft: 20,
    flex: 1,
  },
  rightContainer: {
    flex: 3,
    flexDirection: "column",
    paddingBottom: 20,
  },
  avatarStyles: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
  languageStyles: {
    backgroundColor: theme.colors.primary,
    color: "#fff",
    alignSelf: "flex-start",
    padding: 6,
    borderRadius: 4,
  },
});

const RepoItemHeading = ({
  fullName,
  description,
  language,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.parentHeadingContainer}>
      <View style={styles.leftContainer}>
        <Image style={styles.avatarStyles} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text
          paddingBottom="bottomSpaced"
          fontWeight="bold"
          fontSize="subheading"
        >
          {fullName}
        </Text>
        <Text paddingBottom="bottomSpacedSecondary">{description}</Text>
        <View>
          <Text style={styles.languageStyles}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepoItemHeading;
