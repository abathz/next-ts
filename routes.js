const Routes = require('next-routes')
const routes = Routes()

routes.add('home', '/', 'index')
routes.add('about', '/about', 'about')

module.exports = routes
