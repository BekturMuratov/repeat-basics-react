export const getPageCount = (totalCount, total) => {
    return Math.ceil(totalCount / total)
}

export const getArrayPages = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1) 
    }
    return result
}