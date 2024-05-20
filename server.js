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
const bodyParser = require('body-parser')
const handle = routes.getRequestHandler(app)
const { join } = require('path')

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    server.use(cors())
    server.use(bodyParser.json())
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
    // Intercept the login post to store the HTTPS Cookie by the change
    // of the domain
    server.post('/api/login', async (req, res) => {
      try {
        const response = await fetch(
          `${process.env.BASE_DOMAIN}/user/login?_format=json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
          }
        )
        const cookie = response.headers.get('set-cookie')

        if (!cookie) {
          return res.status(500).json({ error: 'No authorization cookie' })
        }

        const overwritedCookie = cookie?.replace(
          `${process.env.BACKEND_DOMAIN?.replace('https://', '')}`,
          `${process.env.BASE_DOMAIN?.replace('https://', '')}`
        )
        const data = await response.json()
        res.setHeader('Set-Cookie', overwritedCookie)
        return res.status(200).json(data)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    })
    // Intercept the profile post to send the HTTPS Cookie
    server.post('/api/profile', async (req, res) => {
      const { uid, token } = req.body
      try {
        const response = await fetch(
          `${process.env.BASE_DOMAIN}/user/${uid}?_format=json`,
          {
            headers: {
              'X-CSRF-Token': token,
              'Content-Type': 'application/json',
              Cookie: req.headers.cookie,
            },
          }
        )
        const data = await response.json()
        if (!data?.field_tipo_de_usuario) {
          return res
            .status(401)
            .json({ error: data?.message ?? 'Unauthorized' })
        }
        return res.status(200).json({
          field_nombre: data.field_nombre,
          field_numero_de_telefono: data.field_numero_de_telefono,
          field_tipo_de_usuario: data.field_tipo_de_usuario,
          mail: data.mail,
        })
      } catch (error) {
        console.error('🚀 ~ error:', error)
        return res.status(500).json({ error: error.message })
      }
    })
    // Intercept the profile patch to send the HTTPS Cookie
    server.patch('/api/profile', async (req, res) => {
      const { uid, token, name, celphone } = req.body
      const obj = {}
      if (celphone) {
        obj['field_numero_de_telefono'] = [{ value: celphone }]
      }
      obj['field_nombre'] = [{ value: name }]
      try {
        const response = await fetch(
          `${process.env.BASE_DOMAIN}/user/${uid}?_format=json`,
          {
            method: 'PATCH',
            headers: {
              'X-CSRF-Token': token,
              'Content-Type': 'application/json',
              Cookie: req.headers.cookie,
            },
            body: JSON.stringify(obj),
          }
        )
        const data = await response.json()
        if (!data?.field_nombre) {
          return res
            .status(401)
            .json({ error: data?.message ?? 'Unauthorized' })
        }
        return res.status(200).json({
          field_nombre: data.field_nombre,
          field_numero_de_telefono: data.field_numero_de_telefono,
          field_tipo_de_usuario: data.field_tipo_de_usuario,
          mail: data.mail,
        })
      } catch (error) {
        console.error('🚀 ~ error:', error)
        return res.status(500).json({ error: error.message })
      }
    })
    // Intercept the post to send the HTTPS Cookie and server headers
    server.post('/api/post-form', async (req, res) => {
      try {
        const response = await fetch(
          `${process.env.BASE_DOMAIN}/webform_rest/submit?_format=json`,
          {
            method: 'POST',
            headers: {
              'X-CSRF-Token': req.body.token,
              'Content-Type': 'application/json',
              Cookie: req.headers.cookie,
            },
            body: JSON.stringify(req.body),
          }
        )
        const data = await response.json()
        if (!data?.sid) {
          return res
            .status(500)
            .json({ error: data.message ?? 'Error al enviar el formulario' })
        }
        return res.status(200).json(data)
      } catch (error) {
        console.error('🚀 ~ error:', error)
        return res.status(500).json({ error: error.message })
      }
    })
    // Intercept the post to send the HTTPS Cookie and server headers
    server.post('/api/postulations', async (req, res) => {
      const { uid, token, role } = req.body
      try {
        const response = await fetch(
          `${process.env.BASE_DOMAIN}/webform_rest/postulaciones/${uid}?_format=json`,
          {
            headers: {
              'X-CSRF-Token': token,
              'Content-Type': 'application/json',
              Cookie: req.headers.cookie,
            },
          }
        )
        const data = await response.json()
        if (!data || data?.length === 0) {
          return res
            .status(401)
            .json({ error: data?.message ?? 'No postulations' })
        }
        const postulations = []
        let formByRole = ''
        switch (role) {
          case 'persona':
            formByRole = 'postulaciones'
            break
          case 'empresa':
            formByRole = 'postulaciones_empresas'
            break
          case 'agencia':
            formByRole = 'postulaciones_agencias'
            break
        }
        // Create the promises to get the postulations
        data.forEach((postulation) => {
          postulations.push(
            fetch(
              `${process.env.BASE_DOMAIN}/webform_rest/${formByRole}/submission/${postulation.uuid}?_format=json`,
              {
                headers: {
                  'X-CSRF-Token': token,
                  'Content-Type': 'application/json',
                  Cookie: req.headers.cookie,
                },
              }
            )
          )
        })
        // Promises to get the postulations details
        Promise.all(postulations)
          .then((responses) =>
            Promise.all(responses.map((response) => response.json()))
          )
          .then((data) => {
            // parse the data to get the category cleaned
            return res.status(200).json(
              data.map((postulation) =>
                postulation.data?.categoria[0]
                  .replace(/empresa_/g, ' ')
                  .replace(/persona_/g, ' ')
                  .replace(/_/g, ' ')
                  .trim()
              )
            )
          })
          .catch((error) => {
            console.error('🚀 ~ error:', error)
            return res.status(500).json({ error: error.message })
          })
      } catch (error) {
        console.error('🚀 ~ error:', error)
        return res.status(500).json({ error: error.message })
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
