import {
  useMutation,
  UseMutationResult,
  MutationFunction,
  useQueryClient,
} from '@tanstack/react-query'
import { QueryKey, InvalidateQueryFilters } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface UseMutationCustomOptions<TData, TVariables> {
  queryKey: QueryKey
  mutationFn: MutationFunction<TData, TVariables>
  onSuccessFunction?: () => void
  updateQueryData?: (updateData: TData, queryData: TData[] | undefined) => TData[]
}

export function useMutationCustom<
  TData,
  TError = AxiosError,
  TVariables = void,
  TContext = unknown
>({
  queryKey,
  mutationFn,
  onSuccessFunction,
  updateQueryData,
}: UseMutationCustomOptions<TData, TVariables>): UseMutationResult<
  TData,
  TError,
  TVariables,
  TContext
> {
  const queryClient = useQueryClient()

  return useMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    onSuccess: (updateData) => {
      if (updateQueryData) {
        queryClient.setQueryData<TData[]>(queryKey, (oldData) =>
          updateQueryData(updateData, oldData)
        )
      }
      onSuccessFunction?.()
      queryClient.invalidateQueries(queryKey as InvalidateQueryFilters)
    },
  })
}
