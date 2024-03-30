import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform
} from "react-native";
import useSWR from "swr";
import PostListItem from "./src/components/PostListItem";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Failed to fetch data. {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <PostListItem post={item} />}
        contentContainerStyle={{ gap: 10, padding: 10}}
      />
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
    paddingTop: Platform.OS === 'android' ? 28 : 0
  },
});
