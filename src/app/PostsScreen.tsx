import {
  ActivityIndicator,
  Text,
  FlatList,
  Button,
} from "react-native";
import PostListItem from "../components/PostListItem";
import { usePosts } from "../hooks/posts";

export default function postsScreen() {
  const { posts, isLoading, error, mutate } = usePosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data. {error.message}</Text>;
  }

  const runMutation = () => {
    mutate();
  }

  return (
    <>
    <Button title="ReFresh" onPress={runMutation} />
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
    </>
  );
}

