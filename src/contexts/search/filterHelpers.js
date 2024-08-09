export const filterList = (list, query) => {
    // console.log(list)
    // console.log(query)
    if (!query) {
        return list;
    }
    return list.filter(item => 
        (item.name + " " + item.lastName).toLowerCase().includes(query.toLowerCase())
    );
};
