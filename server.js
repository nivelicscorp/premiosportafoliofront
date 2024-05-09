const express = require('express')
const fileupload = require('express-fileupload')
const next = require('next')
const routes = require('./routes')
const cors = require('cors')
const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 3050
const app = next({ dev, hostname, port })
const handle = routes.getRequestHandler(app)
const { join } = require('path')

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    server.use(cors())
    server.use('/', express.static('public'))

    // Implementacion de CORS para la realizacion de request a servicios externos
    // Configuraciones del fileUpload
    server.use(
      fileupload({
        createParentPath: true,
      })
    )
    // CORS middleware
    server.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET, POST')
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
      next()
    })
    // Make express responds to all NextJS routes
    server.get('/', cors(), (req, res) => {
      return handle(req, res)
    })

    server.get('*', cors(), (req, res) => {
      if (req.url.includes('/sw')) {
        const filePath = join(__dirname, 'static', 'sw.js')
        app.serveStatic(req, res, filePath)
      } else {
        handle(req, res, req.url)
      }
    })

    // Intercepto del post a upload-file para la carga de archivos
    server.post('/upload-file', async (req, res) => {
      try {
        if (!req.files) {
          res.send({
            status: 'failed',
            message: 'No file uploaded',
          })
        } else {
          const file = req.files.file
          const fileName = req.body.name.replace(/ /g, '_')

          file.mv('./public/static/assets/backend/private/' + fileName)

          res.send({
            status: 'success',
            message: 'File is uploaded',
            data: {
              name: fileName,
              mimetype: file.mimetype,
              size: file.size,
            },
          })
        }
      } catch (err) {
        res.status(500).send(err)
      }
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(
        `[${new Date()}] =>`,
        `Ready on http://localhost:${port} > ENV ${process.env.NODE_ENV}`
      )
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
