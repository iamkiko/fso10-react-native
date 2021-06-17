import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  appBarTextColor: {
    color: theme.colors.appBarText,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  bottomSpaced: {
    paddingBottom: theme.paddingBottom.subheading,
  },
  bottomSpacedSecondary: {
    paddingBottom: theme.paddingBottom.subheadingSecondary,
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  paddingBottom,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "appBarText" && styles.appBarTextColor,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    paddingBottom === "bottomSpaced" && styles.bottomSpaced,
    paddingBottom === "bottomSpacedSecondary" && styles.bottomSpacedSecondary,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
