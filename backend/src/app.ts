import express from 'express'
import config from './config'

import videoRoutes from "./routes/video.routes";

const app = express()

app.set('port', config.PORT)
app.use(videoRoutes)

export default app
