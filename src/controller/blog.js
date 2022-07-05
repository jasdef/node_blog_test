const getList = (author, keyword) => {
    return [{
        id: 1,
        title: '標題A',
        content: '內容A',
        createTime: 1656990291639,
        author: 'apple'
    },
    {
        id: 2,
        title: '標題B',
        content: '內容B',
        createTime: 1656990393953,
        author: 'bella'
    }
    
    ]
} 

const getDetail = (id) => { 
    return {
        id: 1,
        title: '標題A',
        content: '內容A',
        createTime: 1656990291639,
        author: 'apple'
    }
}

module.exports = {
    getList,
    getDetail
}