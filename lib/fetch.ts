import fetch from 'isomorphic-unfetch';

/**
 * This is a basic sugar on top of Fetch, simply to make sure we get json whenever we fetch data,
 * and also to avoid writing that each time.
 */

/**
 * Fetch data
 */
export default async function(input: RequestInfo, init?: RequestInit) {
    const res = await fetch(input, init);
    return res.json();
}
