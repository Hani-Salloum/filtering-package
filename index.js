const findById = (arr, id) => {
    return arr.find(item => item.id === id)
}

const findBy = (arr, property, value) => {
    return arr.find(item => item[property] === value)
}

const filterById = (arr, id) => {
    return arr.filter(item => item.id === id)
}

const filterBy = (arr, property, value) => {
    return arr.filter(item => item[property] === value)
}

const removeById = (arr, id) => {
    return arr.filter(item => item.id !== id)
}

const removeBy = (arr, property, value) => {
    return arr.filter(item => item[property] !== value)
}

module.exports = {
    findById,
    findBy,
    filterById,
    removeById,
    filterBy,
    removeBy,
}