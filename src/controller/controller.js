
const list = (req, res, next) => {
    res.json({list})
}
const update = (req, res, next) => {
    res.json({update: 'update'})
}
const create = (req, res, next) => {
    res.json({create: 'create'})
}
const remove = (req, res, next) => {
    res.json({remove: 'remove'})
}

module.exports = {
    list,
    update,
    create,
    remove,
}
