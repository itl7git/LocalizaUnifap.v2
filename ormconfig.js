module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "synchronize": true,
    "logging": true,
    "entities": ["./dist/models/*.js"],
    "migrations": ["./dist/database/migrations/*.js"],
    "cli": {
      "migrationsDir": "./dist/database/migrations"
    },
    "entitiesDir": "./src/models",
    "ssl": true,
    "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }