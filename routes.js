const Routes = require('next-routes')
const routes = (module.exports = Routes())

routes.add('home', '/', 'index')
routes.add('about', '/about', 'about')
