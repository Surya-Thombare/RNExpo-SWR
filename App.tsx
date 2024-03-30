import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { SWRConfig } from "swr";
import PostsScreen from "./src/app/PostsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PostsScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 28 : 0,
  },
});
