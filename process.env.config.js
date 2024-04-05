/**
 *
 * Inicializa la llamada del ecosystem cuando se ejecuta el comando npm run build
 *
 * @mixin ProcessEnv
 *
 */

module.exports = {
  /**
   * Asignación de las variables del ecosystem de PM2
   *
   *
   * @function ProcessEnv.execute
   */

  execute: function () {
    let ecosystem = require('./ecosystem.config.js')
    let enviroment = 'development'

    if (process.env.NODE_ENV !== undefined) {
      enviroment = process.env.NODE_ENV
    } else {
      process.env.NODE_ENV = enviroment
    }

    if (process.env.NODE_ENV === 'test') {
      enviroment = 'development'
    }

    let apps = ecosystem.apps
    apps.map(function (app, i) {
      Object.keys(app).forEach(function (env, j) {
        if (env === 'env_' + enviroment) {
          Object.keys(app[env]).forEach(function (key, j) {
            if (typeof app[env][key] === 'object') {
              app[env][key] = JSON.stringify(app[env][key])
            }
            process.env[key] = app[env][key]
          })
        }
      })
    })
  },
}
