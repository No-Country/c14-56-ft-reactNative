import { Sequelize } from 'sequelize'

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'LinkUpProyect',
  port: 5432,
  logging: false,
})

export default db
