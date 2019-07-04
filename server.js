require('dotenv').config();
const express = require('express')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
    const server = express()

    server.use(handler)

    server.get('*', (req, res) => {
        res.setHeader('Service-Worker-Allowed', '/')
        return handler(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`>[${dev ? 'Development' : 'Production'}] Ready on http://localhost:${port}`)
    })
})
