import react from "react";
import Constanst from "expo-constants";
import { View } from "react-native"
import RepositoryList from "./RepositoryList";


const Main = () => {
  return (
    <View style={{marginTop:Constanst.statusBarHeight, flexGrow:1}}>
      <RepositoryList />
    </View>
  )
}
export default Main;