import fs from 'fs'
import {connect} from './connect_db.js'

import dotenv from 'dotenv'
dotenv.config()

// create migrations table
// index, filepath
// read migrations folder
// if filepath in migrations table, skip
// otherwise exectue the sql query. 


export async function migrate() {
  const db = connect()
  await db.query(`CREATE TABLE IF NOT EXISTS migrations (
    id INT GENERATED ALWAYS AS IDENTITY,
    filename VARCHAR(50)
  )`)


  const files = fs.readdirSync('./src/migrations')
  const filesRun = new Set((await db.query(`SELECT filename FROM migrations`)).rows)
  // >???
  for (let file of files) {
    if (filesRun.has(file)) {
      const data = fs.readFileSync(`./src/migrations/${file}`, 'utf-8')
      await db.query(data)

      await db.query(`INSERT INTO migrations (filename) values ($1)`, [file])
    } else {
      console.log(`Skipped ${file}`)
    }
  }
}
