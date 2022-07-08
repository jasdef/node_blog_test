const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const getCookieExpries = () => { 
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    console.log('d.toGMTString is ', d.toGMTString())
    return d.toGMTString()
}
const handleUserRouter = (req, res) => {
    const method = req.method;    
    const path = req.path

    // if (method === 'POST' && path === '/api/user/login') {
    //     const { username, password } = req.body
    //     const result = login(username, password)

    //     return result.then(data => { 
    //         if (data.username) { 
    //             return new SuccessModel()
    //         }

    //         return new ErrorModel('login fail')
    //     })
    
    // }

    if (method === 'GET' && path === '/api/user/login') {
        const { username, password } = req.query
        const result = login(username, password)

        return result.then(data => { 
            if (data.username) { 

                req.session.username = data.username
                req.session.realname = data.realname
                console.log('req session is ', req.session)
                return new SuccessModel()
            }

            return new ErrorModel('login fail')
        })
    
    }


    if (method === 'GET' && req.path === '/api/user/login-test') { 
        if (req.session.username) {
            return Promise.resolve(new SuccessModel({session:req.session}))
        }

        return Promise.resolve(new ErrorModel('not login'))
    }
}

module.exports = handleUserRouter;