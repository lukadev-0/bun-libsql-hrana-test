import { createClient } from "@libsql/client/web";

const db = createClient({
  url: "http://127.0.0.1:8080",
});

const rs = await db.execute("SELECT * FROM users");
console.log(rs);
