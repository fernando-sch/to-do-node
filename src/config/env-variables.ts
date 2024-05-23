type EnvObjectType = {
  dbName: string;
  dbUser: string;
  dbPassword: string;
};

export const EnvObject: EnvObjectType = {
  dbName: process.env.POSTGRES_DB || "postgres",
  dbUser: process.env.POSTGRES_USER || "postgres",
  dbPassword: process.env.POSTGRES_PASSWORD || "postgres",
};
