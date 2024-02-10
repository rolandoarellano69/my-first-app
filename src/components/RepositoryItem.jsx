import react from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },

});

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText big bold>id: {props.id}</StyledText>
    <StyledText blue  >Name: {props.name}</StyledText>
    <StyledText bold blue>Description: {props.description}</StyledText>
    <StyledText big>Lenguage: {props.language}</StyledText>
    <StyledText small>Forks: {props.forksCount}</StyledText>
    <StyledText small>Stars: {props.stargazersCount}</StyledText>
    <StyledText small>Rating: {props.ratingAverage}</StyledText>
    <StyledText small>Review{props.reviewCount}</StyledText>
    <StyledText>{props.ownerAvatarUrl}</StyledText>
  </View>
)
export default RepositoryItem;