const loginCheck = (username, password) => { 
    if (username === "bella" && password === '123') { 
        return true
    }
    return false
}

module.exports = {
    loginCheck
}