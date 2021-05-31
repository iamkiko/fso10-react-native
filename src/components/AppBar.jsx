import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.appBarBackground,
    color: theme.colors.appBarText,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={console.log("Hello from pressable app bar")}>
        <Text fontSize="subheading" fontWeight="bold" color="appBarText">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
