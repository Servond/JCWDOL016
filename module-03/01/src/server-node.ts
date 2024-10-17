import http, { IncomingMessage, ServerResponse } from "http";
import { PORT as port } from "./config";

const PORT = Number(port) || 8000;

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "Application/json" });

      res.write("This is /api with GET method");

      res.end();
    }

    if (req.url === "/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "Application/json" });

      res.write("This is /users with GET method");

      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
