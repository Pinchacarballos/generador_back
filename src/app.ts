import "reflect-metadata"

import * as bodyParser from "body-parser"
import { InversifyExpressServer } from "inversify-express-utils"
import container from "./shared/container"
import cors from "cors"

const server = new InversifyExpressServer(container)
const port = 3000

server.setConfig((expressApp) => {
  expressApp.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  expressApp.use(cors())
  expressApp.use(bodyParser.json())
})

const app = server.build()
app.listen(port, () => {
  console.info(`server listening on port ${port}`)
})
