import {
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import PostListItem from "../components/PostListItem";
import { usePosts } from "../hooks/posts";
import { SWRConfig } from "swr";

export default function postsScreen() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data. {error.message}</Text>;
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}

