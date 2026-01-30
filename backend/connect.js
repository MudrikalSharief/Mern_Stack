const mysql = require('mysql2/promise')
require('dotenv').config({ path: "./config.env" })

let pool

module.exports = {
  connectToServer: async () => {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    })
    // test connection
    const conn = await pool.getConnection()
    conn.release()
    console.log("MySQL connected")
  },

  // Use this to run queries: SELECT returns rows array; INSERT/UPDATE/DELETE return result packet
  query: async (sql, params = []) => {
    const [result] = await pool.execute(sql, params)
    return result
  },

  getPool: () => pool
}