export const visitStatus = (id) => {
    return {
        type: 'visitStatus',
        payload: id
    }
}
export const visitCount = (id) => {
    return {
        type: 'visitCount',
        payload: id
    }
}
