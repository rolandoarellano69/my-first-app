import react from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";


const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText fontWeight='bold'>Stars:</StyledText>
        <StyledText >{props.stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold'>Forks:</StyledText>
        <StyledText bold>{props.forksCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold'>Reviews:</StyledText>
        <StyledText bold>{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold'>Rating:</StyledText>
        <StyledText bold>{props.ratingAverage}</StyledText>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },

});

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize='subheading' fontWeight='bold' >{props.name}</StyledText>
    <StyledText bold blue> {props.description}</StyledText>
    <StyledText big> {props.language}</StyledText>
    <RepositoryStats {...props}
    />
  </View>
)
export default RepositoryItem;