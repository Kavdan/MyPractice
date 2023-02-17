const getPageCount = (limit, totalPage) => {
    return Math.ceil(totalPage / limit);
}

export default getPageCount;