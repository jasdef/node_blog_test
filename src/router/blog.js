const {getList} = require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method;
    const path = req.path

    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }

    if (method === 'GET' && path === '/api/blog/detail') {
        return {msg : "獲取blog詳情API"}
    }

    if (method === 'POST' && path === '/api/blog/update') {
        return {msg : "更新blog API"}
    }

    if (method === 'POST' && path === '/api/blog/new') {
        return {msg : "新增blog API"}
    }

    if (method === 'POST' && path === '/api/blog/del') {
        return {msg : "刪除blog API"}
    }
}

module.exports = handleBlogRouter