import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

// console.log({
//   user: process.env.DB_USER,
//   database: 'postgres',
//   password: process.env.DB_KEY,
//   host: 'aws-0-eu-west-2.pooler.supabase.com'
// })

// const db = new pg.Pool({
//   user: process.env.DB_USER,
//   database: 'postgres',
//   password: process.env.DB_KEY,
//   host: 'aws-0-eu-west-2.pooler.supabase.com'
// })

const db = new pg.Pool({
  connectionString: process.env.DB_CONNECT_STRING
})

db.query('create table TEST2 (id serial primary key)')