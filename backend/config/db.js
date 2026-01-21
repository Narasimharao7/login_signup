import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

/* ✅ Connect to PostgreSQL using DATABASE_URL from .env */
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false, // set true if you want SQL logs
});

/* ✅ Test connection */
sequelize
  .authenticate()
  .then(() => console.log("Database connected ✅"))
  .catch((err) => console.log("DB connection error ❌", err));

export default sequelize;
