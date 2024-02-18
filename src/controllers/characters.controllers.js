import {connect} from '#src/util/connect_db.js'


const getCharacters = async (req, res) => {
  const db = connect()
  const send = (await db.query(`SELECT * from characters`)).rows
  res.status(200).json({
    data: send
  })
}

