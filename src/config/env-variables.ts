type EnvObjectType = {
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUser: string;
  dbPassword: string;
};

export const EnvObject: EnvObjectType = {
  dbHost: process.env.DATABASE_HOST || "localhost",
  dbPort: process.env.POSTGRES_PORT
    ? parseInt(process.env.POSTGRES_PORT, 10)
    : 5432,
  dbName: process.env.POSTGRES_DB || "postgres",
  dbUser: process.env.POSTGRES_USER || "postgres",
  dbPassword: process.env.POSTGRES_PASSWORD || "postgres",
};
