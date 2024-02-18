import pg from 'pg'



let db;

export const connect = () => {
  if (!db) {
    db = new pg.Pool({
      user: process.env.DB_USER,
      database: 'postgres',
      password: process.env.DB_KEY,
      host: 'aws-0-eu-west-2.pooler.supabase.com'
    })
    return db
  }

  return db
}