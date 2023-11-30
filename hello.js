const Hello = (app) => {
    app.get('/api/hello', (req, res) => {
        res.send('Life is good!')
    })
    app.get('/api', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })
}

export default Hello;
