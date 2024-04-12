import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query'

export function useQueryCustom<TData = unknown, TError = Error>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData>
) {
  const result = useQuery<TData, TError>({ queryKey, queryFn })

  return result
}
