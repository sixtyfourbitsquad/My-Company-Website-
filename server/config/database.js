import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

let sequelize;

if (isProduction && process.env.DATABASE_URL) {
  // Production: Use cloud database (Postgres, MySQL, etc.)
  const databaseUrl = process.env.DATABASE_URL;
  
  // Determine dialect from URL
  let dialect = 'postgres';
  if (databaseUrl.includes('mysql://')) {
    dialect = 'mysql';
  } else if (databaseUrl.includes('postgres://') || databaseUrl.includes('postgresql://')) {
    dialect = 'postgres';
  }

  sequelize = new Sequelize(databaseUrl, {
    dialect,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    define: {
      timestamps: true,
      underscored: false,
    },
  });
} else {
  // Development: Use SQLite
  const dbPath = path.join(__dirname, '..', 'database.sqlite');
  
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    define: {
      timestamps: true,
      underscored: false,
    },
  });
}

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Database connection established successfully (${isProduction ? 'Production' : 'Development'}).`);
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    throw error;
  }
};

export { sequelize, testConnection };
