// server/utils/mysql.ts
import { useRuntimeConfig } from '#imports'
import { createPool } from 'mysql2/promise'

const config = useRuntimeConfig()

export const pool = createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  connectionLimit: 10,
  timezone: '+08:00',
})
