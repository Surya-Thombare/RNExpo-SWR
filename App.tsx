import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { SWRConfig } from "swr";
import PostsScreen from "./src/app/PostsScreen";
import { fetcher } from "./src/utils/fetcher";

export default function App() {
  return (
    <SWRConfig value={{ fetcher, dedupingInterval: 2000 }}>
      <SafeAreaView style={styles.container}>
        <PostsScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SWRConfig>
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
