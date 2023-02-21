export const SEARCH = "SEARCH";

export const search = (query:any) => ({
    type: SEARCH,
    payload: {
        query,
    },
});