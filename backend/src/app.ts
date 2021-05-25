import express from 'express'
import morgan from 'morgan';
import config from './config'

import videoRoutes from "./routes/video.routes";

const app = express()

app.set('port', config.PORT)

app.use(morgan('dev'))

app.use(videoRoutes)

export default app
