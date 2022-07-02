const handleUserRouter = (req, res) => {
    const method = req.method;    
    const path = req.path

    if (method === 'POST' && path === '/api/user/login') {
        return {msg : "login api"}
    }



}

module.exports = handleUserRouter;