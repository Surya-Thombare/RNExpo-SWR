import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useUser(id:number) {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return { user: data, error, isLoading }
}