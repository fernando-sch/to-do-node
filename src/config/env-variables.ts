type EnvObjectType = {
  dbHost: string;
  dbName: string;
  dbUser: string;
  dbPassword: string;
};

export const EnvObject: EnvObjectType = {
  dbHost: process.env.DATABASE_HOST || "localhost",
  dbName: process.env.POSTGRES_DB || "postgres",
  dbUser: process.env.POSTGRES_USER || "postgres",
  dbPassword: process.env.POSTGRES_PASSWORD || "postgres",
};
