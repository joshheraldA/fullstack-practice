const authorize = (req, res, next) => {
    const { password } = req.query
    
    
    if(password === '12345') {
        req.user = { name: 'josh', id: 3 }
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }

}

module.exports = authorize