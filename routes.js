const Routes = require('next-routes')

module.exports = Routes()
  .add('home', '/', 'index')
  .add('about', '/about', 'about')
