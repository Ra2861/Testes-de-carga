import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
// import { routerClient } from './routes/router.client'
import { routerEmployer } from './routes/router.employer'
import swaggerFile from './swagger-output.json'
import { routerClient } from './routes/router.client'

dotenv.config()

export const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/employer', routerEmployer)

app.use('/client', routerClient)

if (require.main === module) {
  // inicia o servidor
  app.listen(port)
  console.log(`[server]: Server is running at http://localhost:${port}`)
}
