import env from "dotenv";

env.config();

export const variables = {
  port: process.env.PORT,
  db: process.env.DB,
}