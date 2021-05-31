import React from "react";
import { Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </>
  );
};

export default Main;
