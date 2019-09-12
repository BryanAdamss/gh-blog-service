import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'

const port = process.env.PORT || 3000
const msg = `服务启动在${port}端口`

createConnection()
  .then(async connection => {
    console.log('database connected')
    const app = express()

    app.use(cors())
    app.use(helmet())
    app.use(bodyParser.json())

    app.listen(port, () => console.log(msg))
  })
  .catch(error => console.log(error))
