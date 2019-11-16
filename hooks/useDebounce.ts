import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { QueryKey, useQuery } from 'react-query';
import useConstant from 'use-constant';

/**
 * `useDebounce` is a hook that debounce a given Promise and return a `useQuery` from `react-query` as a result.
 * As it use `react-query` under the hood so results are cached based on the given `queryKey`, for more information
 * on that part please refer yourself to the `react-query` documentation.
 *
 * # How to use
 * ```
 * const search = useDebounce(['multisearch', { input }], ({ value }) =>
 *      axios('/api/search', { params: { search: value } }),
 *  );
 * ```
 *
 * `input` is a variable that you give however you want
 *
 * @param queryKey
 * @param request Promise you want to debounce
 * @param wait Debounce time
 */
export default <T extends object>(queryKey: QueryKey<T>, request: (variables: T) => Promise<any>, wait = 200) => {
    // Create a Promise that will be trigger only every `wait` time and when `T` are updateds
    const debouncedSearch = useConstant(() => AwesomeDebouncePromise(request, wait));

    // Create a query out of that promise
    const search = useQuery(queryKey, debouncedSearch);

    return search;
};
