import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function usePosts() {

  const { data, error, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return { posts: data, error, isLoading , mutate}
}