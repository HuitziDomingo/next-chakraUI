export class HighlighterCode {

    static codeInit = `
yarn init -y
`

    static codeDev = `
"scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
`
    static codeConfiguration = `
yarn add express cors dotenv mongoose morgan bcryptjs jsonwebtoken helmet
`
    static codeConfigurationTypes = `
yarn add @types/express @types/cors @types/morgan @types/bcryptjs @types/jsonwebtoken @types/helmet ts-node-dev typescript -D
`
    static codeTsInit = `
tsc --init
`
    static codeTsInitNPX = `
npx tsc --init
`
    static codeTsConfig = `
"rootDir": "./src",
"resolveJsonModule": true,
"outDir": "./dist", 
`
    static codeTsApp = `
import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import pkg from '../package.json'

import * as dotenv from 'dotenv';

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())//Ver los datos en consola como JSON
app.use(morgan('dev'))//Ver las peticiones en consola
app.use(helmet())//Seguridad en la peticiones

app.set('pkg', pkg)

app.get('/', (req: Request, res: Response) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
    })
})

export default app
`
    static codeTsIndex = `
import app from "./app"

app.listen(process.env.PORT || 4000, () => console.log('Hola EXPRESS corriendo en el puerto: 4000' ))
`
    static codeRunProyect = `
yarn dev
`
    static codeYaml = `
version: '3.8'

services:

  db:
    image: mongo:6
    restart: always
    ports:
      - 27017:27017
    environment:
      MONGODB_DATABASE: mongo
    volumes:
      - ./mongo:/data/db
`
    static codeDockerBuild = `
docker compose up -d
`
    static codeDockerRun = `
docker compose up
`
    static codeIndexUpdated = `
import app from "./app"
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

app.listen(process.env.PORT || 4000, () => console.log('Hola EXPRESS corriendo en el puerto: 4000' ))
mongoose.connect('mongodb://localhost:27017/mongo')
.then(() => console.log('Conexion a MONGO establecida'))
.catch(() => console.log('Error en la conexion a MONGO'))
`




}


