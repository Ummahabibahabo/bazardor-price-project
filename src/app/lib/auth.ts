import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_AUTH_URL as string);
const db = client.db("bazardor-price");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOGGLE_CLIENT_ID as string,
      clientSecret: process.env.GOGGLE_SECRET_ID as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
