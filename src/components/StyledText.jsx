import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "gray",
    fontSize: 20,
  },
  bold:{
    fontWeight: "bold"

  },
  blue:{
    color: "blue"
  },
  big:{
    fontSize: 30
  },
  small:{
    fontSize: 10
  }

});
export default function StyledText ({blue,bold,children, big, small}) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small

  ]
  return(
    <Text style={textStyles}>
    {children}
    </Text>
  )
}