module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    // username: 'usersparklinglab',
    // password: '#Gfgrupo6',
    // database: 'bdsparklinglab',
    // host: 'srvsparklinglab.database.windows.net',
    // dialect: 'mssql',
    username: 'root',
    password: '',
    database: 'condominio',
    host: 'localhost',
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
