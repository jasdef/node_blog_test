const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel} = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method;    
    const path = req.path

    if (method === 'POST' && path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)

        if (result) { 
            return new SuccessModel()
        }


        return new ErrorModel('login fail')
    }
}

module.exports = handleUserRouter;