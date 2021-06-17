import React from "react";
import { View, StyleSheet } from "react-native";
import RepoItemMoreInfo from "./RepoItemMoreInfo";
import RepoItemHeading from "./RepoItemHeading";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
});

const RepositoryListItem = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  return (
    <View style={styles.mainContainer}>
      <RepoItemHeading
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <RepoItemMoreInfo
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  );
};

export default RepositoryListItem;
