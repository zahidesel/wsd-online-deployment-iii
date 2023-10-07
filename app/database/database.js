import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({
host: "localhost",
  database: "postgres",
  username: "postgres",
  password: "zenebe90",
  port: 5432,
  max: 2, 
  });
}



export { sql };