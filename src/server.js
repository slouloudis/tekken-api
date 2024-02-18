import express from 'express'
import pg from "pg"
import dotenv from "dotenv"
import cors from "cors"

import { migrate } from './util/migrations.js'
import { getCharacters } from './controllers/characters.controllers.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

app.get('/ping', (req, res) => res.send('pong!'))

app.get('/v1/characters', getCharacters)


// process.argv returns array [pathtoprocess, pathtofile, argument]
if (process.argv[2] === 'server') {
  app.listen(process.env.URL || 2020, () => {
    console.log('Server running (҂◡_◡) ᕤ')
  })
} else if (process.argv[2] === 'migrate') {
  migrate().then(console.log('Migrating.... 	(-(-_-(-_(-_(-_-)_-)-_-)_-)_-)-)'))
}